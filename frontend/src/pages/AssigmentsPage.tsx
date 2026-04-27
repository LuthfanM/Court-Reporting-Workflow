import { useEffect, useMemo, useState } from "react";
import { api } from "@/api";
import type { ReactNode } from "react";
import type { Job } from "@/types/common";
import { getJobStatusStyle } from "@/helpers/config/Status";
import { formatDateTime } from "@/helpers/functions/math";
import { styles } from "./AssigmentsPage.styles";

type AssignmentSection = {
  title: string;
  subtitle: string;
  emptyText: string;
  jobs: Job[];
  getAssignee: (job: Job) => string | ReactNode;
};

export function AssignmentsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignoreResponse = false;

    api
      .get<Job[]>("/jobs")
      .then((res) => {
        if (!ignoreResponse) {
          setJobs(res.data);
        }
      })
      .catch((error) => {
        if (!ignoreResponse) {
          console.error("Failed to load assignments", error);
          alert("Failed to load assignments");
        }
      })
      .finally(() => {
        if (!ignoreResponse) {
          setLoading(false);
        }
      });

    return () => {
      ignoreResponse = true;
    };
  }, []);

  const assignmentGroups = useMemo(() => {
    const reporterAssignments = jobs.filter((job) => job.reporter);
    const editorAssignments = jobs.filter((job) => job.editor);
    const unassignedReporterJobs = jobs.filter((job) => !job.reporter);
    const unassignedEditorJobs = jobs.filter(
      (job) => job.status === "TRANSCRIBED" && !job.editor,
    );

    return {
      reporterAssignments,
      editorAssignments,
      unassignedReporterJobs,
      unassignedEditorJobs,
    };
  }, [jobs]);

  const summaryItems = [
    {
      label: "Reporter Assigned",
      value: assignmentGroups.reporterAssignments.length,
    },
    {
      label: "Editor Assigned",
      value: assignmentGroups.editorAssignments.length,
    },
    {
      label: "Need Reporter",
      value: assignmentGroups.unassignedReporterJobs.length,
    },
    {
      label: "Need Editor",
      value: assignmentGroups.unassignedEditorJobs.length,
    },
  ];

  const assignmentSections: AssignmentSection[] = [
    {
      title: "Reporter Assignments",
      subtitle: "Jobs currently assigned to court reporters.",
      emptyText: "No reporter assignments yet.",
      jobs: assignmentGroups.reporterAssignments,
      getAssignee: (job) => job.reporter?.name ?? <span style={{ color: "red" }}>Not assigned</span>,
    },
    {
      title: "Editor Tasks",
      subtitle: "Jobs currently assigned to editors for review.",
      emptyText: "No editor tasks yet.",
      jobs: assignmentGroups.editorAssignments,
      getAssignee: (job) => job.editor?.name ?? <span style={{ color: "red" }}>Not assigned</span>,
    },
    {
      title: "Jobs Needing Reporter",
      subtitle: "Jobs that have not been assigned to a reporter.",
      emptyText: "All jobs already have reporters.",
      jobs: assignmentGroups.unassignedReporterJobs,
      getAssignee: () => <span style={{ color: "red" }}>No reporter assigned</span>,
    },
    {
      title: "Jobs Needing Editor",
      subtitle: "Transcribed jobs that still need editor assignment.",
      emptyText: "No transcribed jobs need editor assignment.",
      jobs: assignmentGroups.unassignedEditorJobs,
      getAssignee: () => <span style={{ color: "red" }}>No editor assigned</span>,
    },
  ];

  return (
    <div>
      {loading ? <p style={styles.loading}>Loading assignments...</p> : null}

      <section style={styles.summaryGrid}>
        {summaryItems.map((item) => (
          <SummaryCard key={item.label} label={item.label} value={item.value} />
        ))}
      </section>

      {chunkSections(assignmentSections).map((sectionRow, index) => (
        <div key={index} style={styles.grid}>
          {sectionRow.map((section) => (
            <AssignmentPanel
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              emptyText={section.emptyText}
            >
              {section.jobs.map((job) => (
                <AssignmentRow
                  key={job.id}
                  job={job}
                  assignee={section.getAssignee(job)}
                />
              ))}
            </AssignmentPanel>
          ))}
        </div>
      ))}
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

type AssignmentPanelProps = {
  title: string;
  subtitle: string;
  emptyText: string;
  children: ReactNode;
};

function AssignmentPanel({
  title,
  subtitle,
  emptyText,
  children,
}: AssignmentPanelProps) {
  const hasChildren = Array.isArray(children)
    ? children.length > 0
    : Boolean(children);

  return (
    <section style={styles.panel}>
      <div style={styles.panelHeader}>
        <h3 style={styles.panelTitle}>{title}</h3>
        <p style={styles.panelSubtitle}>{subtitle}</p>
      </div>

      <div style={styles.assignmentList}>
        {hasChildren ? children : <div style={styles.empty}>{emptyText}</div>}
      </div>
    </section>
  );
}

type AssignmentRowProps = {
  job: Job;
  assignee: string | ReactNode;
};

function AssignmentRow({ job, assignee }: AssignmentRowProps) {
  return (
    <article style={styles.assignmentRow}>
      <div style={styles.assignmentMain}>
        <h4 style={styles.assignmentTitle}>{job.caseName}</h4>
        <p style={styles.assignmentMeta}>{formatJobMeta(job)}</p>
        <div style={styles.timeGrid}>
          <span>
            <strong>Created:</strong> {formatOptionalDateTime(job.createdAt)}
          </span>

          <span>
            <strong>Updated:</strong> {formatOptionalDateTime(job.updatedAt)}
          </span>
        </div>
      </div>

      <div style={styles.assignmentSide}>
        <strong style={styles.assignee}>{assignee}</strong>
        <span style={{ ...styles.status, ...getJobStatusStyle(job.status) }}>
          {job.status}
        </span>
      </div>
    </article>
  );
}

function formatJobMeta(job: Job) {
  return `${job.duration} minutes · ${job.location} / ${job.jobLocation}`;
}

function formatOptionalDateTime(value?: string) {
  return value ? formatDateTime(value) : "-";
}

function chunkSections(sections: AssignmentSection[]) {
  return sections.reduce<AssignmentSection[][]>((rows, section, index) => {
    if (index % 2 === 0) {
      rows.push([section]);
    } else {
      rows[rows.length - 1].push(section);
    }

    return rows;
  }, []);
}
