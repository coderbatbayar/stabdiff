"use client"
import { MainAppBar, SignUpButton, MainMenu } from "@/components";

export default function Home() {
  return (
    <>
      <MainAppBar>
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
