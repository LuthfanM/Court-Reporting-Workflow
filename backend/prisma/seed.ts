import "dotenv/config";
import { PrismaClient } from "../src/lib/prisma-client.js";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.reporter.createMany({
    data: [
      { name: "Reporter Jakarta 1", location: "Jakarta", isAvailable: true },
      { name: "Reporter Bandung 1", location: "Bandung", isAvailable: true },
      { name: "Remote Reporter 1", location: "Remote", isAvailable: true },
    ],
  });

  await prisma.editor.createMany({
    data: [
      { name: "Editor 1", isAvailable: true },
      { name: "Editor 2", isAvailable: true },
    ],
  });

  console.log("Seed completed");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });