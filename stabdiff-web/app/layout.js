'use client';
import { ThemeProvider } from '@mui/system'
import MainTheme from '@/theme/main/theme'
import { CssBaseline } from '@mui/material';
import { MainAppBar, MainMenu, HeaderLogo, MainAppBarRightSide, MenuLink, MainMenuItem } from "@/components";

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
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
