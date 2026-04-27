import { colors, semanticColors } from "@/helpers/colors";

export const styles: Record<string, React.CSSProperties> = {
  panel: {
    background: semanticColors.background.primary,
    border: `1px solid ${semanticColors.border.primary}`,
    borderRadius: 12,
    padding: 18,
  },

  title: {
    margin: "0 0 16px",
    fontSize: 18,
  },

  group: {
    marginTop: 16,
  },

  groupTitle: {
    margin: "0 0 8px",
    fontSize: 15,
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 8,
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    fontSize: 14,
    borderBottom: `1px solid ${colors.lightGrayBg}`,
    paddingBottom: 8,
  },

  meta: {
    color: semanticColors.text.secondary,
  },

  badge: {
    borderRadius: 999,
    padding: "3px 8px",
    fontSize: 12,
    fontWeight: 600,
  },
};