import { createTheme } from "@mui/material/styles";
import { palette } from "./pallete";
import { components } from "./components";

/**
 * Main theme
 */
const MainTheme = createTheme({
  palette: palette,
  components: components
})

export default MainTheme;