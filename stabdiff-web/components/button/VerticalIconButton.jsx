import React from "react";
import { styled } from "@mui/system";
import { Button as BaseButton } from "./Button";

const Button = styled(BaseButton)(({ theme, selected }) => ({
  color: selected ? 'textSecondary' : 'inherit',

  "& > .MuiButton-startIcon": {
    marginRight: 0,
    marginLeft: 0
  }
}));

export const VerticalIconButton = ({icon, ...props}) => {
  return <Button
    variant="contained"
    startIcon={icon}
    sx={{ flexDirection: 'column', gap: 1 }}
    {...props}
  >
    {props.children}
  </Button>
}

export default VerticalIconButton;