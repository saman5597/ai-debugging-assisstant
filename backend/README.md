# Backend

Node.js + Express API powering AI Root Cause Analyzer.

---

## Responsibilities

- AI-powered debugging analysis
- Report persistence
- Debug history retrieval
- Shareable report retrieval
- OpenAI integration
- PostgreSQL access through Prisma

---

## Tech Stack

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- OpenAI

---

# Folder Structure

```txt
src/
│
├── controllers/
├── routes/
├── schemas/
├── services/
├── types/
├── app.ts
└── server.ts
```

---

## API Endpoints

### Analyze Error

```http
POST /api/debug/analyze
```

### Get Debug History

```http
GET /api/debug/history
```

### Get Report By ID

```http
GET /api/debug/report/:id
```

---

## Environment Variables

```env
OPENAI_API_KEY=your_key
DATABASE_URL=your_database_url
PORT=5225
```

---

## Run Locally

### Install

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Prisma Commands

Generate Client

```bash
npx prisma generate
```

Run Migrations

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```
