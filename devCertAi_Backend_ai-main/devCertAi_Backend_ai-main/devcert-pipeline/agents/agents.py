"""
AGENTS

Each agent = one async function.
Reads prompt from user_prompts.py → calls ask() from ai_caller.py.
"""

import logging
from typing import Any

from config.ai_caller import ask
from prompts.user_prompts import PROMPTS

logger = logging.getLogger(__name__)

_VALID_SEVERITIES  = {"critical", "high", "medium", "low"}
_VALID_RISK_LEVELS = {"low", "medium", "high", "clone"}


# ── Normalizers ───────────────────────────────────────────────────────────────

def _clamp(value: Any, lo: int = 0, hi: int = 100) -> int:
    try:
        return max(lo, min(hi, int(float(value))))
    except (TypeError, ValueError):
        return 50


def _normalize_dimensions(dims: Any) -> dict:
    """Handle dimensions returned as list or dict."""
    if isinstance(dims, dict):
        result = {}
        for key, val in dims.items():
            if isinstance(val, dict):
                result[key] = val
            else:
                result[key] = {"score": _clamp(val), "finding": "", "recommendation": ""}
        return result
    if isinstance(dims, list):
        result = {}
        for item in dims:
            if isinstance(item, dict):
                key = (
                    item.get("name")
                    or item.get("dimension")
                    or item.get("key")
                    or f"dim_{len(result)}"
                )
                result[key] = {
                    "score":          item.get("score", 50),
                    "finding":        item.get("finding") or item.get("description") or "",
                    "recommendation": item.get("recommendation") or "",
                }
            else:
                result[f"dim_{len(result)}"] = {"score": 50, "finding": "", "recommendation": ""}
        return result
    return {}


def _normalize_scores(scores: Any) -> dict:
    """Handle scores returned as dict of dicts, dict of scalars, or list."""
    if isinstance(scores, dict):
        result = {}
        for key, val in scores.items():
            if isinstance(val, dict):
                result[key] = {"score": _clamp(val.get("score", 50)), "rationale": val.get("rationale", "")}
            else:
                result[key] = {"score": _clamp(val), "rationale": ""}
        return result
    if isinstance(scores, list):
        dims = ["codeQuality", "architecture", "documentation", "security", "performance", "bestPractices"]
        result = {}
        for i, val in enumerate(scores):
            key = dims[i] if i < len(dims) else f"score_{i}"
            if isinstance(val, dict):
                result[key] = {"score": _clamp(val.get("score", 50)), "rationale": val.get("rationale", "")}
            else:
                result[key] = {"score": _clamp(val), "rationale": ""}
        return result
    return {}


# ── BUG DETECTOR ─────────────────────────────────────────────────────────────
async def detect_bugs(code_context: dict) -> dict:
    result = await ask("BUG_DETECTOR", PROMPTS["BUG_DETECTOR"](code_context))

    bugs_raw = result.get("bugs") or []
    if not isinstance(bugs_raw, list):
        bugs_raw = []

    result["bugs"] = [
        {
            "id":              b.get("id") or f"BUG_{i + 1:03d}",
            "severity":        b.get("severity") if b.get("severity") in _VALID_SEVERITIES else "medium",
            "category":        b.get("category") or "LOGIC",
            "file":            b.get("file") or "unknown",
            "line":            int(b["line"]) if b.get("line") else None,
            "functionName":    b.get("functionName"),
            "title":           b.get("title") or "Unnamed issue",
            "badCode":         b.get("badCode") or "",
            "explanation":     b.get("explanation") or "",
            "fixCode":         b.get("fixCode") or "",
            "fixExplanation":  b.get("fixExplanation") or "",
            "recruiterImpact": b.get("recruiterImpact") or "",
        }
        for i, b in enumerate(bugs_raw)
        if isinstance(b, dict)
    ]
    return result


# ── ARCHITECTURE ANALYST ──────────────────────────────────────────────────────
async def analyze_architecture(code_context: dict) -> dict:
    result = await ask("ARCHITECTURE", PROMPTS["ARCHITECTURE"](code_context))

    result["dimensions"]        = _normalize_dimensions(result.get("dimensions") or {})
    result["architectureScore"] = _clamp(result.get("architectureScore", 50))

    for key in result["dimensions"]:
        result["dimensions"][key]["score"] = _clamp(result["dimensions"][key].get("score", 50))

    return result


# ── FAST SCORER ───────────────────────────────────────────────────────────────
async def score_fast(code_context: dict) -> dict:
    result = await ask("FAST_SCORER", PROMPTS["FAST_SCORER"](code_context))
    result["scores"] = _normalize_scores(result.get("scores") or {})
    return result


# ── PLAGIARISM SCANNER ────────────────────────────────────────────────────────
async def scan_plagiarism(code_context: dict) -> dict:
    result = await ask("PLAGIARISM", PROMPTS["PLAGIARISM"](code_context))

    result["similarityPercent"] = _clamp(result.get("similarityPercent", 0))
    if result.get("riskLevel") not in _VALID_RISK_LEVELS:
        result["riskLevel"] = "low"
    if not isinstance(result.get("suspectedCopied"), list):
        result["suspectedCopied"] = []
    return result


# ── BEST PRACTICES CHECKER ────────────────────────────────────────────────────
async def check_best_practices(code_context: dict) -> dict:
    result = await ask("BEST_PRACTICES", PROMPTS["BEST_PRACTICES"](code_context))

    result["score"] = _clamp(result.get("score", 50))

    checks = result.get("checks") or []
    if not isinstance(checks, list):
        checks = []
    result["checks"] = [
        {
            "name":           c.get("name", "Unknown"),
            "status":         c.get("status", "warn") if c.get("status") in {"pass", "fail", "warn"} else "warn",
            "finding":        c.get("finding", ""),
            "recommendation": c.get("recommendation", ""),
            "severity":       c.get("severity", "medium") if c.get("severity") in _VALID_SEVERITIES else "medium",
        }
        for c in checks
        if isinstance(c, dict)
    ]

    valid_readiness = {"not-ready", "partial", "ready"}
    if result.get("productionReadiness") not in valid_readiness:
        result["productionReadiness"] = "partial"

    if not isinstance(result.get("missingProfessionalItems"), list):
        result["missingProfessionalItems"] = []

    return result


# ── IMPROVEMENT ADVISOR ───────────────────────────────────────────────────────
async def advise_improvements(ctx: dict) -> dict:
    """
    ctx must contain: title, domain, techStack, fileTree, fileContents,
                      bugReport (optional), architectureReport (optional)
    """
    result = await ask("IMPROVEMENT_ADVISOR", PROMPTS["IMPROVEMENT_ADVISOR"](ctx))

    improvements = result.get("improvements") or []
    if not isinstance(improvements, list):
        improvements = []

    valid_effort = {"low", "medium", "high"}
    valid_impact = {"low", "medium", "high"}

    result["improvements"] = [
        {
            "id":           imp.get("id") or f"IMP_{i + 1:03d}",
            "category":     imp.get("category") or "REFACTOR",
            "priority":     _clamp(imp.get("priority", 5), 1, 10),
            "file":         imp.get("file") or "unknown",
            "title":        imp.get("title") or "Unnamed improvement",
            "description":  imp.get("description") or "",
            "effort":       imp.get("effort") if imp.get("effort") in valid_effort else "medium",
            "impact":       imp.get("impact") if imp.get("impact") in valid_impact else "medium",
            "before":       imp.get("before") or "",
            "after":        imp.get("after") or "",
            "whyItMatters": imp.get("whyItMatters") or "",
        }
        for i, imp in enumerate(improvements)
        if isinstance(imp, dict)
    ]

    if not isinstance(result.get("quickWins"), list):
        result["quickWins"] = []
    if not isinstance(result.get("longTermGoals"), list):
        result["longTermGoals"] = []

    return result


# ── DOMAIN CLASSIFIER ─────────────────────────────────────────────────────────
_VALID_DOMAINS = {
    "Frontend", "Backend", "Full Stack", "Mobile",
    "Data Science", "DevOps", "Programming Languages",
}

# Cheap, free, deterministic cross-check used only to sanity-check the AI's
# verdict (never as the sole classifier) — mirrors the same signal categories
# the Node side's githubAnalyzer.classifyRepoDomain uses, translated to
# Python, but ALSO covers Programming Languages, which that JS heuristic and
# the old prompt both previously lacked. Agreement between this and the AI
# boosts confidence; disagreement lowers it instead of blindly trusting
# whichever one happened to run — this is the main lever for reducing "wrong
# domain guess" mistakes without needing a second AI call.
_FRONTEND_HINTS = {"react", "vue.js", "vue", "angular", "next.js", "svelte"}
_BACKEND_HINTS = {"express.js", "django", "fastapi", "java/maven", "java/gradle", "go", "prisma", "spring"}
_MOBILE_PATH_HINTS = ("androidmanifest.xml", ".xcodeproj", "pubspec.yaml", "app/src/main")
_DEVOPS_PATH_HINTS = ("dockerfile", "docker-compose", ".github/workflows", "kubernetes", "helm/", "terraform")
_DATASCIENCE_PATH_HINTS = (".ipynb", "requirements.txt", "model.py", "train.py", "dataset")


def _heuristic_domain_guess(code_context: dict) -> dict:
    tech_stack = {str(t).lower() for t in (code_context.get("techStack") or [])}
    paths = [str(p).lower() for p in (code_context.get("fileTree") or [])]

    has_frontend = bool(tech_stack & _FRONTEND_HINTS) or any(p.endswith((".jsx", ".tsx", ".vue")) for p in paths)
    has_backend = bool(tech_stack & _BACKEND_HINTS)
    has_mobile = any(h in p for h in _MOBILE_PATH_HINTS for p in paths)
    has_devops = any(h in p for h in _DEVOPS_PATH_HINTS for p in paths)
    has_datascience = any(h in p for h in _DATASCIENCE_PATH_HINTS for p in paths) and "python" in tech_stack

    if has_mobile:
        return {"domain": "Mobile", "confidence": "high"}
    if has_frontend and has_backend:
        return {"domain": "Full Stack", "confidence": "high"}
    if has_frontend:
        return {"domain": "Frontend", "confidence": "high"}
    if has_backend:
        return {"domain": "Backend", "confidence": "high"}
    if has_datascience:
        return {"domain": "Data Science", "confidence": "medium"}
    if has_devops:
        return {"domain": "DevOps", "confidence": "medium"}
    if tech_stack:
        return {"domain": "Programming Languages", "confidence": "low"}
    return {"domain": None, "confidence": "none"}


async def classify_domain(code_context: dict) -> dict:
    result = await ask("DOMAIN_CLASSIFIER", PROMPTS["DOMAIN_CLASSIFIER"](code_context))

    # FIX: an invalid/missing domain from the AI used to silently default to
    # "Full Stack" no matter what the project actually was — the single
    # biggest source of a confidently-wrong guess, since Full Stack is picked
    # even for e.g. a plain CLI tool. Fall back to the cheap heuristic guess
    # instead, and only fall further back to "Full Stack" if even that
    # heuristic found nothing to go on.
    if result.get("domain") not in _VALID_DOMAINS:
        guess = _heuristic_domain_guess(code_context)
        result["domain"] = guess["domain"] or "Full Stack"
        result["confidence"] = 30 if guess["domain"] else 20
        result["reasoning"] = (result.get("reasoning") or "") + \
            " [AI returned an invalid/missing domain; fell back to a heuristic guess from tech stack/file tree — treat this classification with low confidence.]"
        return result

    result["confidence"] = _clamp(result.get("confidence", 50))

    # Cross-check the AI's verdict against the heuristic. Agreement is a
    # strong signal (two independent methods landed on the same answer) —
    # boost confidence. Disagreement means at least one of them is probably
    # wrong — pull confidence down rather than trusting the AI blindly, so
    # pipeline.py's domain-patch gate (confidence >= 70) doesn't overwrite a
    # candidate's declared domain on a shaky guess.
    guess = _heuristic_domain_guess(code_context)
    if guess["domain"] and guess["confidence"] in ("high", "medium"):
        if guess["domain"] == result["domain"]:
            result["confidence"] = max(result["confidence"], 85 if guess["confidence"] == "high" else 75)
        else:
            result["confidence"] = min(result["confidence"], 55)
            result["reasoning"] = (result.get("reasoning") or "") + \
                f" [Note: a tech-stack/file-tree heuristic suggested '{guess['domain']}' instead — confidence lowered due to disagreement.]"

    return result


# ── QUESTION GENERATOR ────────────────────────────────────────────────────────
async def generate_questions(ctx: dict) -> dict:
    code_context        = ctx["codeContext"]
    fast_scores         = ctx.get("fastScores") or {}
    bug_report          = ctx.get("bugReport") or {}
    architecture_report = ctx.get("architectureReport") or {}

    prompt_ctx = {
        "title":        code_context["title"],
        "domain":       code_context["domain"],
        "detectedLevel": fast_scores.get("level", "Intermediate"),
        "bugSummary":   bug_report.get("summary") or {},
        "architectureFindings": {
            "score":    architecture_report.get("architectureScore"),
            "strength": architecture_report.get("biggestStrength"),
            "weakness": architecture_report.get("biggestWeakness"),
        },
        "fileContents": code_context.get("fileContents", ""),
    }

    result = await ask("QUESTION_GEN", PROMPTS["QUESTION_GEN"](prompt_ctx))
    if not isinstance(result.get("questions"), list):
        result["questions"] = []
    result["questions"] = result["questions"][:6]
    return result


# ── key aliases the AI sometimes uses instead of the canonical camelCase names ─
_CAT_KEY_ALIASES = {
    "code_quality":    "codeQuality",
    "codequality":     "codeQuality",
    "code quality":    "codeQuality",
    "best_practices":  "bestPractices",
    "bestpractices":   "bestPractices",
    "best practices":  "bestPractices",
    "architecture":    "architecture",
    "documentation":   "documentation",
    "security":        "security",
    "performance":     "performance",
}

_EXPECTED_CAT_KEYS = {"codeQuality", "architecture", "documentation", "security", "performance", "bestPractices"}


def _normalize_category_scores(cats: any) -> dict:
    """
    Normalise categoryScores regardless of how the AI spells the keys.
    Handles: flat ints, nested {score: int}, wrong casing, snake_case, spaces.
    Always returns all 6 expected keys as plain ints (0-100).
    """
    if not isinstance(cats, dict):
        return {k: 50 for k in _EXPECTED_CAT_KEYS}

    normalised = {}
    for raw_key, val in cats.items():
        # resolve the canonical key name
        canonical = raw_key  # default: keep as-is
        lower = raw_key.lower().replace("-", "_").replace(" ", "_")
        if raw_key not in _EXPECTED_CAT_KEYS:
            canonical = _CAT_KEY_ALIASES.get(lower) or _CAT_KEY_ALIASES.get(raw_key.lower()) or raw_key

        # extract the numeric value (may be nested {"score": N} or plain int)
        if isinstance(val, dict):
            score = _clamp(val.get("score", 50))
        else:
            score = _clamp(val)

        normalised[canonical] = score

    # fill any missing keys with 50 so the frontend never sees undefined
    for key in _EXPECTED_CAT_KEYS:
        if key not in normalised:
            normalised[key] = 50

    return normalised


# ── REPORT SYNTHESIZER ────────────────────────────────────────────────────────
async def synthesize_report(ctx: dict) -> dict:
    result = await ask("REPORT_SYNTHESIZER", PROMPTS["REPORT_SYNTHESIZER"](ctx))

    result["overallScore"]   = _clamp(result.get("overallScore", 50))
    result["projectedScore"] = _clamp(result.get("projectedScore", 50))

    if not isinstance(result.get("nextSteps"), list):
        result["nextSteps"] = []
    if not isinstance(result.get("suggestedChanges"), list):
        result["suggestedChanges"] = []
    if not isinstance(result.get("summaryBullets"), list):
        result["summaryBullets"] = []

    # FIX: ensure categoryScores always exists with all 6 keys, clamp + write back
    cats = result.get("categoryScores")
    if not isinstance(cats, dict):
        cats = {}
    for key in ("codeQuality", "architecture", "documentation", "security", "performance", "bestPractices"):
        cats[key] = _clamp(cats.get(key, 50))
    result["categoryScores"] = cats

    # FIX: ensure these string/enum fields always exist so frontend doesn't break
    result.setdefault("level", "Intermediate")
    result.setdefault("summary", "")
    result.setdefault("headline", "")
    result.setdefault("topStrength", "")
    result.setdefault("topWeakness", "")
    result.setdefault("plagiarismRisk", "low")
    result.setdefault("estimatedExperience", "1-2 years")
    result.setdefault("domain", ctx["project"].get("domain", "Full Stack"))

    valid_readiness = {"not-ready", "partial", "ready"}
    if result.get("productionReadiness") not in valid_readiness:
        result["productionReadiness"] = "partial"

    result["projectId"]   = ctx["project"]["id"]
    result["evaluatedAt"] = __import__("datetime").datetime.utcnow().isoformat()
    return result
# ── ANSWER EVALUATOR ──────────────────────────────────────────────────────────
async def evaluate_answers(ctx: dict) -> dict:
    result = await ask("ANSWER_EVALUATOR", PROMPTS["ANSWER_EVALUATOR"](ctx))

    result["scores"] = [
        max(0, min(10, int(float(s))))
        for s in (result.get("scores") or [])
        if str(s).replace(".", "").lstrip("-").isdigit()
    ]
    result["feedback"]   = result.get("feedback") or []
    result["totalScore"] = _clamp(result.get("totalScore", 0))
    return result