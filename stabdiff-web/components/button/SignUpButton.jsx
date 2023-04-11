import React from "react";
import { styled } from "@mui/system";
import BaseButton from "./BaseButton";

const Button = styled(BaseButton)(({theme}) => ({
  width: 100
}));

export const SignUpButton = (props) => {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  )
}