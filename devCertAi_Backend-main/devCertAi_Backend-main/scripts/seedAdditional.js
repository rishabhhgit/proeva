const { PrismaClient } = require('@prisma/client');
const additionalQuestions = require('../../../additional_questions');

async function main() {
  const prisma = new PrismaClient();
  try {
    const count = await prisma.questionBank.count();
    console.log('Existing questions:', count);

    const existing = await prisma.questionBank.findMany({
      select: { question: true, domain: true, category: true, level: true }
    });
    const existingSet = new Set(
      existing.map(e => `${e.domain}||${e.category}||${e.level}||${e.question}`)
    );

    let inserted = 0;
    let skipped = 0;

    for (const q of additionalQuestions) {
      const key = `${q.domain}||${q.category}||${q.level}||${q.question}`;
      if (existingSet.has(key)) {
        skipped++;
        continue;
      }
      await prisma.questionBank.create({
        data: {
          domain: q.domain,
          category: q.category,
          phase: q.phase || 1,
          level: q.level,
          type: q.type || 'mcq',
          question: q.question,
          options: q.options,
          answer: q.answer
        }
      });
      inserted++;
    }

    console.log('Inserted:', inserted);
    console.log('Skipped (duplicates):', skipped);
    const finalCount = await prisma.questionBank.count();
    console.log('Final total:', finalCount);

    const byDomain = await prisma.questionBank.groupBy({
      by: ['domain'],
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } }
    });
    console.log('\nBy domain:');
    byDomain.forEach(d => console.log('  ' + d.domain + ': ' + d._count.id));
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
