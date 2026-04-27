import { useCallback, useEffect, useMemo, useState } from "react";
import { api } from "../api";
import type { Job } from "@/types/common";
import { getJobStatusStyle } from "@/helpers/config/Status";
import { formatDateTime, formatIDR } from "@/helpers/functions/math";
import { styles } from "./PaymentsPage.styles.ts";

type PaymentResult = {
  jobId: string;
  reporterPayment: number;
  editorPayment: number;
  totalPayout: number;
};

export function PaymentsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [payments, setPayments] = useState<Record<string, PaymentResult>>({});
  // eslint-disable-next-line
  const [_loading, setLoading] = useState(false);

  const [calculatingJobId, setCalculatingJobId] = useState<string | null>(null);

  const loadJobs = useCallback(async () => {
    try {
      setLoading(true);

      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.error("Failed to load payment jobs", error);
      alert("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    void loadJobs();
  }, [loadJobs]);

  const completedJobs = useMemo(() => {
    return jobs.filter((job) => job.status === "COMPLETED");
  }, [jobs]);

  const payableJobs = useMemo(() => {
    return jobs.filter((job) => job.reporter || job.editor);
  }, [jobs]);

  async function calculatePayment(jobId: string) {
    try {
      setCalculatingJobId(jobId);

      const res = await api.get(`/jobs/${jobId}/payment`);

      setPayments((prev) => ({
        ...prev,
        [jobId]: {
          jobId,
          reporterPayment: res.data.reporterPayment,
          editorPayment: res.data.editorPayment,
          totalPayout: res.data.totalPayout,
        },
      }));
    } catch (error) {
      console.error("Failed to calculate payment", error);
      alert("Failed to calculate payment");
    } finally {
      setCalculatingJobId(null);
    }
  }

  return (
    <div>
      <section style={styles.summaryGrid}>
        <SummaryCard label="Total Jobs" value={jobs.length} />
        <SummaryCard label="Payable Jobs" value={payableJobs.length} />
        <SummaryCard label="Completed Jobs" value={completedJobs.length} />
        <SummaryCard label="Calculated" value={Object.keys(payments).length} />
      </section>

      <section style={styles.panel}>
        <div style={styles.panelHeader}>
          <h3 style={styles.panelTitle}>Job Payments</h3>
          <p style={styles.panelSubtitle}>
            Select a job to calculate payment based on duration and assignment.
          </p>
        </div>

        {jobs.length === 0 ? (
          <div style={styles.empty}>No jobs available.</div>
        ) : (
          <div style={styles.list}>
            {jobs.map((job) => (
              <PaymentJobCard
                key={job.id}
                job={job}
                payment={payments[job.id]}
                isCalculating={calculatingJobId === job.id}
                onCalculate={() => calculatePayment(job.id)}
                createdAt={job.createdAt}
                updatedAt={job.updatedAt}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

type SummaryCardProps = {
  label: string;
  value: number;
};

function SummaryCard({ label, value }: SummaryCardProps) {
  return (
    <div style={styles.summaryCard}>
      <p style={styles.summaryLabel}>{label}</p>
      <h3 style={styles.summaryValue}>{value}</h3>
    </div>
  );
}

type PaymentJobCardProps = {
  job: Job;
  payment?: PaymentResult;
  isCalculating: boolean;
  onCalculate: () => void;
  createdAt: string;
  updatedAt: string;
};

function PaymentJobCard({
  job,
  payment,
  isCalculating,
  onCalculate,
  createdAt,
  updatedAt,
}: PaymentJobCardProps) {
  const canCalculate = Boolean(job.reporter || job.editor);

  return (
    <article style={styles.jobCard}>
      <div style={styles.jobMain}>
        <div style={styles.jobHeader}>
          <div style={styles.jobTitleWrap}>
            <h4 style={styles.jobTitle}>{job.caseName}</h4>
            <p style={styles.jobMeta}>
              {job.duration} minutes · {job.location} / {job.jobLocation}
            </p>
            <div style={styles.timeGrid}>
              <span>
                <strong>Created:</strong> {formatDateTime(createdAt)}
              </span>

              <span>
                <strong>Updated:</strong> {formatDateTime(updatedAt)}
              </span>
            </div>
          </div>

          <span style={{ ...styles.status, ...getJobStatusStyle(job.status) }}>
            {job.status}
          </span>
        </div>

        <div style={styles.assignmentGrid}>
          <div style={styles.assignmentLeft}>
            <p style={styles.assignmentLabel}>Reporter</p>
            <strong style={styles.assignmentValue}>
              {job.reporter?.name ?? (
                <span style={{ color: "red" }}>Not assigned</span>
              )}
            </strong>
          </div>

          <div style={styles.assignmentRight}>
            <p style={styles.assignmentLabel}>Editor</p>
            <strong style={styles.assignmentValue}>
              {job.editor?.name ?? (
                <span style={{ color: "red" }}>Not assigned</span>
              )}
            </strong>
          </div>
        </div>
      </div>

      <div style={styles.paymentBox}>
        {payment ? (
          <div style={styles.paymentResult}>
            <PaymentLine label="Reporter" value={payment.reporterPayment} />
            <PaymentLine label="Editor" value={payment.editorPayment} />
            <div style={styles.totalLine}>
              <span>Total</span>
              <strong>{formatIDR(payment.totalPayout)}</strong>
            </div>
          </div>
        ) : (
          <p style={styles.paymentPlaceholder}>Payment not calculated yet.</p>
        )}

        <button
          style={{
            ...styles.button,
            opacity: canCalculate ? 1 : 0.5,
            cursor: canCalculate ? "pointer" : "not-allowed",
          }}
          disabled={!canCalculate || isCalculating}
          onClick={onCalculate}
        >
          {isCalculating ? "Calculating..." : "Calculate"}
        </button>
      </div>
    </article>
  );
}

type PaymentLineProps = {
  label: string;
  value: number;
};

function PaymentLine({ label, value }: PaymentLineProps) {
  return (
    <div style={styles.paymentLine}>
      <span>{label}</span>
      <strong>{formatIDR(value)}</strong>
    </div>
  );
}
