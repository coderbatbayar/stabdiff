"use client"
import { MainAppBar } from "@/components";
import { SignUpButton } from "@/components/button";
import { MainMenu } from "@/components/menu/MainMenu";

export default function Home() {
  return (
    <>
      <MainAppBar>
        <MainMenu />
        <SignUpButton>Sign Up</SignUpButton>
      </MainAppBar>
    </>
  )
}
