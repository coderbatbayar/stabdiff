'use client';
import { ThemeProvider } from '@mui/system'
import MainTheme from '@/theme/main/theme'
import { CssBaseline } from '@mui/material';
import { MainAppBar, SignUpButton, MainMenu, HeaderLogo, MainAppBarRightSide } from "@/components";

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
          <MainAppBar>
            <HeaderLogo />
            <MainAppBarRightSide>
              <MainMenu items={[
                {label: "AI GEN", href: "/generate"},
                {label: "GALLERY", href: "/gallery"},
                {label: "NOTICE", href: "/notice"},
                {label: "MY PAGE", href: "/mypage"},
              ]} />
              <SignUpButton>Sign Up</SignUpButton>
            </MainAppBarRightSide>
          </MainAppBar>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
