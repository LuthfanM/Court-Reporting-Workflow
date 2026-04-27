import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { JobController } from "./controllers/JobController.js";
import { ReporterController } from "./controllers/ReporterController.js";
import { EditorController } from "./controllers/EditorController.js";
import { CommonController } from "./controllers/CommonController.js";
import { PaymentController } from "./controllers/PaymentController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Status
app.get("/", CommonController.getStatus);

// Job Routes
app.get("/jobs", JobController.listJobs);
app.post("/jobs", JobController.createJob);
app.post("/jobs/:id/assign-reporter", JobController.assignReporter);
app.post("/jobs/:id/auto-assign-reporter", JobController.autoAssignReporter);
app.patch("/jobs/:id/status", JobController.updateJobStatus);
app.post("/jobs/:id/assign-editor", JobController.assignEditor);
app.get("/jobs/:id/payment", JobController.calculatePayment);

app.get(
  "/payments/current-month-total",
  PaymentController.getCurrentMonthTotal,
);

// Reporter Routes
app.get("/reporters", ReporterController.listReporters);

// Editor Routes
app.get("/editors", EditorController.listEditors);

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
