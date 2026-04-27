import type { Request, Response } from "express";
import { prisma } from "../prisma.js";

export class ReporterController {
  // Task: List Reporters
  static async listReporters(req: Request, res: Response) {
    const reporters = await prisma.reporter.findMany();
    res.json(reporters);
  }
}