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

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 380px",
    gap: 24,
    alignItems: "start",
  },

  panel: {
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 18,
    minWidth: 0,
  },

  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "flex-start",
    marginBottom: 16,
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

  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 999,
    border: `1px solid ${semanticColors.border.primary}`,
    background: semanticColors.background.primary,
    color: semanticColors.text.primary,
    cursor: "pointer",
    fontSize: 20,
    lineHeight: 1,
  },

  recentJobList: {
    display: "grid",
    gap: 12,
    maxHeight: 620,
    overflowY: "auto",
    paddingRight: 4,
    scrollbarGutter: "stable",
  },

  monthCard: {
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 20,
    minWidth: 0,
  },

  monthLabel: {
    margin: 0,
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  monthTitle: {
    margin: "8px 0 20px",
    fontSize: 22,
    color: semanticColors.text.primary,
    textTransform: "capitalize",
  },

  amountBox: {
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 16,
    background: semanticColors.background.secondary,
  },

  amountLabel: {
    margin: 0,
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  amountValue: {
    display: "block",
    marginTop: 8,
    fontSize: 28,
    color: semanticColors.text.primary,
  },

  monthMeta: {
    marginTop: 14,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 14,
  },

  monthMetaLabel: {
    margin: 0,
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  monthMetaValue: {
    display: "block",
    marginTop: 6,
    fontSize: 20,
    color: semanticColors.text.primary,
  },

  monthNote: {
    margin: "14px 0 0",
    fontSize: 13,
    lineHeight: 1.5,
    color: semanticColors.text.secondary,
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