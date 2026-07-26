"""
USER PROMPTS

Pure template functions — no AI logic here.
Each function returns a filled string that goes to the corresponding agent.
"""

import json
from datetime import datetime, timezone
from typing import Any


def bug_detector(ctx: dict) -> str:
    return f"""
Project name:  {ctx['title']}
Domain:        {ctx['domain']}
Tech stack:    {', '.join(ctx.get('techStack', []))}
Total files:   {len(ctx.get('fileTree', []))}

FILE TREE:
{json.dumps(ctx.get('fileTree', []), indent=2)}

SOURCE CODE:
{ctx.get('fileContents', '')}

Find every real bug visible in the source code above.
Return the JSON structure defined in your skill.
"""


def architecture(ctx: dict) -> str:
    return f"""
Project name:  {ctx['title']}
Domain:        {ctx['domain']}
Description:   {ctx.get('description') or 'Not provided'}
Tech stack:    {', '.join(ctx.get('techStack', []))}

FILE TREE:
{json.dumps(ctx.get('fileTree', []), indent=2)}

KEY SOURCE FILES:
{ctx.get('fileContents', '')}

Evaluate the architecture and design quality.
Reference specific files and patterns visible above.
Return the JSON structure defined in your skill.
"""


def fast_scorer(ctx: dict) -> str:
    return f"""
Project name:  {ctx['title']}
Domain:        {ctx['domain']}
Tech stack:    {', '.join(ctx.get('techStack', []))}

FILE TREE:
{json.dumps(ctx.get('fileTree', []), indent=2)}

SOURCE CODE SAMPLE:
{ctx.get('fileContents', '')[:8000]}

Score this project across all 6 dimensions.
Return this exact JSON — no other keys:
{{
  "scores": {{
    "codeQuality":   {{ "score": 0, "rationale": "one line why" }},
    "architecture":  {{ "score": 0, "rationale": "one line why" }},
    "documentation": {{ "score": 0, "rationale": "one line why" }},
    "security":      {{ "score": 0, "rationale": "one line why" }},
    "performance":   {{ "score": 0, "rationale": "one line why" }},
    "bestPractices": {{ "score": 0, "rationale": "one line why" }}
  }},
  "estimatedExperience": "0-6 months | 1-2 years | 3-5 years | 5+ years",
  "level": "Beginner | Intermediate | Advanced | Expert"
}}
"""


def plagiarism(ctx: dict) -> str:
    return f"""
Project name: {ctx['title']}
Domain:       {ctx['domain']}
Tech stack:   {', '.join(ctx.get('techStack', []))}

FULL SOURCE CODE FOR ORIGINALITY ANALYSIS:
{ctx.get('fileContents', '')}

Analyze originality and plagiarism risk.
Return this exact JSON:
{{
  "riskLevel": "low | medium | high | clone",
  "similarityPercent": 0,
  "originalSections": ["list of file/function names that appear genuinely original"],
  "suspectedCopied": [
    {{
      "file": "filename",
      "suspectedSource": "e.g. MERN stack tutorial",
      "confidence": "low | medium | high",
      "reason": "why you suspect this"
    }}
  ],
  "aiGeneratedRisk": "low | medium | high",
  "aiGeneratedReason": "specific patterns that suggest AI generation",
  "verdict": "2 sentence honest summary of originality for the certificate"
}}
"""


def best_practices(ctx: dict) -> str:
    return f"""
Project name: {ctx['title']}
Domain:       {ctx['domain']}
Tech stack:   {', '.join(ctx.get('techStack', []))}

FILE TREE:
{json.dumps(ctx.get('fileTree', []), indent=2)}

SOURCE CODE:
{ctx.get('fileContents', '')[:10000]}

Check this project for professional best practices.
Return the JSON structure defined in your skill.
"""


def improvement_advisor(ctx: dict) -> str:
    bug_count = len((ctx.get('bugReport') or {}).get('bugs', []))
    arch_score = (ctx.get('architectureReport') or {}).get('architectureScore', 50)
    return f"""
Project name:      {ctx['title']}
Domain:            {ctx['domain']}
Tech stack:        {', '.join(ctx.get('techStack', []))}
Bugs found:        {bug_count}
Architecture score: {arch_score}

FILE TREE:
{json.dumps(ctx.get('fileTree', []), indent=2)}

KEY SOURCE CODE:
{ctx.get('fileContents', '')[:8000]}

BUG SUMMARY:
{json.dumps((ctx.get('bugReport') or {}).get('summary', {}), indent=2)}

ARCHITECTURE FINDINGS:
Architecture Score: {arch_score}
Biggest Weakness: {(ctx.get('architectureReport') or {}).get('biggestWeakness', 'N/A')}

Provide specific, actionable improvements for this project.
Prioritize by impact/effort ratio.
Return the JSON structure defined in your skill.
"""


def domain_classifier(ctx: dict) -> str:
    # BUG FIX: this prompt previously only showed the title, tech stack, and
    # file tree — never the actual SOURCE CODE, even though code_context
    # already carries fileContents (every other agent in this pipeline uses
    # it). Judging a domain purely from package names and folder paths is
    # exactly how a Next.js app with real API routes gets misclassified as
    # pure "Frontend", or a Django project with a thin template layer gets
    # misclassified as pure "Backend" — the signal that actually disambiguates
    # those cases only lives in the code itself.
    #
    # Also previously missing "Programming Languages" as a valid category
    # (examCategories.js on the Node side defines SEVEN domains, but this
    # classifier only ever offered six) — a plain CLI tool, algorithm
    # exercise, or language-coursework submission had nowhere correct to land
    # and got force-fit into Backend/Full Stack instead, which is the other
    # major source of "it guesses the wrong domain" reports.
    code_sample = ctx.get('fileContents', '')[:6000]
    return f"""
Project: {ctx['title']}
Tech stack: {', '.join(ctx.get('techStack', []))}
File tree: {json.dumps(ctx.get('fileTree', []), indent=2)}

ACTUAL SOURCE CODE (judge from this — not just file names or package names):
{code_sample if code_sample.strip() else '(no readable source code was provided — classify from tech stack and file tree only, and lower your confidence accordingly)'}

Classify this project into exactly ONE category. Read the code above before deciding —
a framework name or folder name alone is not proof of what the code actually does.

  Frontend              - client-side UI only: components/pages/styles that render a UI.
                           No meaningful server-side logic of its own (calling a THIRD-PARTY
                           API from the browser still counts as Frontend).
  Backend               - server-side only: API routes/controllers, DB models/queries, auth,
                           background jobs. No significant UI-rendering code.
  Full Stack            - the SAME project has BOTH a real UI layer AND real backend/API code
                           that talks to a database (e.g. Next.js/Nuxt with API routes AND
                           pages/components, or a client/ + server/ pair in one repo).
  Mobile                - React Native, Flutter, native Android (Kotlin/Java) or iOS (Swift) apps.
  Data Science           - ML/data analysis: pandas/numpy/scikit-learn/TensorFlow/PyTorch, model
                           training/evaluation, notebooks, data pipelines.
  DevOps                 - the project's actual substance IS infrastructure: Dockerfiles,
                           Kubernetes/Helm, Terraform, CI/CD pipeline definitions, monitoring
                           configs — not just "has a Dockerfile" bolted onto an ordinary app.
  Programming Languages  - general-purpose programs/scripts/algorithms/data structures/CLI
                           tools/coursework in a language, with NO web UI, NO HTTP API/server,
                           and NO mobile app shell. Don't force this into Backend just because
                           it's written in a "backend" language (Java/Go/Python) — the deciding
                           factor is whether there's an actual web/mobile/infra product here,
                           not which language was used.

If the code shows clear signs of TWO categories at once (e.g. both a UI and an API), prefer
Full Stack over picking just one side. If you are genuinely unsure between two categories,
say so honestly in "reasoning" and lower "confidence" — do not silently default to Full Stack.

Return JSON:
{{
  "domain": "Frontend|Backend|Full Stack|Mobile|Data Science|DevOps|Programming Languages",
  "confidence": 0,
  "reasoning": "one sentence citing specific evidence from the code/file tree above"
}}
"""


def question_gen(ctx: dict) -> str:
    return f"""
Project name:     {ctx['title']}
Domain:           {ctx['domain']}
Developer level:  {ctx.get('detectedLevel', 'Intermediate')}

BUG REPORT SUMMARY:
{json.dumps(ctx.get('bugSummary', {}), indent=2)}

ARCHITECTURE FINDINGS:
{json.dumps(ctx.get('architectureFindings', {}), indent=2)}

KEY SOURCE CODE:
{ctx.get('fileContents', '')[:6000]}

Generate exactly 6 interview questions about THIS specific codebase.
Return this exact JSON:
{{
  "questions": [
    {{
      "id": "Q1",
      "type": "DECISION | DEBUGGING | EXTENSION",
      "file": "specific file this question references",
      "functionOrLine": "specific function or line number",
      "question": "The actual question text — must name the file/function",
      "difficulty": "easy | medium | hard",
      "goodAnswer": "What a developer who wrote this code should say (2-3 sentences)"
    }}
  ]
}}
"""


def report_synthesizer(ctx: dict) -> str:
    now = datetime.now(timezone.utc).isoformat()
    return f"""
Project:     {ctx['project']['title']}
Domain:      {ctx['project'].get('domain', '')}
Evaluated:   {now}

══ BUG DETECTOR RESULTS ══
{json.dumps(ctx['bugReport'], indent=2)}

══ ARCHITECTURE RESULTS ══
{json.dumps(ctx['architectureReport'], indent=2)}

══ FAST SCORES ══
{json.dumps(ctx['fastScores'], indent=2)}

══ PLAGIARISM RESULTS ══
{json.dumps(ctx['plagiarismReport'], indent=2)}

══ BEST PRACTICES ══
{json.dumps(ctx.get('bestPracticesReport', {}), indent=2)}

══ IMPROVEMENTS ══
{json.dumps(ctx.get('improvementsReport', {}), indent=2)}

Synthesize all agent findings into the final certificate report.
Return this exact JSON:
{{
  "overallScore": 0,
  "level": "Beginner | Intermediate | Advanced | Expert",
  "summary": "3 sentences max. Honest. Specific. No filler.",
  "headline": "One sentence for LinkedIn — factual not hype",
  "topStrength": "Most impressive specific thing about this codebase",
  "topWeakness": "Single most important thing to fix",
  "summaryBullets": ["bullet 1", "bullet 2", "bullet 3"],
  "nextSteps": [
    {{ "action": "What to do", "impact": "high|medium|low", "effort": "low|medium|high", "pointsGained": 0 }}
  ],
  "suggestedChanges": [
    {{ "file": "string", "line": 0, "issue": "what's wrong", "before": "code snippet", "after": "fixed code snippet", "reason": "why this matters" }}
  ],
  "projectedScore": 0,
  "categoryScores": {{
    "codeQuality": 0, "architecture": 0, "documentation": 0,
    "security": 0, "performance": 0, "bestPractices": 0
  }},
  "plagiarismRisk": "low | medium | high | clone",
  "estimatedExperience": "0-6 months | 1-2 years | 3-5 years | 5+ years",
  "domain": "Frontend | Backend | Full Stack | Mobile | Data Science | DevOps",
  "productionReadiness": "not-ready | partial | ready"
}}
"""


def answer_evaluator(ctx: dict) -> str:
    qa_text = "\n---\n".join(
        f"Q{i + 1} [{qa.get('type', '')}] — File: {qa.get('file', '')}\n"
        f"Question:   {qa.get('question', '')}\n"
        f"GoodAnswer: {qa.get('goodAnswer', '')}\n"
        f"Developer:  {qa.get('answer') or 'No answer provided'}"
        for i, qa in enumerate(ctx.get("questionsAndAnswers", []))
    )
    return f"""
Project context: {ctx.get('projectSummary', '')}
Developer level: {ctx.get('detectedLevel', 'Intermediate')}

QUESTIONS AND ANSWERS:
{qa_text}

Score each answer and return this exact JSON:
{{
  "scores": [0, 0, 0, 0, 0, 0],
  "feedback": ["specific feedback per answer"],
  "totalScore": 0,
  "level": "Beginner | Intermediate | Advanced | Expert",
  "summary": "2 sentences — does this developer understand what they built?",
  "passedPhase2": true
}}
"""


# Module-level dispatch map
PROMPTS = {
    "BUG_DETECTOR":       bug_detector,
    "ARCHITECTURE":       architecture,
    "FAST_SCORER":        fast_scorer,
    "PLAGIARISM":         plagiarism,
    "BEST_PRACTICES":     best_practices,
    "IMPROVEMENT_ADVISOR": improvement_advisor,
    "DOMAIN_CLASSIFIER":  domain_classifier,
    "QUESTION_GEN":       question_gen,
    "REPORT_SYNTHESIZER": report_synthesizer,
    "ANSWER_EVALUATOR":   answer_evaluator,
}