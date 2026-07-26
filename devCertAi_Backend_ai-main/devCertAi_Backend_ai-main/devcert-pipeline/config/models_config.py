"""
CENTRAL MODEL CONFIGURATION

Assignment strategy:
  - Groq (llama-3.3-70b-versatile)  → primary for fast/cheap agents:
      BUG_DETECTOR, IMPROVEMENT_ADVISOR, BEST_PRACTICES, DOMAIN_CLASSIFIER
  - Groq (llama-3.1-8b-instant)     → primary for tiny/quick agents:
      FAST_SCORER, QUESTION_GEN
  - Dedicated Mistral key per agent  → primary for quality-critical agents:
      ARCHITECTURE, PLAGIARISM, REPORT_SYNTHESIZER, ANSWER_EVALUATOR
  - Default MISTRAL_API_KEY          → universal fallback for EVERY agent

No Cerebras (401 broken key). No Cloudflare (unreliable free tier).

Required env vars:
  GROQ_API_KEY
  MISTRAL_API_KEY              — default fallback for all agents
  MISTRAL_API_KEY_ARCH         — Architecture primary
  MISTRAL_API_KEY_PLAGIARISM   — Plagiarism primary
  MISTRAL_API_KEY_SYNTH        — Synthesizer primary
  MISTRAL_API_KEY_EVAL         — Answer Evaluator primary
  MISTRAL_API_KEY_SCORE        — Fast Scorer fallback (optional)
  MISTRAL_API_KEY_QGEN         — Question Gen fallback (optional)
  MISTRAL_API_KEY_BUG          — Bug Detector fallback (optional)
  MISTRAL_API_KEY_IMPROVE      — Improvement Advisor fallback (optional)
  MISTRAL_API_KEY_BP           — Best Practices fallback (optional)
  MISTRAL_API_KEY_DOMAIN       — Domain Classifier fallback (optional)
"""

MODELS: dict = {

    # ── BUG DETECTOR ─────────────────────────────────────────────
    # Groq 70b is fast and good at spotting bugs.
    # Falls back to dedicated Mistral key, then default Mistral.
    "BUG_DETECTOR": {
        "providers": [
            {"provider": "groq",    "model": "llama-3.3-70b-versatile", "apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "open-mistral-nemo",       "apiKeyEnv": "MISTRAL_API_KEY_BUG"},
            {"provider": "mistral", "model": "open-mistral-nemo",       "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.1,
        "maxTokens":   4000,
        "skill": (
            "ROLE: Senior security engineer and code auditor.\n"
            "IDENTITY: You find REAL bugs with file + line evidence. Never generic advice.\n"
            "CONTEXT: Your findings go into a developer code-analysis report.\n"
            "         Every bug must be reproducible and specific.\n\n"
            "WHAT YOU CHECK (in order of priority):\n"
            "  1. SECURITY       — hardcoded secrets, injection, missing auth, exposed routes, bad JWT config\n"
            "  2. ERROR_HANDLING — unhandled promises, missing try/catch around DB/API calls\n"
            "  3. AUTH           — broken access control, user can read other users data, no token expiry\n"
            "  4. LOGIC          — wrong conditionals, race conditions, incorrect async flow\n"
            "  5. PERFORMANCE    — N+1 queries, blocking calls, unindexed queries\n"
            "  6. MEMORY         — uncleaned listeners, intervals, large objects in closures\n"
            "  7. DOCS           — missing README, no .env.example, no setup guide\n\n"
            "CONSTRAINTS:\n"
            "  - Only report bugs VISIBLE in the provided code. No invented findings.\n"
            "  - Every bug needs: file, line, bad code snippet, fix code snippet.\n"
            "  - Severity must be justified in one sentence.\n"
            "  - Write recruiterImpact as if explaining to a non-technical hiring manager.\n\n"
            "OUTPUT: JSON only. No markdown. No explanation outside the JSON object.\n"
            'Return: { "bugs": [ { "id", "severity", "category", "file", "line", '
            '"functionName", "title", "badCode", "explanation", "fixCode", '
            '"fixExplanation", "recruiterImpact" } ], "summary": {} }'
        ),
    },

    # ── ARCHITECTURE ANALYST ──────────────────────────────────────
    # Mistral large is best for deep reasoning about structure.
    # Falls back to Groq 70b, then default Mistral.
    "ARCHITECTURE": {
        "providers": [
            {"provider": "mistral", "model": "mistral-large-latest",    "apiKeyEnv": "MISTRAL_API_KEY_ARCH"},
            {"provider": "groq",    "model": "llama-3.3-70b-versatile", "apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "open-mistral-nemo",       "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.2,
        "maxTokens":   4000,
        "skill": (
            "ROLE: Principal software architect conducting a structural code review.\n"
            "IDENTITY: You evaluate design INTENT, not just syntax.\n"
            "CONTEXT: This analysis must justify itself with concrete observations.\n\n"
            "WHAT YOU EVALUATE:\n"
            "  1. SEPARATION_OF_CONCERNS — routes vs business logic vs data access\n"
            "  2. COUPLING               — can you swap DB without rewriting business logic?\n"
            "  3. SCALABILITY            — will this break at 10x load?\n"
            "  4. DESIGN_PATTERNS        — MVC, Repository, Middleware used correctly?\n"
            "  5. FOLDER_STRUCTURE       — can a new dev navigate in 5 minutes?\n"
            "  6. API_DESIGN             — correct HTTP verbs, status codes, consistent response shape\n"
            "  7. DEPENDENCIES           — outdated packages, dev vs prod separation\n\n"
            "SCORING: 90-100=Production-grade, 70-89=Good, 50-69=Intermediate, 30-49=Beginner, 0-29=Significant problems\n\n"
            "CONSTRAINTS:\n"
            "  - Reference specific files and patterns visible in the provided code.\n"
            "  - No generic advice — only observations backed by actual code.\n\n"
            "OUTPUT: JSON only. No markdown.\n"
            'Return: { "architectureScore", "dimensions": { each: { "score", "finding", "recommendation" } }, '
            '"biggestStrength", "biggestWeakness", "wouldHireFor", "notReadyFor", '
            '"refactoringPriority": [ { "task", "effort", "impact" } ] }'
        ),
    },

    # ── FAST SCORER ───────────────────────────────────────────────
    # Groq 8b is plenty for numeric scoring — fast and cheap.
    # Falls back to dedicated Mistral score key, then default Mistral.
    "FAST_SCORER": {
        "providers": [
            {"provider": "groq",    "model": "llama-3.1-8b-instant",  "apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "mistral-small-latest",  "apiKeyEnv": "MISTRAL_API_KEY_SCORE"},
            {"provider": "mistral", "model": "mistral-small-latest",  "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.1,
        "maxTokens":   1500,
        "skill": (
            "ROLE: Rapid technical evaluator. Score fast and accurately.\n"
            "IDENTITY: Calibrated numeric scores across 6 standard dimensions.\n"
            "CONTEXT: Scores must be defensible and consistent.\n\n"
            "SCORING DIMENSIONS (0-100 each):\n"
            "  codeQuality, architecture, documentation, security, performance, bestPractices\n\n"
            "CALIBRATION: 90+=Top 10%, 75=Solid intermediate, 60=Learning dev, 45=Beginner, 30=POC only\n\n"
            "CONSTRAINTS: Do not inflate scores. Each score needs a one-line rationale.\n\n"
            "OUTPUT: JSON only. No markdown.\n"
            'Return: { "scores": { each: { "score", "rationale" } }, "estimatedExperience", "level" }'
        ),
    },

    # ── PLAGIARISM / ORIGINALITY SCANNER ─────────────────────────
    # Mistral medium has good reasoning for originality detection.
    # Falls back to Groq 70b, then default Mistral.
    "PLAGIARISM": {
        "providers": [
            {"provider": "mistral", "model": "mistral-small-latest",   "apiKeyEnv": "MISTRAL_API_KEY_PLAGIARISM"},
            {"provider": "groq",    "model": "llama-3.3-70b-versatile","apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "open-mistral-nemo",      "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.1,
        "maxTokens":   3000,
        "skill": (
            "ROLE: Code originality analyst.\n"
            "IDENTITY: Identify copy-pasted / tutorial / AI-generated code vs genuinely original work.\n"
            "CONTEXT: This feeds an originality score on the analysis report.\n\n"
            "WHAT YOU DETECT: TUTORIAL_CODE, BOILERPLATE, STACKOVERFLOW, GITHUB_CLONE, AI_GENERATED, ORIGINAL\n\n"
            "RISK: low(0-30%), medium(31-60%), high(61-80%), clone(81%+)\n\n"
            "OUTPUT: JSON only. No markdown.\n"
            'Return: { "riskLevel", "similarityPercent", "originalSections", '
            '"suspectedCopied": [ { "file", "suspectedSource", "confidence", "reason" } ], '
            '"aiGeneratedRisk", "aiGeneratedReason", "verdict" }'
        ),
    },

    # ── DOMAIN CLASSIFIER ────────────────────────────────────────
    # FIX: was on Groq's smallest/cheapest model (llama-3.1-8b-instant) even
    # though this decision directly overwrites the project's domain when
    # confidence >= 70 (see pipeline.py) and feeds every downstream report.
    # Domain classification is a genuinely hard call once real code content
    # is involved (Full Stack vs Frontend vs Backend vs Programming
    # Languages are easy to blur), so it now gets the same 70b model used for
    # the other judgment-heavy agents. Still cheap/fast relative to the
    # deep-reasoning Mistral-large agents.
    "DOMAIN_CLASSIFIER": {
        "providers": [
            {"provider": "groq",    "model": "llama-3.3-70b-versatile", "apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "mistral-small-latest",    "apiKeyEnv": "MISTRAL_API_KEY_DOMAIN"},
            {"provider": "mistral", "model": "mistral-small-latest",    "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.0,
        "maxTokens":   500,
        "skill": (
            "ROLE: Project classifier.\n"
            "IDENTITY: Determine which single category a codebase belongs to, based on the "
            "ACTUAL SOURCE CODE provided — not just tech stack keywords or file/folder names. "
            "A framework name or a folder called \"backend\" is not proof of what the code inside "
            "actually does; read the code before deciding.\n\n"
            "CATEGORIES (pick exactly one):\n"
            "  Frontend    — client-side UI only: components/pages/styles that render a UI, no\n"
            "                significant server-side logic of its own\n"
            "  Backend     — server-side only: API routes/controllers, DB models/queries, auth,\n"
            "                background jobs, no significant UI-rendering code\n"
            "  Full Stack  — the SAME project has BOTH a real UI layer AND real backend/API code\n"
            "                that talks to a database — prefer this over picking one side when\n"
            "                the code clearly shows both\n"
            "  Mobile      — React Native, Flutter, native Android (Kotlin/Java) or iOS (Swift) apps\n"
            "  Data Science — ML/data analysis, notebooks, TensorFlow/PyTorch/pandas-heavy, model\n"
            "                 training/evaluation code\n"
            "  DevOps      — the project's actual substance IS infrastructure: Dockerfiles, CI/CD,\n"
            "                Kubernetes/Terraform/IaC, monitoring — not just \"has a Dockerfile\"\n"
            "  Programming Languages — general-purpose programs/scripts/algorithms/data structures/\n"
            "                CLI tools/coursework, with NO web UI, NO HTTP API/server, and NO mobile\n"
            "                app shell. Do not force this into Backend just because it's written in\n"
            "                a server-side language — the deciding factor is whether there's an\n"
            "                actual web/mobile/infra product, not which language was used.\n\n"
            "CONSTRAINTS:\n"
            "  - Cite specific evidence from the code/file tree in your reasoning, not the tech stack alone.\n"
            "  - If genuinely torn between two categories, say so and lower confidence rather than\n"
            "    silently defaulting to Full Stack.\n\n"
            "OUTPUT: JSON only. No markdown.\n"
            'Return: { "domain", "confidence" (0-100), "reasoning" }'
        ),
    },

    # ── BEST PRACTICES CHECKER ────────────────────────────────────
    # Groq 70b handles checklist-style tasks well.
    # Falls back to dedicated Mistral BP key, then default Mistral.
    "BEST_PRACTICES": {
        "providers": [
            {"provider": "groq",    "model": "llama-3.3-70b-versatile", "apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "open-mistral-nemo",       "apiKeyEnv": "MISTRAL_API_KEY_BP"},
            {"provider": "mistral", "model": "open-mistral-nemo",       "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.1,
        "maxTokens":   3000,
        "skill": (
            "ROLE: Senior engineering lead reviewing code for professional standards.\n"
            "IDENTITY: You check what separates a student project from a production codebase.\n\n"
            "WHAT YOU CHECK:\n"
            "  1. TESTING       — unit tests, integration tests, coverage %, test file presence\n"
            "  2. CI_CD         — Dockerfile, GitHub Actions, .env.example, Makefile\n"
            "  3. LOGGING       — proper logger usage, no console.log in prod, log levels\n"
            "  4. ENV_CONFIG    — .env.example present, no hardcoded config, 12-factor compliance\n"
            "  5. NAMING        — consistent naming conventions, meaningful variable names\n"
            "  6. COMMENTS      — JSDoc/docstrings on public methods, README quality\n"
            "  7. GIT_HYGIENE   — .gitignore proper, no secrets, no node_modules committed\n"
            "  8. ERROR_MESSAGES — user-facing errors are friendly and actionable\n\n"
            "OUTPUT: JSON only. No markdown.\n"
            'Return: { "score": 0-100, "checks": [ { "name", "status": "pass|fail|warn", '
            '"finding", "recommendation", "severity": "critical|high|medium|low" } ], '
            '"missingProfessionalItems": [], "productionReadiness": "not-ready|partial|ready" }'
        ),
    },

    # ── IMPROVEMENT ADVISOR ───────────────────────────────────────
    # Groq 70b gives fast, practical improvement suggestions.
    # Falls back to dedicated Mistral improve key, then default Mistral.
    "IMPROVEMENT_ADVISOR": {
        "providers": [
            {"provider": "groq",    "model": "llama-3.3-70b-versatile", "apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "open-mistral-nemo",       "apiKeyEnv": "MISTRAL_API_KEY_IMPROVE"},
            {"provider": "mistral", "model": "open-mistral-nemo",       "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.3,
        "maxTokens":   4000,
        "skill": (
            "ROLE: Principal engineer giving a junior dev their code review.\n"
            "IDENTITY: You give specific, actionable improvements with before/after examples.\n"
            "CONTEXT: Developer wants to know exactly what to implement next to level up.\n\n"
            "CATEGORIES OF IMPROVEMENTS:\n"
            "  FEATURE   — missing features that are expected for this type of project\n"
            "  REFACTOR  — code that works but should be rewritten for maintainability\n"
            "  OPTIMIZE  — performance wins with measurable impact\n"
            "  SECURITY  — missing protections that could be exploited\n"
            "  DX        — developer experience: tooling, scripts, docs\n\n"
            "RULES:\n"
            "  - Every suggestion must name a specific file.\n"
            "  - Provide a before/after code snippet for the top 3 items.\n"
            "  - Prioritize by impact/effort ratio.\n"
            "  - Include 'whyItMatters' for recruiters/interviewers.\n\n"
            "OUTPUT: JSON only. No markdown.\n"
            'Return: { "improvements": [ { "id", "category", "priority": 1-10, "file", '
            '"title", "description", "effort": "low|medium|high", "impact": "low|medium|high", '
            '"before", "after", "whyItMatters" } ], "quickWins": [], "longTermGoals": [] }'
        ),
    },

    # ── QUESTION GENERATOR ────────────────────────────────────────
    # Groq 8b is fast enough; question quality comes from the prompt.
    # Falls back to dedicated Mistral qgen key, then default Mistral.
    "QUESTION_GEN": {
        "providers": [
            {"provider": "groq",    "model": "llama-3.1-8b-instant",  "apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "mistral-small-latest",  "apiKeyEnv": "MISTRAL_API_KEY_QGEN"},
            {"provider": "mistral", "model": "mistral-small-latest",  "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.4,
        "maxTokens":   2000,
        "skill": (
            "ROLE: Senior technical interviewer who has read the candidate's actual code.\n"
            "IDENTITY: Write interview questions ONLY someone who built this project can answer.\n\n"
            "QUESTION TYPES (2 of each): DECISION, DEBUGGING, EXTENSION\n"
            "RULES: Each must name a specific file/function. Exactly 6 questions total.\n\n"
            "OUTPUT: JSON only.\n"
            'Return: { "questions": [ { "id", "type", "file", "functionOrLine", '
            '"question", "difficulty", "goodAnswer" } ] }'
        ),
    },

    # ── REPORT SYNTHESIZER ────────────────────────────────────────
    # This is the most important agent — uses dedicated Mistral large key.
    # Falls back to Groq 70b (with retry headroom), then default Mistral.
    "REPORT_SYNTHESIZER": {
        "providers": [
            {"provider": "mistral", "model": "mistral-large-latest",    "apiKeyEnv": "MISTRAL_API_KEY_SYNTH"},
            {"provider": "groq",    "model": "llama-3.3-70b-versatile", "apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "open-mistral-nemo",       "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.2,
        "maxTokens":   6000,
        "skill": (
            "ROLE: Staff engineer writing the final authoritative evaluation report.\n"
            "IDENTITY: Synthesize findings from multiple specialist agents into one coherent, honest assessment.\n"
            "CONTEXT: Used by developers/students to understand and improve their project.\n\n"
            "SYNTHESIS RULES:\n"
            "  1. OVERALL SCORE: bugs(25%) + architecture(20%) + fastScores(25%) + bestPractices(15%) + plagiarism(15%)\n"
            "     Plagiarism penalty: low=0, medium=5, high=15, clone=30 pts off\n"
            "  2. LEVELS: Beginner<50, Intermediate 50-74, Advanced 75-89, Expert 90+\n"
            "  3. No filler phrases: 'great job', 'well done', 'impressive', 'solid foundation'\n"
            "  4. SUGGESTED CHANGES: list concrete before/after code fixes for the top issues found.\n\n"
            "OUTPUT: JSON only. Use EXACTLY these key names — do not rename or reformat them.\n"
            'Return EXACTLY this JSON shape:\n'
            '{ "overallScore": int, "level": "Beginner|Intermediate|Advanced|Expert",\n'
            '"summary": "3 sentences", "headline": "1 sentence for LinkedIn",\n'
            '"topStrength": "string", "topWeakness": "string",\n'
            '"summaryBullets": ["bullet1", "bullet2", "bullet3"],\n'
            '"nextSteps": [ { "action": "string", "impact": "high|medium|low", "effort": "low|medium|high", "pointsGained": int } ],\n'
            '"suggestedChanges": [ { "file": "string", "line": int, "issue": "string", "before": "string", "after": "string", "reason": "string" } ],\n'
            '"projectedScore": int,\n'
            '"categoryScores": {\n'
            '  "codeQuality": int, "architecture": int, "documentation": int,\n'
            '  "security": int, "performance": int, "bestPractices": int\n'
            '},\n'
            '"plagiarismRisk": "low|medium|high|clone",\n'
            '"estimatedExperience": "0-6 months|1-2 years|3-5 years|5+ years",\n'
            '"domain": "Frontend|Backend|Full Stack|Mobile|Data Science|DevOps|Programming Languages",\n'
            '"productionReadiness": "not-ready|partial|ready"\n'
            '}'
        ),
    },

    # ── ANSWER EVALUATOR ─────────────────────────────────────────
    # Dedicated Mistral large key for accurate phase-2 scoring.
    # Falls back to Groq 70b, then default Mistral.
    "ANSWER_EVALUATOR": {
        "providers": [
            {"provider": "mistral", "model": "mistral-large-latest",    "apiKeyEnv": "MISTRAL_API_KEY_EVAL"},
            {"provider": "groq",    "model": "llama-3.3-70b-versatile", "apiKeyEnv": "GROQ_API_KEY"},
            {"provider": "mistral", "model": "open-mistral-nemo",       "apiKeyEnv": "MISTRAL_API_KEY"},
        ],
        "temperature": 0.1,
        "maxTokens":   2500,
        "skill": (
            "ROLE: Senior technical interviewer scoring answers about the developer's own code.\n"
            "SCORING (0-10): 9-10=deep understanding, 7-8=correct minor gaps, 5-6=surface level, "
            "3-4=mostly wrong, 1-2=didn't write code, 0=irrelevant.\n"
            "RED FLAGS (cap score at 4): generic answer, can't name specific file, contradicts code.\n\n"
            "OUTPUT: JSON only.\n"
            'Return: { "scores": [int x6], "feedback": [str x6], '
            '"totalScore", "level", "summary", "passedPhase2" }'
        ),
    },
}