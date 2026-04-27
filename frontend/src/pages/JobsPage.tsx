import { useCallback, useEffect, useState } from "react";
import { api } from "../api";
import type { Editor, Job, JobStatus, Reporter } from "../types/common";

import { CreateJobForm } from "@/components/forms/CreateJobForm";
import { JobList } from "@/components/views/JobList";
import { TeamStatusAvailability } from "@/components/views/TeamStatusAvailability";
import { styles } from "./JobsPage.styles";

export function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [reporters, setReporters] = useState<Reporter[]>([]);
  const [editors, setEditors] = useState<Editor[]>([]);

  const [caseName, setCaseName] = useState("");
  const [duration, setDuration] = useState(60);
  const [location, setLocation] = useState("Jakarta");
  const [jobLocation, setJobLocation] = useState<"PHYSICAL" | "REMOTE">(
    "PHYSICAL",
  );

  const [loading, setLoading] = useState(false);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const [jobsRes, reportersRes, editorsRes] = await Promise.all([
        api.get("/jobs"),
        api.get("/reporters"),
        api.get("/editors"),
      ]);

      setJobs(jobsRes.data);
      setReporters(reportersRes.data);
      setEditors(editorsRes.data);
    } catch (error) {
      console.error("Failed to load jobs page data", error);
      alert("Failed to load data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  async function createJob(e: React.FormEvent) {
    e.preventDefault();

    try {
      await api.post("/jobs", {
        caseName,
        duration,
        location,
        jobLocation,
      });

      setCaseName("");
      setDuration(60);
      setLocation("Jakarta");
      setJobLocation("PHYSICAL");

      await loadData();
    } catch (error) {
      console.error("Failed to create job", error);
      alert("Failed to create job");
    }
  }

  async function autoAssignReporter(jobId: string) {
    try {
      await api.post(`/jobs/${jobId}/auto-assign-reporter`);
      await loadData();
    } catch (error) {
      console.error("Failed to auto assign reporter", error);
      alert("Failed to auto assign reporter");
    }
  }

  async function assignReporter(jobId: string, reporterId: string) {
    if (!reporterId) return;

    try {
      await api.post(`/jobs/${jobId}/assign-reporter`, { reporterId });
      await loadData();
    } catch (error) {
      console.error("Failed to assign reporter", error);
      alert("Failed to assign reporter");
    }
  }

  async function updateStatus(jobId: string, status: JobStatus) {
    try {
      await api.patch(`/jobs/${jobId}/status`, { status });
      await loadData();
    } catch (error) {
      console.error("Failed to update status", error);
      alert("Failed to update status");
    }
  }

  async function assignEditor(jobId: string, editorId: string) {
    if (!editorId) return;

    try {
      await api.post(`/jobs/${jobId}/assign-editor`, { editorId });
      await loadData();
    } catch (error) {
      console.error("Failed to assign editor", error);
      alert("Failed to assign editor");
    }
  }

  async function showPayment(jobId: string) {
    try {
      const res = await api.get(`/jobs/${jobId}/payment`);

      alert(
        `Reporter Payment: IDR ${res.data.reporterPayment}\nEditor Payment: IDR ${res.data.editorPayment}\nTotal: IDR ${res.data.totalPayout}`,
      );
    } catch (error) {
      console.error("Failed to calculate payment", error);
      alert("Failed to calculate payment");
    }
  }

  return (
    <div>
      <div style={styles.grid}>
        <div>
          <JobList
            jobs={jobs}
            reporters={reporters}
            editors={editors}
            onAutoAssignReporter={autoAssignReporter}
            onAssignReporter={assignReporter}
            onUpdateStatus={updateStatus}
            onAssignEditor={assignEditor}
            onShowPayment={showPayment}
          />
        </div>

        <aside style={styles.side}>
          <CreateJobForm
            caseName={caseName}
            duration={duration}
            location={location}
            jobLocation={jobLocation}
            onCaseNameChange={setCaseName}
            onDurationChange={setDuration}
            onLocationChange={setLocation}
            onJobLocationChange={setJobLocation}
            onSubmit={createJob}
          />

          <TeamStatusAvailability reporters={reporters} editors={editors} />
        </aside>
      </div>
    </div>
  );
}

