"use client"
import { MainAppBar, SignUpButton, MainMenu, HeaderLogo, MainAppBarRightSide } from "@/components";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
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
    </>
  )
}
