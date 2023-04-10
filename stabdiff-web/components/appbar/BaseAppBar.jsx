import React from "react";
import { styled } from "@mui/system";
import { AppBar, Toolbar } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  
}));

const BaseAppBar = (props) => {
  return (
    <StyledAppBar {...props}>
      <Toolbar>
        {props.children}
      </Toolbar>
    </StyledAppBar>
  )
}

export default BaseAppBar;