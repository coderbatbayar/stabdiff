"use client";
import { ThemeProvider } from "@mui/system";
import MainTheme from "@/theme/main/theme";
import { Container, CssBaseline } from "@mui/material";
import {
  Footer,
  MainAppBar,
  MainContainer,
} from "@/components";

// export const metadata = {
//   title: 'Stab Diff',
//   description: '',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
        <body>
          <MainAppBar />
          <MainContainer>{children}</MainContainer>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
