const colors: { [key: string]: string } = {
  primary50: "#EDF9F8",
  primary100: "#D9F4F2",
  primary200: "#ACE0DD",
  primary300: "#6FE0DC",
  primary400: "#37D4D1",
  primary500: "#10C2C0",
  primary600: "#199BA0",
  primary700: "#127279",
  primary800: "#285E70",
  primary900: "#062630",

  // Secondary
  secondary50: "#EDF9F8",
  secondary100: "#D9F4F2",
  secondary200: "#ACE0DD",
  secondary300: "#6FE0DC",
  secondary400: "#37D4D1",
  secondary500: "#10C2C0",
  secondary600: "#199BA0",
  secondary700: "#127279",
  secondary800: "#285E70",
  secondary850: "#06454A",
  secondary900: "#062630",

  // Error
  error50: "#FEF3F2",
  error100: "#FEE4E2",
  error200: "#FECDCA",
  error300: "#FDA29B",
  error400: "#F97066",
  error500: "#F04438",
  error600: "#D92D20",
  error700: "#B42318",
  error800: "#912018",
  error900: "#7A271A",

  // Info
  info50: "#E1F5FE",
  info100: "#B3E5FC",
  info200: "#81D4FA",
  info300: "#4FC3F7",
  info400: "#29B6F6",
  info500: "#03A9F4",
  info600: "#039BE5",
  info700: "#0288D1",
  info800: "#0277BD",
  info900: "#01579B",

  // Warning
  warning50: "#FFFAEB",
  warning100: "#FEF0C7",
  warning200: "#FEDF89",
  warning300: "#FEC84B",
  warning400: "#FDB022",
  warning500: "#F79009",
  warning600: "#DC6803",
  warning700: "#B54708",
  warning800: "#93370D",
  warning900: "#7A2E0E",

  // Success
  success50: "#ECFDF3",
  success100: "#D1FADF",
  success200: "#A6F4C5",
  success300: "#6CE9A6",
  success400: "#32D583",
  success500: "#12B76A",
  success600: "#039855",
  success700: "#027A48",
  success800: "#05603A",
  success900: "#054F31",

  // Grey
  grey50: "#F9FBFB",
  grey100: "#F3F6F5",
  grey200: "#EAEFF0",
  grey300: "#CED6D6",
  grey400: "#AFB9BA",
  grey500: "#808586",
  grey600: "#656969",
  grey700: "#4A4F4F",
  grey800: "#313536",
  grey900: "#212323",

   // Magenta
   magenta50:  "#F8F4F7",
   magenta100: "#E7CDE0",
   magenta200: "#D3A0C7",
   magenta300: "#BF74AD",
   magenta400: "#AE4E97",
   magenta500: "#9B247F",
   magenta600: "#821E6A",
   magenta700: "#681855",
   magenta800: "#551445",
   magenta900: "#390D2F",
};


colors["primaryMain"] = colors.primary500;
colors["primaryLight"] = colors.primary100;
colors["primaryDark"] = colors.primary700;
colors["secondaryMain"] = colors.secondary500;
colors["secondaryLight"] = colors.secondary100;
colors["secondaryDark"] = colors.secondary700;

colors["tertiaryMain"] = colors.tertiary;
colors["tertiaryLight"] = colors.tertiary;
colors["tertiaryDark"] = colors.tertiary700;

colors["errorMain"] = colors.error600;
colors["errorLight"] = colors.error100;
colors["errorDark"] = colors.error800;

colors["infoMain"] = colors.info600;
colors["infoLight"] = colors.info50;
colors["infoDark"] = colors.info800;

colors["warningMain"] = colors.warning400;
colors["warningLight"] = colors.warning100;
colors["warningDark"] = colors.warning600;

colors["successMain"] = colors.success500;
colors["successLight"] = colors.success100;
colors["successDark"] = colors.success700;

export default colors;
