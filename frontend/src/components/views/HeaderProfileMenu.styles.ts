import { semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    position: "relative",
  },

  profileButton: {
    border: "none",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    padding: "8px 10px",
    borderRadius: 999,
    color: semanticColors.text.primary,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    objectFit: "cover",
  },

  avatarFallback: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: semanticColors.background.secondary,
    color: semanticColors.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 700,
    border: `1px solid ${semanticColors.border.primary}`,
  },

  name: {
    fontSize: 14,
    fontWeight: 600,
  },

  menu: {
    position: "absolute",
    top: 48,
    right: 0,
    minWidth: 160,
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 10,
    padding: 6,
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
    zIndex: 20,
  },

  menuItem: {
    width: "100%",
    border: "none",
    background: "transparent",
    textAlign: "left",
    padding: "10px 12px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 14,
    color: semanticColors.text.primary,
  },
};