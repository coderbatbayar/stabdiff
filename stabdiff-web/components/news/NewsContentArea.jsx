import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { NewsContent } from "./NewsContent";
import { NewsData } from "./content";

const StyledBox = styled(Box)(({ theme }) => ({
  borderTop: `2px solid ${theme.palette.border.primary}`,
  borderBottom: `2px solid ${theme.palette.border.primary}`,
  marginTop: "10px",
}));

export const NewsContentArea = (props) => {
  return (
    <StyledBox>
      {NewsData.map((data) => (
        <NewsContent key={data.id} data={data} />
      ))}
    </StyledBox>
  );
};

export default NewsContentArea;
