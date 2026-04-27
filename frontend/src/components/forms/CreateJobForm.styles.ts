import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  panel: {
    width: "100%",
    minWidth: 0,
    overflow: "hidden",
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 18,
    boxSizing: "border-box",
  },

  header: {
    marginBottom: 18,
  },

  title: {
    margin: 0,
    fontSize: 18,
  },

  subtitle: {
    margin: "6px 0 0",
    color: semanticColors.text.secondary,
    fontSize: 13,
    lineHeight: 1.5,
  },

  form: {
    display: "grid",
    gap: 12,
    minWidth: 0,
  },

  fieldRow: {
    display: "grid",
    gridTemplateColumns: "120px minmax(0, 1fr)",
    gap: 12,
    alignItems: "center",
    minWidth: 0,
  },

  label: {
    display: "block",
    minWidth: 0,
    fontSize: 14,
    fontWeight: 600,
    color: semanticColors.text.primary,
  },

  fieldControl: {
    minWidth: 0,
    width: "100%",
  },

  input: {
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    border: `1px solid ${semanticColors.button.border}`,
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 14,
    outline: "none",
    background: semanticColors.background.primary,
    color: semanticColors.text.primary,
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: 4,
    minWidth: 0,
  },

  button: {
    border: 0,
    borderRadius: 8,
    padding: "10px 14px",
    background: semanticColors.button.primary,
    color: semanticColors.button.primaryText,
    fontWeight: 600,
    cursor: "pointer",
  },
};