import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    gap: 16,
    marginBottom: 24,
  },

  card: {
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 16,
  },

  label: {
    margin: 0,
    fontSize: 13,
    color: semanticColors.text.secondary,
  },

  value: {
    margin: "8px 0 0",
    fontSize: 28,
  },
};