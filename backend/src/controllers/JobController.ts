import type { Request, Response } from "express";
import { prisma } from "../prisma.js";
import {
  EDITOR_FLAT_FEE,
  REPORTER_RATE_PER_MINUTE,
} from "../helpers/constant.js";

export class JobController {
  // Task: List Jobs
  static async listJobs(req: Request, res: Response) {
    const jobs = await prisma.job.findMany({
      include: {
        reporter: true,
        editor: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(jobs);
  }

  // Task: Create Job
  static async createJob(req: Request, res: Response) {
    const { caseName, duration, location, jobLocation } = req.body;

    if (!caseName || !duration || !location || !jobLocation) {
      return res.status(400).json({
        message:
          "missing parameters: caseName, duration, location, and jobLocation are required",
      });
    }

    const job = await prisma.job.create({
      data: {
        caseName,
        duration: Number(duration),
        location,
        jobLocation,
        status: "NEW",
      },
    });

    res.status(201).json(job);
  }

  // Task: Assign Reporter to Job
  static async assignReporter(req: Request, res: Response) {
    const { id } = req.params;
    const { reporterId } = req.body;

    const job = await prisma.job.findUnique({
      where: { id },
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const reporter = await prisma.reporter.findUnique({
      where: { id: reporterId },
    });

    if (!reporter) {
      return res.status(404).json({ message: "Reporter not found" });
    }

    if (!reporter.isAvailable) {
      return res.status(400).json({ message: "Reporter is not available" });
    }

    if (job.jobLocation === "PHYSICAL" && reporter.location !== job.location) {
      return res.status(400).json({
        message: "Physical jobs need to be same as reporter location",
      });
    }

    const updatedJob = await prisma.job.update({
      where: { id },
      data: {
        reporterId,
        status: "ASSIGNED",
      },
      include: {
        reporter: true,
        editor: true,
      },
    });

    res.json(updatedJob);
  }

  // Task: Auto Assign Reporter
  // Rule : prefer same city for physical jobs
  static async autoAssignReporter(req: Request, res: Response) {
    const { id } = req.params;

    const job = await prisma.job.findUnique({
      where: { id },
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.status !== "NEW") {
      return res.status(400).json({
        message: "Reporter can only be auto-assigned when job status is NEW",
      });
    }

    let reporter = null;

    if (job.jobLocation === "PHYSICAL") {
      reporter = await prisma.reporter.findFirst({
        where: {
          location: job.location,
          isAvailable: true,
        },
      });
    }

    //there is no rule that says if reporter already assigned, he cannot be assigned again,
    //in order to avoid assigned to same reporter, we implement random logic to assign case for different location
    if (!reporter) {
      const availableReporters = await prisma.reporter.findMany({
        where: {
          isAvailable: true,
        },
      });

      if (availableReporters.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * availableReporters.length,
        );

        reporter = availableReporters[randomIndex];
      }
    }

    if (!reporter) {
      return res.status(400).json({ message: "No available reporter found" });
    }

    const updatedJob = await prisma.job.update({
      where: { id },
      data: {
        reporterId: reporter.id,
        status: "ASSIGNED",
      },
      include: {
        reporter: true,
        editor: true,
      },
    });

    res.json(updatedJob);
  }

  // Task: Update Job Status
  // Workflow: NEW -> ASSIGNED -> TRANSCRIBED -> REVIEWED -> COMPLETED
  static async updateJobStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
      "NEW",
      "ASSIGNED",
      "TRANSCRIBED",
      "REVIEWED",
      "COMPLETED",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const job = await prisma.job.update({
      where: { id },
      data: { status },
      include: {
        reporter: true,
        editor: true,
      },
    });

    res.json(job);
  }

  // Task: Assign Editor
  static async assignEditor(req: Request, res: Response) {
    const { id } = req.params;
    const { editorId } = req.body;

    const job = await prisma.job.findUnique({
      where: { id },
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.status !== "TRANSCRIBED") {
      return res.status(400).json({
        message: "Editor can only be assigned after job is transcribed",
      });
    }

    const editor = await prisma.editor.findUnique({
      where: { id: editorId },
    });

    if (!editor) {
      return res.status(404).json({ message: "Editor not found" });
    }

    const updatedJob = await prisma.job.update({
      where: { id },
      data: {
        editorId,
        status: "REVIEWED",
      },
      include: {
        reporter: true,
        editor: true,
      },
    });

    res.json(updatedJob);
  }

  // Task: Calculate Payment
  static async calculatePayment(req: Request, res: Response) {
    const { id } = req.params;

    const job = await prisma.job.findUnique({
      where: { id },
      include: {
        reporter: true,
        editor: true,
      },
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const reporterPayment = job.duration * REPORTER_RATE_PER_MINUTE;
    const editorPayment = job.editor ? EDITOR_FLAT_FEE : 0;
    const totalPayout = reporterPayment + editorPayment;

    res.json({
      jobId: job.id,
      caseName: job.caseName,
      duration: job.duration,
      reporterPayment,
      editorPayment,
      totalPayout,
    });
  }
}
