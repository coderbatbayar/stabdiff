import MainTheme from '@/theme/theme';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={MainTheme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
}
