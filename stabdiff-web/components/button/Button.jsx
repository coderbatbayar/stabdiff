import React from "react";
import { styled } from "@mui/system";
import { Button as MuiButton } from "@mui/material";

const StyledButton = styled(MuiButton)(({ theme }) => ({
  border: 'none',

  "&:hover": {
    background: 'inherit'
  }
}));

export const Button = (props) => {
  return <StyledButton disableRipple={true} {...props}>
    {props.children}
  </StyledButton>
}

export default Button;