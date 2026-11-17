# DevCertAI (ProEva) — AI-Driven Developer Skill Certification Platform

An end-to-end, automated developer evaluation and technical assessment platform powered by AI. Evaluates candidate proficiencies through structured domain challenges, automated code evaluation, and multidimensional skill benchmarking.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue.svg)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748.svg)](https://www.prisma.io/)

---

## About DevCertAI

DevCertAI bridges technical hiring and candidate evaluation by replacing rote algorithmic quizzes with realistic, domain-specific coding assessments. The platform evaluates candidates across multiple software engineering disciplines, scoring code quality, problem decomposition, test pass rates, and implementation efficiency using AI evaluation pipelines.

### Supported Evaluation Domains

- **Frontend Engineering**: React, Vue, DOM manipulation, state management, and modern CSS layout.
- **Backend Engineering**: RESTful API design, database querying, concurrency, and security.
- **Full-Stack Development**: End-to-end feature implementation combining client UI and server logic.
- **DevOps & Infrastructure**: Docker containerization, CI/CD pipelines, and script automation.
- **Data Science & ML**: Exploratory data analysis, statistical modeling, and ML pipeline validation.
- **Mobile Development**: Native and cross-platform UI architectures.
- **Core Programming Languages**: Deep-dive language mechanics in TypeScript, Python, Go, and Java.

---

## Architecture

DevCertAI is architected into three coordinated services:

```
proeva / DevCertAI
├── devCertAi_frontend/     # Candidate test-taking interface & recruiter dashboard
├── devCertAi_Backend/      # Core Express REST API, auth & assessment workflow engine
└── devCertAi_Backend_ai/   # Automated AI grading pipeline, rubric evaluation & feedback generator
```

### Core Pipeline Flow

```
Recruiter creates Job Posting
         │
         ▼
Candidate launches Assessment Session
         │
         ▼
Domain-specific Questions & Code Sandbox loaded
         │
         ▼
Candidate submits Code Solution
         │
         ▼
AI Evaluation Pipeline runs automated grading & code quality checks
         │
         ▼
Multi-dimensional Scorecard generated & stored in PostgreSQL via Prisma
```

---

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database & ORM**: PostgreSQL, Prisma ORM
- **AI Evaluation**: Python / LLM scoring pipeline with rubric cross-verification
- **Frontend**: React / Next.js with Monaco code editor

---

## Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL >= 14
- npm or pnpm

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rishabhhgit/proeva.git
   cd proeva
   ```

2. **Configure Database**:
   Set your PostgreSQL connection string in the environment or `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/devcertai?schema=public"
   ```

3. **Run Migrations & Seed**:
   ```bash
   cd devCertAi_Backend-main/devCertAi_Backend-main
   npx prisma migrate dev
   npx prisma db seed
   ```

4. **Start the API Server**:
   ```bash
   npm install
   npm run dev
   ```

5. **Start the AI Evaluation Service**:
   ```bash
   cd ../../devCertAi_Backend_ai-main/devCertAi_Backend_ai-main
   npm install
   npm run dev
   ```

6. **Start the Candidate Frontend**:
   ```bash
   cd ../../devCertAi_frontend-main/devCertAi_frontend-main
   npm install
   npm run dev
   ```

---

## License

MIT License.
