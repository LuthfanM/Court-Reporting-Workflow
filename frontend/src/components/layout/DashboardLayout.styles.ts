import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: "100vh",
    display: "flex",
    background: semanticColors.background.secondary,
    color: semanticColors.text.primary,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  page: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
  },

  content: {
    flex: 1,
    padding: 28,
    overflow: "auto",
  },
};