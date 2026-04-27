import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../api";
import { JobCard } from "@/components/cards/JobCard";
import type { CurrentMonthTotalResponse, Editor, Job, Reporter } from "@/types/common";
import { styles } from "./DashboardPage.styles";
import { formatIDR, getCurrentMonthLabel } from "@/helpers/functions/math";

export function DashboardPage() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [reporters, setReporters] = useState<Reporter[]>([]);
  const [editors, setEditors] = useState<Editor[]>([]);
  const [currentMonthTotal, setCurrentMonthTotal] =
    useState<CurrentMonthTotalResponse | null>(null);

  const [loading, setLoading] = useState(false);

  const loadDashboard = useCallback(async () => {
    try {
      setLoading(true);

      const [jobsRes, reportersRes, editorsRes, currentMonthRes] =
        await Promise.all([
          api.get("/jobs"),
          api.get("/reporters"),
          api.get("/editors"),
          api.get("/payments/current-month-total"),
        ]);

      setJobs(jobsRes.data);
      setReporters(reportersRes.data);
      setEditors(editorsRes.data);
      setCurrentMonthTotal(currentMonthRes.data);
    } catch (error) {
      console.error("Failed to load dashboard", error);
      alert("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadDashboard();
  }, [loadDashboard]);

  const totalPendingJobs = useMemo(() => {
    return jobs.filter((job) => job.status !== "COMPLETED").length;
  }, [jobs]);

  const recentJobs = useMemo(() => {
    return [...jobs]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, 5);
  }, [jobs]);

  return (
    <div>
      <section style={styles.summaryGrid}>
        <SummaryCard label="Total Jobs" value={jobs.length} />
        <SummaryCard label="Pending Jobs" value={totalPendingJobs} />
        <SummaryCard label="Total Reporters" value={reporters.length} />
        <SummaryCard label="Total Editors" value={editors.length} />
      </section>

      <section style={styles.contentGrid}>
        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div>
              <h3 style={styles.panelTitle}>Recent Jobs</h3>
              <p style={styles.panelSubtitle}>
                Latest jobs created in the workflow.
              </p>
            </div>

            <button
              type="button"
              style={styles.arrowButton}
              onClick={() => navigate("/jobs")}
              aria-label="Go to jobs page"
              title="Go to jobs"
            >
              →
            </button>
          </div>

          {recentJobs.length === 0 ? (
            <div style={styles.empty}>No recent jobs yet.</div>
          ) : (
            <div style={styles.recentJobList}>
              {recentJobs.map((job) => (
                <JobCard key={job.id} job={job} hideActions />
              ))}
            </div>
          )}
        </div>

        <div style={styles.monthCard}>
          <p style={styles.monthLabel}>Current Month</p>

          <h3 style={styles.monthTitle}>
            {getCurrentMonthLabel(currentMonthTotal)}
          </h3>

          <div style={styles.amountBox}>
            <p style={styles.amountLabel}>Total Amount</p>
            <strong style={styles.amountValue}>
              {formatIDR(currentMonthTotal?.totalAmount ?? 0)}
            </strong>
          </div>

          <div style={styles.monthMeta}>
            <div>
              <p style={styles.monthMetaLabel}>Completed Jobs</p>
              <strong style={styles.monthMetaValue}>
                {currentMonthTotal?.totalJobs ?? 0}
              </strong>
            </div>
          </div>
        </div>
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
