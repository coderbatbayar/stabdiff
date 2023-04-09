import React from "react";
import { styled } from "@mui/system";
import { AppBar, Toolbar } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: 51,
  padding: '6px 16px ',
  
  borderTop: '1px solid rgb(42, 40, 50)',
  borderBottom: '1px solid rgb(42, 40, 50)'
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