"use client";
import dynamic from "next/dynamic";
import * as React from "react";
const Masonry = dynamic(() => import("../../../components/Masonry/Masonry"), {
  ssr: false
});
import Profile from "../../../components/profile/Profile";
import { styled } from "@mui/material";

const StyledContainer = styled("div")(({ theme }) => ({
  padding: "20px 40px"
}));

export default function MyPage() {
  return (
    <>
      <StyledContainer>
        <Profile />
        <Masonry type="myPage" />
      </StyledContainer>
    </>
  );
}
