import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { NewsHeader } from "./NewsHeader";
import { NewsSearchArea } from "./NewsSearchArea";
import { NewsContentArea } from "./NewsContentArea";
import { NewsSeeMore } from "./NewsSeeMore";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

const Wrapper = styled(Box)(({ theme }) => ({
  width: 990,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "0 40px",
  },
}));

export const News = (props) => {
  return (
    <StyledBox {...props}>
      <Wrapper>
        <NewsHeader></NewsHeader>
        <NewsSearchArea />
        <NewsContentArea />
        <NewsSeeMore />
      </Wrapper>
    </StyledBox>
  );
};

export default News;
