import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  marginBottom: 11
}));

export const Label = (props) => {
  return (
    <StyledTypography {...props}></StyledTypography>
  )
}

export default Label;