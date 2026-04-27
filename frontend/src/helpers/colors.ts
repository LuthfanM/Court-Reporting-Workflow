// Primary Colors
export const colors = {
  // Whites
  white: "#fff",

  // Dark Colors
  dark: "#111827",
  darkGray: "#1f2937",
  darkest: "#08060d",

  // Light Grays
  lightBg: "#f6f7f9",
  lightGrayBg: "#f3f4f6",
  lighterGray: "#9ca3af",

  // Medium Grays
  mediumGray: "#6b7280",
  mediumGrayBorder: "#d1d5db",

  // Light Borders
  lightBorder: "#e5e7eb",
  darkBorder: "#374151",

  // Blues
  blue: "#2563eb",

  // Purples/Indigos
  indigo: "#3730a3",
  lightIndigo: "#eef2ff",

  // Greens
  green: "#047857",
  lightGreen: "#ecfdf5",

  // Reds
  red: "#b91c1c",
  lightRed: "#fef2f2",

  // Accent Colors
  accentPurple: "#aa3bff",
  accentPurpleDark: "#c084fc",

  // Text Colors
  text: "#6b6375",
  textHeading: "#08060d",

  // CSS Custom Properties (for dark mode)
  cssText: "#9ca3af",
  cssTextHeading: "#f3f4f6",
  cssBg: "#16171d",
  cssBorder: "#2e303a",
  cssCodeBg: "#f4f3ec",
  cssCodeBgDark: "#1f2028",
  cssBorderLight: "#e5e4e7",
};

export const semanticColors = {
  background: {
    primary: colors.white,
    secondary: colors.lightBg,
    tertiary: colors.lightGrayBg,
    dark: colors.darkest,
  },
  text: {
    primary: colors.dark,
    secondary: colors.mediumGray,
    muted: colors.lighterGray,
    light: colors.white,
  },
  border: {
    primary: colors.lightBorder,
    secondary: colors.mediumGrayBorder,
    dark: colors.darkBorder,
  },
  status: {
    success: colors.green,
    successBg: colors.lightGreen,
    error: colors.red,
    errorBg: colors.lightRed,
  },
  button: {
    primary: colors.blue,
    primaryText: colors.white,
    secondary: colors.white,
    secondaryText: colors.dark,
    border: colors.mediumGrayBorder,
  },
  badge: {
    background: colors.lightIndigo,
    text: colors.indigo,
  },
  sidebar: {
    background: colors.dark,
    text: colors.white,
    activeItem: colors.blue,
    inactiveText: colors.lighterGray,
    hoverBg: colors.darkGray,
  },
};
