import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography, Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "40px",
}));

const SeeMoreBox = styled(Box)(({ theme }) => ({
  border: "1px sloid black",
  borderRadius: "50px",
  background: "black",
  color: "white",
  width: "80px",
  height: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const NewsSeeMore = (props) => {
  return (
    <StyledBox>
      <SeeMoreBox>
        <Typography fontSize="20px">+</Typography>
        <Typography>더보기</Typography>
      </SeeMoreBox>
    </StyledBox>
  );
};

export default NewsSeeMore;
