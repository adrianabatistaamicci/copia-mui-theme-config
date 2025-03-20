import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme/ThemeCustomization";

const AmicciThemeProvider = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AmicciThemeProvider;
