import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  panel: {
    display: "grid",
    gap: 16,
  },

  header: {
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 18,
    textAlign: "center",
  },

  title: {
    margin: 0,
    fontSize: 18,
  },

  subtitle: {
    margin: "6px 0 0",
    color: semanticColors.text.secondary,
    fontSize: 14,
  },

  list: {
    display: "grid",
    gap: 12,
  },

  empty: {
    background: semanticColors.background.primary,
    border: `1px dashed ${semanticColors.button.border}`,
    borderRadius: 12,
    padding: 24,
    color: semanticColors.text.secondary,
    textAlign: "center",
  },
};