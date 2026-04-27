import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  sidebar: {
    width: 240,
    background: semanticColors.sidebar.background,
    color: semanticColors.sidebar.text,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  logoMark: {
    width: 42,
    height: 42,
    borderRadius: 10,
    background: semanticColors.sidebar.activeItem,
    display: "grid",
    placeItems: "center",
    fontWeight: 700,
  },

  logoSubtitle: {
    margin: 0,
    fontSize: 13,
    color: semanticColors.sidebar.inactiveText,
  },

  nav: {
    display: "grid",
    gap: 8,
  },

  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: 0,
    background: "transparent",
    color: semanticColors.sidebar.inactiveText,
    textAlign: "left",
    padding: "10px 12px",
    borderRadius: 8,
    cursor: "pointer",
    textDecoration: "none",
    fontSize: 14,
  },

  active: {
    background: semanticColors.sidebar.hoverBg,
    color: semanticColors.sidebar.text,
  },
};