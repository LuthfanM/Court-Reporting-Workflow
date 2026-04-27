import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
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

  panel: {
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 18,
  },

  panelHeader: {
    marginBottom: 16,
    textAlign: "center",
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

  timeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 8,
    marginTop: 8,
    fontSize: 12,
    color: semanticColors.text.secondary,
  },

  list: {
    display: "grid",
    gap: 12,
  },

  jobCard: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 280px",
    gap: 16,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 16,
    minWidth: 0,
  },

  jobMain: {
    minWidth: 0,
  },

  jobHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 14,
  },

  jobTitleWrap: {
    minWidth: 0,
  },

  jobTitle: {
    margin: 0,
    fontSize: 16,
    color: semanticColors.text.primary,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  jobMeta: {
    margin: "6px 0 0",
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  status: {
    height: "fit-content",
    borderRadius: 999,
    padding: "4px 8px",
    fontSize: 12,
    fontWeight: 700,
    whiteSpace: "nowrap",
    width: 120,
    textAlign: "center",
  },

  assignmentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },

  assignmentLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    minWidth: 0,
  },

  assignmentRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "left",
    minWidth: 0,
  },

  assignmentLabel: {
    margin: "0 0 4px",
    fontSize: 12,
    color: semanticColors.text.secondary,
  },

  assignmentValue: {
    fontSize: 14,
    color: semanticColors.text.primary,
  },

  paymentBox: {
    display: "grid",
    gap: 12,
    alignContent: "space-between",
    borderLeft: `1px solid ${semanticColors.border.primary}`,
    paddingLeft: 16,
  },

  paymentPlaceholder: {
    margin: 0,
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  paymentResult: {
    display: "grid",
    gap: 6,
  },

  paymentLine: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  totalLine: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    borderTop: `1px solid ${semanticColors.border.primary}`,
    paddingTop: 8,
    marginTop: 4,
    fontSize: 14,
    color: semanticColors.text.primary,
  },

  button: {
    border: 0,
    borderRadius: 8,
    padding: "9px 12px",
    background: semanticColors.button.primary,
    color: semanticColors.button.primaryText,
    fontWeight: 600,
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
