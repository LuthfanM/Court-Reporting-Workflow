import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  header: {
    height: 84,
    background: semanticColors.background.primary,
    borderBottom: `1px solid ${semanticColors.border.dark}`,
    padding: "0 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    margin: 0,
    fontSize: 24,
  },
};