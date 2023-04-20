import React from "react";
import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  margin: "30px 25px"
}));

export const ItemContainer = (props) => {
  return (
    <StyledBox {...props}>
      {props.children}
    </StyledBox>
  )
}

export default ItemContainer;