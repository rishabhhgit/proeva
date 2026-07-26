"""
DEVCERT PYTHON SERVER
FastAPI app exposing the full evaluation pipeline over HTTP.

Endpoints:
  POST /evaluate              → Full 3-stage evaluation
  POST /evaluate/quick        → Fast scores + domain only (for previews)
  POST /phase2/questions      → Generate interview questions
  POST /phase2/answers        → Score developer answers
  POST /analyze/bugs          → Bug detection only
  POST /analyze/architecture  → Architecture analysis only
  POST /analyze/best-practices → Best practices check only
  POST /analyze/improvements  → Improvement suggestions only
  POST /analyze/plagiarism    → Plagiarism / originality scan only
  POST /classify/domain       → Domain classification only
  GET  /health                → Liveness check
  GET  /providers             → Which API keys are configured
"""

import logging
import os
from contextlib import asynccontextmanager

from dotenv import load_dotenv

load_dotenv()

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from pipeline.pipeline import run_evaluation
from agents.agents import (
    detect_bugs,
    analyze_architecture,
    score_fast,
    scan_plagiarism,
    check_best_practices,
    advise_improvements,
    classify_domain,
    generate_questions,
    evaluate_answers,
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger(__name__)


# ── Pydantic models ───────────────────────────────────────────────────────────

class Project(BaseModel):
    id:          str
    title:       str
    domain:      str = "Full Stack"
    description: str | None = None


class CodeContext(BaseModel):
    title:        str
    domain:       str = "Full Stack"
    description:  str | None = None
    fileTree:     list[str] = Field(default_factory=list)
    fileContents: str       = ""
    techStack:    list[str] = Field(default_factory=list)


class EvaluateRequest(BaseModel):
    project:     Project
    codeContext: CodeContext


class QuickEvaluateRequest(BaseModel):
    codeContext: CodeContext


class SingleAnalysisRequest(BaseModel):
    codeContext: CodeContext


class ImprovementRequest(BaseModel):
    codeContext:        CodeContext
    bugReport:          dict = Field(default_factory=dict)
    architectureReport: dict = Field(default_factory=dict)


class QuestionGenRequest(BaseModel):
    codeContext:        CodeContext
    bugReport:          dict = Field(default_factory=dict)
    architectureReport: dict = Field(default_factory=dict)
    fastScores:         dict = Field(default_factory=dict)


class QA(BaseModel):
    type:       str = ""
    file:       str = ""
    question:   str
    goodAnswer: str = ""
    answer:     str | None = None


class AnswerEvalRequest(BaseModel):
    projectSummary:      str
    detectedLevel:       str = "Intermediate"
    questionsAndAnswers: list[QA]


# ── App setup ─────────────────────────────────────────────────────────────────

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("DevCert Pipeline server starting…")
    _log_provider_status()
    yield
    logger.info("DevCert Pipeline server stopping…")


def _log_provider_status():
    keys = {
        "Groq":       "GROQ_API_KEY",
        "Cerebras":   "CEREBRAS_API_KEY",
        "Cloudflare": "CLOUDFLARE_API_TOKEN",
        "Mistral":    "MISTRAL_API_KEY",
    }
    for name, env in keys.items():
        status = "✓ configured" if os.environ.get(env) else "✗ missing"
        logger.info("  Provider %-12s %s", name, status)


app = FastAPI(
    title="DevCert Evaluation Pipeline",
    description="Multi-agent AI code analysis server for developer project evaluation.",
    version="2.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # tighten in production
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Helpers ───────────────────────────────────────────────────────────────────

def _wrap(data: dict) -> dict:
    return {"success": True, "data": data}


def _handle(exc: Exception, label: str) -> HTTPException:
    logger.exception("%s failed", label)
    return HTTPException(status_code=500, detail=str(exc))


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/health", tags=["meta"])
async def health():
    return {"status": "ok", "service": "devcert-pipeline", "version": "2.0.0"}


@app.get("/providers", tags=["meta"])
async def providers():
    """Returns which AI provider API keys are present in the environment."""
    return {
        "groq":       bool(os.environ.get("GROQ_API_KEY")),
        "cerebras":   bool(os.environ.get("CEREBRAS_API_KEY")),
        "cloudflare": bool(os.environ.get("CLOUDFLARE_API_TOKEN")),
        "mistral":    bool(os.environ.get("MISTRAL_API_KEY")),
    }


@app.post("/evaluate", tags=["pipeline"])
async def evaluate(req: EvaluateRequest):
    """
    Full 3-stage evaluation: bugs + architecture + scores + plagiarism +
    best practices + domain + improvements + questions + synthesis.
    """
    try:
        result = await run_evaluation(
            project=req.project.model_dump(),
            code_context=req.codeContext.model_dump(),
        )
        return _wrap(result)
    except Exception as exc:
        raise _handle(exc, f"evaluate/{req.project.id}") from exc


@app.post("/evaluate/quick", tags=["pipeline"])
async def evaluate_quick(req: QuickEvaluateRequest):
    """
    Fast scores + domain classification only.
    Good for a 'preview' before the full run.
    """
    import asyncio
    try:
        fast_scores, domain_report = await asyncio.gather(
            score_fast(req.codeContext.model_dump()),
            classify_domain(req.codeContext.model_dump()),
        )
        return _wrap({"fastScores": fast_scores, "domainReport": domain_report})
    except Exception as exc:
        raise _handle(exc, "evaluate/quick") from exc


# ── Single-agent endpoints ────────────────────────────────────────────────────

@app.post("/analyze/bugs", tags=["agents"])
async def analyze_bugs(req: SingleAnalysisRequest):
    """Run only the bug detector agent."""
    try:
        return _wrap(await detect_bugs(req.codeContext.model_dump()))
    except Exception as exc:
        raise _handle(exc, "analyze/bugs") from exc


@app.post("/analyze/architecture", tags=["agents"])
async def analyze_arch(req: SingleAnalysisRequest):
    """Run only the architecture analyst agent."""
    try:
        return _wrap(await analyze_architecture(req.codeContext.model_dump()))
    except Exception as exc:
        raise _handle(exc, "analyze/architecture") from exc


@app.post("/analyze/best-practices", tags=["agents"])
async def analyze_bp(req: SingleAnalysisRequest):
    """Run only the best practices checker agent."""
    try:
        return _wrap(await check_best_practices(req.codeContext.model_dump()))
    except Exception as exc:
        raise _handle(exc, "analyze/best-practices") from exc


@app.post("/analyze/plagiarism", tags=["agents"])
async def analyze_plagiarism(req: SingleAnalysisRequest):
    """Run only the plagiarism / originality scanner agent."""
    try:
        return _wrap(await scan_plagiarism(req.codeContext.model_dump()))
    except Exception as exc:
        raise _handle(exc, "analyze/plagiarism") from exc


@app.post("/analyze/improvements", tags=["agents"])
async def analyze_improvements(req: ImprovementRequest):
    """
    Run only the improvement advisor.
    Optionally pass bugReport and architectureReport for richer suggestions.
    """
    try:
        ctx = {
            **req.codeContext.model_dump(),
            "bugReport":          req.bugReport,
            "architectureReport": req.architectureReport,
        }
        return _wrap(await advise_improvements(ctx))
    except Exception as exc:
        raise _handle(exc, "analyze/improvements") from exc


@app.post("/classify/domain", tags=["agents"])
async def classify(req: SingleAnalysisRequest):
    """Classify the project domain (Frontend / Backend / Full Stack / etc.)."""
    try:
        return _wrap(await classify_domain(req.codeContext.model_dump()))
    except Exception as exc:
        raise _handle(exc, "classify/domain") from exc


# ── Phase 2 endpoints ─────────────────────────────────────────────────────────

@app.post("/phase2/questions", tags=["phase2"])
async def phase2_questions(req: QuestionGenRequest):
    """Generate Phase 2 interview questions from Stage 1 results."""
    try:
        result = await generate_questions({
            "codeContext":        req.codeContext.model_dump(),
            "bugReport":          req.bugReport,
            "architectureReport": req.architectureReport,
            "fastScores":         req.fastScores,
        })
        return _wrap(result)
    except Exception as exc:
        raise _handle(exc, "phase2/questions") from exc


@app.post("/phase2/answers", tags=["phase2"])
async def phase2_answers(req: AnswerEvalRequest):
    """Score developer answers for Phase 2."""
    try:
        result = await evaluate_answers({
            "projectSummary":      req.projectSummary,
            "detectedLevel":       req.detectedLevel,
            "questionsAndAnswers": [qa.model_dump() for qa in req.questionsAndAnswers],
        })
        return _wrap(result)
    except Exception as exc:
        raise _handle(exc, "phase2/answers") from exc


# ── Entrypoint ────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8001))
    uvicorn.run("server:app", host="0.0.0.0", port=port, reload=False)