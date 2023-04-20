// "use client";
// import {
//   MainAppBar,
//   SignUpButton,
//   MainMenu,
//   HeaderLogo,
//   MainAppBarRightSide
// } from "@/components";
// import { Box } from "@mui/material";

// export default function Home() {
//   return <>Homepage</>;
// }


"use client";
import { styled } from "@mui/system";
import { Banner } from "@/components";
import dynamic from "next/dynamic";
import * as React from "react";
const Masonry = dynamic(() => import("../components/Masonry/Masonry"), {
  ssr: false
});
const StyledContainer = styled("div")(() => ({
  padding: "20px 40px"
}));
const Home = () => {
  return (
    <>
      <Banner />
      <StyledContainer>
        <Masonry />
      </StyledContainer>
    </>
  );
};

export default Home;
