import React from "react";
import { styled } from "@mui/system";
import { MenuItem as MuiMenuItem } from "@mui/material";

const StyledMenuItem = styled(MuiMenuItem)(({theme}) => ({
  paddingTop: 12,
  paddingBottom: 12,

  "&:hover": {
    color: theme.palette.tertiary[theme.palette.mode],
  }
}));

export const MenuItem = (props) => {
  return (
    <StyledMenuItem disableRipple={true} {...props}>
      {props.children}
    </StyledMenuItem>
  )
}