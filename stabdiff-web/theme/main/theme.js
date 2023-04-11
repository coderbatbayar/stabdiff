import { createTheme } from "@mui/material/styles";
import { palette } from "./pallete";
import { components } from "./components";
import { typography } from "./typography";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/**
 * Main theme
 */
const MainTheme = createTheme({
  palette: palette,
  components: components,
  typography: typography
})

export default MainTheme;