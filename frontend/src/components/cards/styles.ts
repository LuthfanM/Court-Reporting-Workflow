import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  card: {
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 16,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
    marginBottom: 12,
  },

  leftSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    minWidth: 0,
    textAlign: "left",
  },

  title: {
    margin: 0,
    fontSize: 17,
    fontWeight: 'bold'
  },

  jobMetaGroup: {
    display: "grid",
    gap: 8,
    minWidth: 0,
  },

  timeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 8,
    fontSize: 12,
    color: semanticColors.text.secondary,
  },

  jobMeta: {
    margin: "6px 0 0",
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  meta: {
    margin: "6px 0 0",
    color: semanticColors.text.secondary,
    fontSize: 13,
  },

  status: {
    height: "fit-content",
    borderRadius: 999,
    padding: "5px 10px",
    fontSize: 12,
    width: 120,
    fontWeight: 700,
    textAlign: "center",
  },

  infoGrid: {
    display: "grid",
    gap: 4,
    marginBottom: 14,
    fontSize: 14,
  },

  actions: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },

  button: {
    border: 0,
    borderRadius: 8,
    padding: "8px 12px",
    background: semanticColors.button.primary,
    color: semanticColors.button.primaryText,
    cursor: "pointer",
  },

  secondaryButton: {
    border: `1px solid ${semanticColors.button.border}`,
    borderRadius: 8,
    padding: "8px 12px",
    background: semanticColors.button.secondary,
    color: semanticColors.button.secondaryText,
    cursor: "pointer",
  },

  select: {
    border: `1px solid ${semanticColors.button.border}`,
    borderRadius: 8,
    padding: "8px 12px",
    background: semanticColors.background.primary,
  },
};
