import type { Editor, Job, JobStatus, Reporter } from "@/types/common";

import { formatDateTime } from "@/helpers/functions/math";
import { getJobStatusStyle } from "@/helpers/config/Status";
import { styles } from "./styles";

type JobCardProps = {
  job: Job;
  reporters?: Reporter[];
  editors?: Editor[];
  hideActions?: boolean;
  onAutoAssignReporter?: (jobId: string) => void;
  onAssignReporter?: (jobId: string, reporterId: string) => void;
  onUpdateStatus?: (jobId: string, status: JobStatus) => void;
  onAssignEditor?: (jobId: string, editorId: string) => void;
  onShowPayment?: (jobId: string) => void;
};

export function JobCard({
  job,
  reporters = [],
  editors = [],
  hideActions = false,
  onAutoAssignReporter,
  onAssignReporter,
  onUpdateStatus,
  onAssignEditor,
  onShowPayment,
}: JobCardProps) {
  const availableReporters = reporters.filter(
    (reporter) => reporter.isAvailable
  );

  const availableEditors = editors.filter((editor) => editor.isAvailable);

  return (
    <article style={styles.card}>
      <div style={styles.header}>
        <div style={styles.leftSection}>
          <h2 style={styles.title}>{job.caseName}</h2>

          <div style={styles.jobMetaGroup}>
            <p style={styles.jobMeta}>
              {job.duration} minutes · {job.location} / {job.jobLocation}
            </p>

            {job.createdAt && job.updatedAt && (
              <div style={styles.timeGrid}>
                <span>
                  <strong>Created:</strong> {formatDateTime(job.createdAt)}
                </span>

                <span>
                  <strong>Updated:</strong> {formatDateTime(job.updatedAt)}
                </span>
              </div>
            )}
          </div>
        </div>

        <span style={{ ...styles.status, ...getJobStatusStyle(job.status) }}>
          {job.status}
        </span>
      </div>

      <div style={styles.infoGrid}>
        <p>
          <strong>Reporter:</strong>{" "}
          {job.reporter ? (
            job.reporter.name
          ) : (
            <span style={{ color: "red" }}>Not assigned</span>
          )}
        </p>

        <p>
          <strong>Editor:</strong>{" "}
          {job.editor ? (
            job.editor.name
          ) : (
            <span style={{ color: "red" }}>Not assigned</span>
          )}
        </p>
      </div>

      {!hideActions && (
        <div style={styles.actions}>
          {job.status === "NEW" && (
            <>
              <button
                style={styles.button}
                onClick={() => onAutoAssignReporter?.(job.id)}
              >
                Auto Assign Reporter
              </button>

              <select
                style={styles.select}
                defaultValue=""
                onChange={(e) => onAssignReporter?.(job.id, e.target.value)}
              >
                <option value="" disabled>
                  Manual Assign Reporter
                </option>

                {availableReporters.map((reporter) => (
                  <option key={reporter.id} value={reporter.id}>
                    {reporter.name} — {reporter.location}
                  </option>
                ))}
              </select>
            </>
          )}

          {job.status === "ASSIGNED" && (
            <button
              style={styles.button}
              onClick={() => onUpdateStatus?.(job.id, "TRANSCRIBED")}
            >
              Mark Transcribed
            </button>
          )}

          {job.status === "TRANSCRIBED" && (
            <>
              <select
                style={styles.select}
                defaultValue=""
                onChange={(e) => onAssignEditor?.(job.id, e.target.value)}
              >
                <option value="" disabled>
                  Assign Editor
                </option>

                {availableEditors.map((editor) => (
                  <option key={editor.id} value={editor.id}>
                    {editor.name}
                  </option>
                ))}
              </select>

              {job.editor && (
                <button
                  style={styles.button}
                  onClick={() => onUpdateStatus?.(job.id, "REVIEWED")}
                >
                  Mark Reviewed
                </button>
              )}
            </>
          )}

          {job.status === "REVIEWED" && (
            <button
              style={styles.button}
              onClick={() => onUpdateStatus?.(job.id, "COMPLETED")}
            >
              Mark Completed
            </button>
          )}

          <button
            style={styles.secondaryButton}
            onClick={() => onShowPayment?.(job.id)}
          >
            Calculate Payment
          </button>
        </div>
      )}
    </article>
  );
}