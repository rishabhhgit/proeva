const queues = require('../queues')
const pipelineService = require('../services/pipelineService')
const prisma = require('../config/database')

// Horizontally scalable — concurrency configurable so 1000+ applications per
// posting can be processed in parallel without blocking the event loop.
const CONCURRENCY = parseInt(process.env.APPLICATION_WORKER_CONCURRENCY || '5', 10)

queues.queuesReadyPromise.then(() => {
queues.applicationQueue.process(CONCURRENCY, async (job) => {
  const { applicationId, jobPostingId, action } = job.data
  console.log(`[ApplicationWorker] action=${action} application=${applicationId || '-'} posting=${jobPostingId || '-'}`)

  try {
    switch (action) {
      case 'stage1_screen':
        await pipelineService.runStage1Screening(applicationId)
        break

      case 'stage2_ai_match':
        await pipelineService.runStage2AIMatch(applicationId)
        break

      case 'rank_posting':
        await pipelineService.triggerRanking(jobPostingId)
        break

      default:
        console.warn(`[ApplicationWorker] Unknown action: ${action}`)
    }
  } catch (err) {
    // Record the error on the application so retry logic can find it and
    // the recruiter sees a meaningful message in the dashboard. Without
    // this, inline queue failures are completely silent — the app stays
    // stuck at whatever stage it was in with zero indication of why.
    if (applicationId) {
      await prisma.application.update({
        where: { id: applicationId },
        data: { pipelineError: `Pipeline ${action} failed: ${err.message}` }
      }).catch(() => {})
    }
    throw err
  }
})
console.log(`✅ Application pipeline worker started (concurrency=${CONCURRENCY})`)
})
