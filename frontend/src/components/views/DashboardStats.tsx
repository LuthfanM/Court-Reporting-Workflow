import type { Editor, Job, Reporter } from "../../types/common";
import {styles} from "./DashboardStats.styles";

type DashboardStatsProps = {
  jobs: Job[];
  reporters: Reporter[];
  editors: Editor[];
};

export function DashboardStats({ jobs, reporters, editors }: DashboardStatsProps) {
  const newJobs = jobs.filter((job) => job.status === "NEW").length;
  const assignedJobs = jobs.filter((job) => job.status === "ASSIGNED").length;
  const availableReporters = reporters.filter((reporter) => reporter.isAvailable).length;
  const availableEditors = editors.filter((editor) => editor.isAvailable).length;

  return (
    <section style={styles.grid}>
      <StatCard label="Total Jobs" value={jobs.length} />
      <StatCard label="New Jobs" value={newJobs} />
      <StatCard label="Assigned Jobs" value={assignedJobs} />
      <StatCard label="Available Reporters" value={availableReporters} />
      <StatCard label="Available Editors" value={availableEditors} />
    </section>
  );
}

type StatCardProps = {
  label: string;
  value: number;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <div style={styles.card}>
      <p style={styles.label}>{label}</p>
      <h2 style={styles.value}>{value}</h2>
    </div>
  );
}

