import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { components } from "./components";
import { typography } from "./typography";

/**
 * Main theme
 */
const MainTheme = createTheme({
  palette: palette,
  components: components,
  typography: typography
})

export default MainTheme;