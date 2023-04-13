import React from "react";
import { styled } from "@mui/system";
import { Menu as MuiMenu } from "@mui/material";

const StyledMenu = styled(MuiMenu)(({theme}) => ({
  
}));

export const Menu = (props) => {
  return (
    <StyledMenu {...props}>
      { props.children }
    </StyledMenu>
  )
}