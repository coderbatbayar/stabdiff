"use client";
import { styled } from "@mui/system";
import { Banner } from "../../components/banner/Banner";
import dynamic from "next/dynamic";
import * as React from "react";
const Masonry = dynamic(() => import("../../components/Masonry/Masonry"), {
  ssr: false
});
const StyledContainer = styled("div")(() => ({
  padding: "20px 40px"
}));
const Gallery = () => {
  return (
    <>
      <Banner />
      <StyledContainer>
        <Masonry />
      </StyledContainer>
    </>
  );
};

export default Gallery;
