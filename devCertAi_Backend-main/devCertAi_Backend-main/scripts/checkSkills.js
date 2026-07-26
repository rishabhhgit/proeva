const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
p.skill.findMany({ take: 20, orderBy: { name: 'asc' } })
  .then(s => { console.log('Total skills:', s.length); console.log(JSON.stringify(s, null, 2)); return p.$disconnect(); });
