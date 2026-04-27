import type { Editor, Reporter, Job, JobStatus } from "@/types/common";
import { JobCard } from "@/components/cards/JobCard";
import {styles} from "./JobList.styles";

type JobListProps = {
  jobs: Job[];
  reporters: Reporter[];
  editors: Editor[];
  onAutoAssignReporter: (jobId: string) => void;
  onAssignReporter: (jobId: string, reporterId: string) => void;
  onUpdateStatus: (jobId: string, status: JobStatus) => void;
  onAssignEditor: (jobId: string, editorId: string) => void;
  onShowPayment: (jobId: string) => void;
};

export function JobList({
  jobs,
  reporters,
  editors,
  onAutoAssignReporter,
  onUpdateStatus,
  onAssignEditor,
  onAssignReporter,
  onShowPayment,
}: JobListProps) {
  return (
    <section style={styles.panel}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>Job List</h2>
          <p style={styles.subtitle}>Track status and assignments.</p>
        </div>
      </div>

      {jobs.length === 0 ? (
        <div style={styles.empty}>No jobs yet.</div>
      ) : (
        <div style={styles.list}>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              reporters={reporters}
              job={job}
              editors={editors}
              onAutoAssignReporter={onAutoAssignReporter}
              onAssignReporter={onAssignReporter}
              onUpdateStatus={onUpdateStatus}
              onAssignEditor={onAssignEditor}
              onShowPayment={onShowPayment}
            />
          ))}
        </div>
      )}
    </section>
  );
}

