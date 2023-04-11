"use client"
import { MainAppBar, SignUpButton, MainMenu, HeaderLogo } from "@/components";

export default function Home() {
  return (
    <>
      <MainAppBar>
        <HeaderLogo />
        <MainMenu items={[
          {label: "AI GEN", href: "/generate"},
          {label: "GALLERY", href: "/gallery"},
          {label: "NOTICE", href: "/notice"},
          {label: "MY PAGE", href: "/mypage"},
        ]} />
        <SignUpButton>Sign Up</SignUpButton>
      </MainAppBar>
    </>
  )
}
