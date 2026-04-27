import type { Request, Response } from "express";
import { prisma } from "../prisma.js";

export class EditorController {
  // Task: List Editors
  static async listEditors(req: Request, res: Response) {
    const editors = await prisma.editor.findMany();
    res.json(editors);
  }
}