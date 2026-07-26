const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  try {
    const skills = [
      'React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Remix',
      'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Bootstrap',
      'Node.js', 'Express.js', 'NestJS', 'Django', 'Flask', 'FastAPI', 'Spring Boot',
      'Ruby on Rails', 'Laravel', 'ASP.NET', 'GraphQL', 'REST API', 'gRPC',
      'Python', 'Java', 'C#', 'C++', 'Go', 'Rust', 'Kotlin', 'Swift', 'PHP', 'Ruby',
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'SQLite', 'Supabase', 'Firebase',
      'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Vercel', 'Netlify', 'Heroku',
      'Git', 'GitHub Actions', 'Jenkins', 'CircleCI', 'Terraform', 'Ansible',
      'React Native', 'Flutter', 'iOS Development', 'Android Development',
      'Redux', 'Zustand', 'MobX', 'Recoil', 'Jotai',
      'Webpack', 'Vite', 'esbuild', 'Rollup', 'Babel',
      'Jest', 'Mocha', 'Cypress', 'Playwright', 'Testing Library', 'Vitest',
      'MongoDB Mongoose', 'Prisma', 'TypeORM', 'Sequelize', 'Drizzle',
      'Socket.io', 'WebSockets', 'Server-Sent Events',
      'OAuth', 'JWT', 'Passport.js', 'NextAuth.js', 'Firebase Auth',
      'Stripe', 'Razorpay', 'PayPal',
      'Figma', 'Adobe XD', 'Sketch',
      'Linux', 'Bash', 'Shell Scripting',
      'Machine Learning', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain',
      'Agile', 'Scrum', 'JIRA', 'Confluence',
      'Microservices', 'CI/CD', 'DevOps', 'System Design', 'Data Structures', 'Algorithms',
      'Blockchain', 'Solidity', 'Web3', 'Ethers.js',
      'Data Analysis', 'Pandas', 'NumPy', 'SQL', 'Excel',
      'Communication', 'Leadership', 'Problem Solving', 'Team Management',
    ];

    let added = 0;
    for (const name of skills) {
      const existing = await prisma.skill.findFirst({
        where: { name: { equals: name, mode: 'insensitive' } },
      });
      if (!existing) {
        await prisma.skill.create({ data: { name } });
        added++;
      }
    }

    const total = await prisma.skill.count();
    console.log('Added:', added, 'Total skills:', total);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
