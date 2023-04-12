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
                {menu: "AI GEN", href: "/generate"},
                {menu: "GALLERY", href: "/gallery"},
                {menu: "NOTICE", href: "/notice"},
                {menu: "MY PAGE", href: "/mypage"},
                {menu: <SignUpButton>Sign Up</SignUpButton>, href: "/mypage"},
              ]} />
            </MainAppBarRightSide>
          </MainAppBar>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
