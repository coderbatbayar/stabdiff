"use client";
import React from "react";
import { styled } from "@mui/system";
import MasonryList from "./MasonryList";
import MasonryFilter from "./MasonryFilter";
import { Box } from "@mui/material";
import MasonryProvider from "./MasonryContext";

const StyledLayout = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}));

const MasonryLayout = ({ type }) => {
  return (
    <>
      <StyledLayout>
        <MasonryProvider>
          <MasonryFilter type={type} />
          <MasonryList type={type} />
        </MasonryProvider>
      </StyledLayout>
    </>
  );
};

export default MasonryLayout;
