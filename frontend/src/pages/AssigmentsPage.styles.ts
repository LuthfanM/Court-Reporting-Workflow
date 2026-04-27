import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    textAlign: "center",
  },

  pageTitle: {
    margin: 0,
    fontSize: 24,
    color: semanticColors.text.primary,
  },

  pageSubtitle: {
    margin: "6px 0 0",
    fontSize: 14,
    color: semanticColors.text.secondary,
  },

  loading: {
    fontSize: 14,
    color: semanticColors.text.secondary,
  },

  timeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 8,
    marginTop: 8,
    fontSize: 12,
    color: semanticColors.text.secondary,
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 16,
    marginBottom: 24,
  },

  summaryCard: {
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 16,
    minWidth: 0,
  },

  summaryLabel: {
    margin: 0,
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  summaryValue: {
    margin: "8px 0 0",
    fontSize: 28,
    color: semanticColors.text.primary,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 20,
    marginBottom: 20,
  },

  panel: {
    textAlign: "center",
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 18,
    minWidth: 0,
  },

  panelHeader: {
    marginBottom: 14,
  },

  panelTitle: {
    margin: 0,
    fontSize: 18,
    color: semanticColors.text.primary,
  },

  panelSubtitle: {
    margin: "6px 0 0",
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  assignmentList: {
    display: "grid",
    gap: 10,
    maxHeight: 350,
    overflowY: "auto",
    paddingRight: 4,
    scrollbarGutter: "stable",
  },

  assignmentRow: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: 14,
    alignItems: "center",
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 10,
    padding: 12,
    minWidth: 0,
    minHeight: 78,
    boxSizing: "border-box",
  },

  assignmentMain: {
    minWidth: 0,
  },

  assignmentTitle: {
    margin: 0,
    fontSize: 15,
    color: semanticColors.text.primary,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  assignmentMeta: {
    margin: "5px 0 0",
    fontSize: 13,
    color: semanticColors.text.secondary,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  assignmentSide: {
    display: "grid",
    justifyItems: "end",
    gap: 6,
  },

  assignee: {
    fontSize: 13,
    color: semanticColors.text.primary,
    whiteSpace: "nowrap",
  },

  status: {
    borderRadius: 999,
    padding: "4px 8px",
    fontSize: 12,
    fontWeight: 700,
    whiteSpace: "nowrap",
    width: 120,
  },

  empty: {
    border: `1px dashed ${semanticColors.border.primary}`,
    borderRadius: 10,
    padding: 18,
    color: semanticColors.text.secondary,
    textAlign: "center",
    fontSize: 14,
  },
};
