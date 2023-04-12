import React from "react";
import { styled } from "@mui/system";
import { Drawer } from "@mui/material";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  backgroundImage: 'none',
}));


export const Drawer = (props) => {
  return (
    <StyledDrawer {...props}>
      {props.children}
    </StyledDrawer>
  )
}
