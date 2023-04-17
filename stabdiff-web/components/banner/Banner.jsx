"use client";
import { styled } from "@mui/material";
import React from "react";
import Swiper from "./Swiper";

const StyledDiv = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "900px",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "url(https://picsum.photos/seed/picsum/2000/3000) no-repeat center center/cover"
}));

export const Banner = () => {
  return (
    <>
      <StyledDiv>
        <Swiper />
      </StyledDiv>
    </>
  );
};

export default Banner;