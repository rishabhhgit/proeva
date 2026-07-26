/**
 * PYTHON PIPELINE CLIENT  (drop-in replacement for evaluationEngine.js)
 *
 * Calls the Python FastAPI server which owns all AI provider logic.
 *
 * Usage:
 *   const client = require('./pythonPipelineClient')
 *   const result = await client.evaluateProject(project)
 */

const axios = require('axios')

const PYTHON_PIPELINE_URL = process.env.PYTHON_PIPELINE_URL || 'http://localhost:8001'

const http = axios.create({
  baseURL: PYTHON_PIPELINE_URL,
  timeout: 300_000, // 5 min — full pipeline can be slow
  headers: { 'Content-Type': 'application/json' },
})

// ── helpers ───────────────────────────────────────────────────────────────────

function buildCodeContext(project) {
  return {
    title:        project.title        || 'Untitled',
    domain:       project.domain       || 'Full Stack',
    description:  project.description  || '',
    fileTree:     project._fileTree     || [],
    fileContents: project._fileContents || '',
    techStack:    project._techStack    || [],
  }
}

async function post(path, body) {
  try {
    const { data } = await http.post(path, body)
    if (!data.success) throw new Error(`Pipeline error: ${JSON.stringify(data)}`)
    return data.data
  } catch (err) {
    const detail = err.response?.data?.detail || err.message
    throw new Error(`[PythonPipeline] ${path} failed: ${detail}`)
  }
}

async function get(path) {
  try {
    const { data } = await http.get(path)
    return data
  } catch (err) {
    const detail = err.response?.data?.detail || err.message
    throw new Error(`[PythonPipeline] GET ${path} failed: ${detail}`)
  }
}

// ── Full pipeline ─────────────────────────────────────────────────────────────

/**
 * Run the full 3-stage evaluation.
 * project must have _fileTree, _fileContents, _techStack attached.
 *
 * Returns: {
 *   report, bugReport, architectureReport, plagiarismReport,
 *   fastScores, bestPracticesReport, improvementsReport,
 *   domainReport, questions
 * }
 */
async function evaluateProject(project) {
  console.log('[PythonPipeline] evaluateProject ->', project.id)
  return post('/evaluate', {
    project: {
      id:          project.id,
      title:       project.title,
      domain:      project.domain       || 'Full Stack',
      description: project.description  || '',
    },
    codeContext: buildCodeContext(project),
  })
}

/**
 * Quick evaluation: fast scores + domain only.
 * Good for showing a preview before committing to the full run.
 *
 * Returns: { fastScores, domainReport }
 */
async function quickEvaluate(project) {
  console.log('[PythonPipeline] quickEvaluate ->', project.id)
  return post('/evaluate/quick', { codeContext: buildCodeContext(project) })
}

// ── Single-agent calls ────────────────────────────────────────────────────────

/** Run only the bug detector. */
async function detectBugs(project) {
  return post('/analyze/bugs', { codeContext: buildCodeContext(project) })
}

/** Run only the architecture analyst. */
async function analyzeArchitecture(project) {
  return post('/analyze/architecture', { codeContext: buildCodeContext(project) })
}

/** Run only the best practices checker. */
async function checkBestPractices(project) {
  return post('/analyze/best-practices', { codeContext: buildCodeContext(project) })
}

/** Run only the plagiarism / originality scanner. */
async function scanPlagiarism(project) {
  return post('/analyze/plagiarism', { codeContext: buildCodeContext(project) })
}

/**
 * Run the improvement advisor.
 * Optionally pass stage1 = { bugReport, architectureReport } for richer results.
 */
async function getImprovements(project, stage1 = {}) {
  return post('/analyze/improvements', {
    codeContext:        buildCodeContext(project),
    bugReport:          stage1.bugReport          || {},
    architectureReport: stage1.architectureReport || {},
  })
}

/** Classify the project domain. */
async function classifyDomain(project) {
  return post('/classify/domain', { codeContext: buildCodeContext(project) })
}

// ── Phase 2 ───────────────────────────────────────────────────────────────────

/**
 * Generate Phase 2 interview questions.
 * Pass stage1 results from a previous evaluateProject call.
 */
async function generatePhase2Questions(project, stage1 = {}) {
  console.log('[PythonPipeline] generatePhase2Questions ->', project.id)
  return post('/phase2/questions', {
    codeContext:        buildCodeContext(project),
    bugReport:          stage1.bugReport          || {},
    architectureReport: stage1.architectureReport || {},
    fastScores:         stage1.fastScores         || {},
  })
}

/**
 * Evaluate developer answers for Phase 2.
 * questionsAndAnswers: [{ type, file, question, goodAnswer, answer }]
 */
async function evaluatePhase2Answers({ projectSummary, detectedLevel, questionsAndAnswers }) {
  console.log('[PythonPipeline] evaluatePhase2Answers')
  return post('/phase2/answers', { projectSummary, detectedLevel, questionsAndAnswers })
}

// ── Meta ──────────────────────────────────────────────────────────────────────

/** Health-check the Python server. */
async function healthCheck() {
  return get('/health')
}

/**
 * Check which AI providers are configured on the Python server.
 * Returns: { groq: bool, cerebras: bool, cloudflare: bool, mistral: bool }
 */
async function getProviders() {
  return get('/providers')
}

module.exports = {
  // Full pipeline
  evaluateProject,
  quickEvaluate,

  // Single agents
  detectBugs,
  analyzeArchitecture,
  checkBestPractices,
  scanPlagiarism,
  getImprovements,
  classifyDomain,

  // Phase 2
  generatePhase2Questions,
  evaluatePhase2Answers,

  // Meta
  healthCheck,
  getProviders,
}