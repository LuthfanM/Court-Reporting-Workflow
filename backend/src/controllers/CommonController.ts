import type { Request, Response } from "express";

export class CommonController {
  // API Status
  static getStatus(req: Request, res: Response) {
    const port = process.env.PORT || 3000;
    res.json({ message: "Court Reporting Workflow API at Port " + port });
  }
}