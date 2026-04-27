-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseName" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "jobLocation" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "reporterId" TEXT,
    "editorId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Job_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "Reporter" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Job_editorId_fkey" FOREIGN KEY ("editorId") REFERENCES "Editor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reporter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Editor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true
);
