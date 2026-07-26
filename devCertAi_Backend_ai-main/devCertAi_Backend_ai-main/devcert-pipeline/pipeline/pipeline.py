"""
EVALUATION PIPELINE

Stage 1 → parallel  (independent agents: bugs, architecture, plagiarism, scores, domain, best practices)
Stage 2 → parallel  (needs Stage 1: improvements advisor, question generator)
Stage 3 → synthesis (needs everything)
"""

import asyncio
import logging

from agents.agents import (
    classify_domain,
    detect_bugs,
    analyze_architecture,
    score_fast,
    scan_plagiarism,
    check_best_practices,
    advise_improvements,
    generate_questions,
    synthesize_report,
)

logger = logging.getLogger(__name__)


async def run_evaluation(project: dict, code_context: dict) -> dict:
    """
    Full evaluation pipeline.

    Args:
        project:      { id, title, domain, description }
        code_context: { title, domain, description, fileTree, fileContents, techStack }

    Returns:
        {
            report, bugReport, architectureReport, plagiarismReport,
            fastScores, bestPracticesReport, improvementsReport,
            domainReport, questions
        }
    """
    logger.info("[Pipeline] Starting for project: %s", project["id"])

    # ── STAGE 1: all independent agents in parallel ───────────────────────────
    (
        bug_report,
        architecture_report,
        plagiarism_report,
        fast_scores,
        best_practices_report,
        domain_report,
    ) = await asyncio.gather(
        detect_bugs(code_context),
        analyze_architecture(code_context),
        scan_plagiarism(code_context),
        score_fast(code_context),
        check_best_practices(code_context),
        classify_domain(code_context),
    )

    logger.info(
        "[Pipeline] Stage 1 done — %d bugs | arch=%s | domain=%s",
        len(bug_report.get("bugs", [])),
        architecture_report.get("architectureScore"),
        domain_report.get("domain"),
    )

    # Patch domain into context if classifier is more confident than the
    # supplied value. classify_domain (agents.py) now cross-checks the AI
    # verdict against a cheap tech-stack/file-tree heuristic: confidence only
    # reaches this 70+ bar when either (a) the AI and heuristic agree, or
    # (b) the AI was independently very confident — so this patch is safer
    # against a single bad guess overwriting the candidate's declared domain
    # than it used to be.
    if domain_report.get("confidence", 0) >= 70:
        code_context = {**code_context, "domain": domain_report["domain"]}
        project      = {**project,      "domain": domain_report["domain"]}

    # ── STAGE 2: agents that need Stage 1 results ────────────────────────────
    improvements_ctx = {
        **code_context,
        "bugReport":          bug_report,
        "architectureReport": architecture_report,
    }

    improvements_report, questions = await asyncio.gather(
        advise_improvements(improvements_ctx),
        generate_questions({
            "codeContext":        code_context,
            "bugReport":          bug_report,
            "architectureReport": architecture_report,
            "fastScores":         fast_scores,
        }),
    )

    logger.info(
        "[Pipeline] Stage 2 done — %d improvements | %d questions",
        len(improvements_report.get("improvements", [])),
        len(questions.get("questions", [])),
    )

    # ── STAGE 3: final synthesis ──────────────────────────────────────────────
    report = await synthesize_report({
        "project":             project,
        "bugReport":           bug_report,
        "architectureReport":  architecture_report,
        "plagiarismReport":    plagiarism_report,
        "fastScores":          fast_scores,
        "bestPracticesReport": best_practices_report,
        "improvementsReport":  improvements_report,
    })

    logger.info("[Pipeline] Complete. Score: %s / Level: %s", report.get("overallScore"), report.get("level"))

    return {
        "report":              report,
        "bugReport":           bug_report,
        "architectureReport":  architecture_report,
        "plagiarismReport":    plagiarism_report,
        "fastScores":          fast_scores,
        "bestPracticesReport": best_practices_report,
        "improvementsReport":  improvements_report,
        "domainReport":        domain_report,
        "questions":           questions,
    }