import React from "react";
import { styled } from "@mui/system";
import { MenuItem as MuiMenuItem } from "@mui/material";

const StyledMenuItem = styled(MuiMenuItem)(({theme}) => ({
  
}));

export const MenuItem = (props) => {
  return (
    <StyledMenuItem {...props}>
      {props.children}
    </StyledMenuItem>
  )
}