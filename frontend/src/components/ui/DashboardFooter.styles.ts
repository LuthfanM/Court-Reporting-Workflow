import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  footer: {
    height: 52,
    background: semanticColors.background.primary,
    borderTop: `1px solid ${semanticColors.border.primary}`,
    padding: "0 28px",
    color: semanticColors.text.secondary,
    fontSize: 13,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};