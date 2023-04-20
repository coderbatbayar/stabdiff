import React from "react";
import { styled } from "@mui/system";
import {  Divider as MuiDivider } from "@mui/material";

const StyledDivider= styled(MuiDivider)(({ theme }) => ({
  
}));

export const Divider = (props) => {
  return (
    <StyledDivider />
  )
}

export default Divider;