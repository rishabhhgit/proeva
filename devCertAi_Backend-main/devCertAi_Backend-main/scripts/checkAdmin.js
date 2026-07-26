const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
p.user.findUnique({ where: { email: 'admin@devcert.io' }, select: { id: true, email: true, role: true, isEmailVerified: true } })
  .then(u => { console.log(JSON.stringify(u, null, 2)); return p.$disconnect(); });
