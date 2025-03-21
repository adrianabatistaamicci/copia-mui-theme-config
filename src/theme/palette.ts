import colors from "./colors";
import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";

const Palette = () => {
  // Padronizar tema claro até escuro ser implementado
  const navType: PaletteMode = "light";

  return createTheme({
    palette: {
      mode: navType,
      common: {
        black: "#030a23",
      },
      primary: {
        main: colors.primaryMain,
        light: colors.primaryLight,
        dark: colors.primaryDark,
        50: colors.primary50,
        100: colors.primary100,
        200: colors.primary200,
        300: colors.primary300,
        400: colors.primary400,
        500: colors.primary500,
        600: colors.primary600,
        700: colors.primary700,
        800: colors.primary800,
        900: colors.primary900,
        contrastText: "#fff",
      },
      secondary: {
        main: colors.secondaryMain,
        light: colors.secondaryLight,
        dark: colors.secondaryDark,
        50: colors.secondary50,
        100: colors.secondary100,
        200: colors.secondary200,
        300: colors.secondary300,
        400: colors.secondary400,
        500: colors.secondary500,
        600: colors.secondary600,
        700: colors.secondary700,
        800: colors.secondary800,
        850: colors.secondary850,
        900: colors.secondary900,
        contrastText: "#fff",
      },
      tertiary: {
        main: colors.magenta500,
        light: colors.magenta100,
        dark: colors.magenta700,
        50: colors.magenta50,
        100: colors.magenta100,
        200: colors.magenta200,
        300: colors.magenta300,
        400: colors.magenta400,
        500: colors.magenta500,
        600: colors.magenta600,
        700: colors.magenta700,
        800: colors.magenta800,
        900: colors.magenta900,
        contrastText: "#fff",
      },
      error: {
        main: colors.errorMain,
        light: colors.errorLight,
        dark: colors.errorDark,
        50: colors.error50,
        100: colors.error100,
        200: colors.error200,
        300: colors.error300,
        400: colors.error400,
        500: colors.error500,
        600: colors.error600,
        700: colors.error700,
        800: colors.error800,
        900: colors.error900,
        contrastText: "#fff",
      },
      info: {
        main: colors.infoMain,
        light: colors.infoLight,
        dark: colors.infoDark,
        50: colors.info50,
        100: colors.info100,
        200: colors.info200,
        300: colors.info300,
        400: colors.info400,
        500: colors.info500,
        600: colors.info600,
        700: colors.info700,
        800: colors.info800,
        900: colors.info900,
        contrastText: "#fff",
      },
      warning: {
        main: colors.warningMain,
        light: colors.warningLight,
        dark: colors.warningDark,
        50: colors.warning50,
        100: colors.warning100,
        200: colors.warning200,
        300: colors.warning300,
        400: colors.warning400,
        500: colors.warning500,
        600: colors.warning600,
        700: colors.warning700,
        800: colors.warning800,
        900: colors.warning900,
        contrastText: "#fff",
      },
      success: {
        main: colors.successMain,
        light: colors.successLight,
        dark: colors.successDark,
        50: colors.success50,
        100: colors.success100,
        200: colors.success200,
        300: colors.success300,
        400: colors.success400,
        500: colors.success500,
        600: colors.success600,
        700: colors.success700,
        800: colors.success800,
        900: colors.success900,
        contrastText: "#fff",
      },
      grey: {
        50: colors.grey50,
        100: colors.grey100,
        200: colors.grey200,
        300: colors.grey300,
        400: colors.grey400,
        500: colors.grey500,
        600: colors.grey600,
        700: colors.grey700,
        800: colors.grey800,
        900: colors.grey900,
      },
      magenta: {
        50: colors.magenta50,
        100: colors.magenta100,
        200: colors.magenta200,
        300: colors.magenta300,
        400: colors.magenta400,
        500: colors.magenta500,
        600: colors.magenta600,
        700: colors.magenta700,
        800: colors.magenta800,
        900: colors.magenta900,
      },
      text: {
        primary: colors.grey900,
        secondary: colors.grey600, 
        disabled: colors.grey400,
      },
    } as PaletteOptions,
  });
};

export default Palette;
