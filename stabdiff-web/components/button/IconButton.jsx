import React from "react";
import { styled } from "@mui/system";
import { IconButton as MuiIconButton } from "@mui/material";

const StyledIconButton = styled(MuiIconButton)(({ theme }) => ({
  
}));

export const IconButton = (props) => {
  return <StyledIconButton disableRipple={true} {...props}>
    {props.icon || props.children}
  </StyledIconButton>
}

export default IconButton;