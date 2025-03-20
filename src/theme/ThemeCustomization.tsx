import { createTheme } from "@mui/material/styles";

import Palette from "./palette";
import componentStyleOverrides from './compStyleOverride';

const theme = createTheme({
  palette: Palette().palette,
  spacing: 4,
  typography: {
    subtitle1: {
      fontWeight: 500
    },
    button: {
      textTransform: 'none'
    }
  }
});

theme.components = componentStyleOverrides(theme);

export { theme };
