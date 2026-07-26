# DevCert — Python Evaluation Pipeline

Python FastAPI server that runs all AI agents.
Your existing JS backend calls it over HTTP — zero JS agent code needed.

## File Structure

```
devcert-pipeline/
├── server.py                    ← FastAPI app (start this)
├── pythonPipelineClient.js      ← Drop into your JS project
├── requirements.txt
├── .env.example
├── config/
│   ├── models_config.py         ← Swap models here only
│   └── ai_caller.py             ← Universal AI caller (all providers)
├── prompts/
│   └── user_prompts.py          ← What each agent analyzes
├── agents/
│   └── agents.py                ← One function per agent
└── pipeline/
    └── pipeline.py              ← 3-stage orchestration
```

## Setup

```bash
# 1. Install Python deps
pip install -r requirements.txt

# 2. Copy env and fill in your API keys
cp .env.example .env

# 3. Start the server
python server.py
# → listening on http://localhost:8001
```

## JS Integration

Copy `pythonPipelineClient.js` into your JS project, then replace your
`evaluationEngine.js` import:

```js
// BEFORE
const { evaluateProject } = require('./evaluationEngine')

// AFTER
const { evaluateProject } = require('./pythonPipelineClient')
```

Add to your JS `.env`:
```
PYTHON_PIPELINE_URL=http://localhost:8001
```

The JS side (githubAnalyzer, zipAnalyzer) still does code extraction.
Attach results to the project object before calling `evaluateProject`:

```js
const { analyzeGithubRepo } = require('./githubAnalyzer')

const analyzed = await analyzeGithubRepo(project.githubUrl)
project._fileTree     = analyzed.fileTree
project._fileContents = analyzed.fileContents
project._techStack    = analyzed.techStack

const result = await evaluateProject(project)
// result.report       ← final synthesized report
// result.bugReport    ← raw bug findings
// result.fastScores   ← per-dimension scores
// result.questions    ← Phase 2 questions
```

## Swapping AI Models

Edit `config/models_config.py` only — change `provider` and `model` in any agent block.
Zero other files change.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Liveness check |
| POST | `/evaluate` | Full 3-stage evaluation |
| POST | `/phase2/questions` | Generate interview questions |
| POST | `/phase2/answers` | Score developer answers |
