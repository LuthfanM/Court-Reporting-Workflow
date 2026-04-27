# Court Reporting Workflow API

## Endpoints

### Common
- `GET /` - API Status

### Jobs
- `GET /jobs` - List Jobs
- `POST /jobs` - Create Job
- `POST /jobs/:id/assign-reporter` - Assign Reporter to Job
- `POST /jobs/:id/auto-assign-reporter` - Auto Assign Reporter
- `PATCH /jobs/:id/status` - Update Job Status
- `POST /jobs/:id/assign-editor` - Assign Editor
- `GET /jobs/:id/payment` - Calculate Payment

### Reporters
- `GET /reporters` - List Reporters

### Editors
- `GET /editors` - List Editors

## Setup

```bash
npm install
npx prisma migrate dev
npm run prisma:seed
npm run dev
```

## Environment Variables

- `PORT` (default: 3000)
- `REPORTER_RATE_PER_MINUTE` (default: 2000)
- `EDITOR_FLAT_FEE` (default: 50000)