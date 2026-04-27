export const styles: Record<string, React.CSSProperties> = {
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  title: {
    margin: 0,
    fontSize: 24,
  },

  subtitle: {
    margin: "6px 0 0",
    color: "#6b7280",
    fontSize: 14,
  },

  loading: {
    fontSize: 14,
    color: "#6b7280",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 480px",
    gap: 24,
    alignItems: "start",
  },

  side: {
    display: "grid",
    gap: 16,
  },
};