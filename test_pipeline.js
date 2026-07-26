const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({ datasources: { db: { url: 'postgresql://postgres:Credit@789@localhost:5432/devcertai' } } })

async function main() {
  // Check job postings
  const jobs = await prisma.jobPosting.findMany({ select: { id: true, title: true, examDomain: true, examCategory: true, status: true, companyId: true } })
  console.log('=== JOB POSTINGS ===')
  jobs.forEach(j => console.log(`  ${j.id} | ${j.title} | domain=${j.examDomain} cat=${j.examCategory} | status=${j.status} | company=${j.companyId}`))

  // Check users
  const users = await prisma.user.findMany({ select: { id: true, name: true, email: true, role: true } })
  console.log('\n=== USERS ===')
  users.forEach(u => console.log(`  ${u.id} | ${u.name} | ${u.email} | role=${u.role}`))

  // Check applications
  const apps = await prisma.application.findMany({ select: { id: true, userId: true, jobPostingId: true, status: true, pipelineStage: true } })
  console.log('\n=== APPLICATIONS ===')
  apps.forEach(a => console.log(`  ${a.id} | user=${a.userId} | job=${a.jobPostingId} | status=${a.status} | stage=${a.pipelineStage}`))

  // Check credits for demo user
  const demoUser = await prisma.user.findUnique({ where: { email: 'demo@devcert.io' }, select: { id: true } })
  if (demoUser) {
    const credits = await prisma.credit.findMany({ where: { userId: demoUser.id }, select: { id: true, type: true, status: true, amount: true } })
    console.log('\n=== DEMO USER CREDITS ===')
    credits.forEach(c => console.log(`  ${c.type} | status=${c.status} | amount=${c.amount}`))
  }

  // Check companies
  const companies = await prisma.company.findMany({ select: { id: true, name: true, isVerified: true } })
  console.log('\n=== COMPANIES ===')
  companies.forEach(c => console.log(`  ${c.id} | ${c.name} | verified=${c.isVerified}`))

  await prisma.$disconnect()
}

main().catch(e => { console.error(e); process.exit(1) })
