# Court Reporting Workflow System Manager

A simplified workflow system for managing transcription jobs

<img width="800" height="400" alt="Screenshot 2026-04-27 at 21 31 58" src="https://github.com/user-attachments/assets/c339d92b-47f1-477f-ab22-6a9107619202" />

## Features

- Create transcription jobs
- Assign reporters
- Prefer same-city reporters for physical jobs
- Assign editors after transcription
- Track job status
- Calculate reporter and editor payments
- Basic UI

## Tech Stack

- React
- TypeScript
- Node.js
- Express
- Prisma
- SQLite

## Workflow

NEW → ASSIGNED → TRANSCRIBED → REVIEWED → COMPLETED

## Payment Rules

- Reporter: IDR 2,000 per minute
- Editor: IDR 50,000 per job

## Run Backend

```bash
cd backend
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```
