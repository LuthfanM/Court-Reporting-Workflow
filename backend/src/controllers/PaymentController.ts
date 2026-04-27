import type { Request, Response } from "express";
import { prisma } from "../prisma.js";
import { EDITOR_FLAT_FEE, REPORTER_RATE_PER_MINUTE } from "../helpers/constant.js";

export class PaymentController {
  static async getCurrentMonthTotal(req: Request, res: Response) {
    try {
      const now = new Date();

      const startOfMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      );

      const startOfNextMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        1
      );

      const completedJobs = await prisma.job.findMany({
        where: {
          status: "COMPLETED",
          updatedAt: {
            gte: startOfMonth,
            lt: startOfNextMonth,
          },
        },
        include: {
          reporter: true,
          editor: true,
        },
      });

      const totalAmount = completedJobs.reduce((total, job) => {
        const reporterPayment = job.reporter
          ? job.duration * REPORTER_RATE_PER_MINUTE
          : 0;

        const editorPayment = job.editor ? EDITOR_FLAT_FEE : 0;

        return total + reporterPayment + editorPayment;
      }, 0);

      res.json({
        month: now.getMonth() + 1,
        year: now.getFullYear(),
        totalJobs: completedJobs.length,
        totalAmount,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Failed to calculate current month total",
      });
    }
  }
}