import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  
}));

export const BaseButton = (props) => {
  return <StyledButton disableRipple={true} {...props}>
    {props.children}
  </StyledButton>
}

export default BaseButton;