import React from "react";
import { Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import BaseAppBar from "./BaseAppBar";
import { AppBarSearch } from "../search";

const AppBar = styled(BaseAppBar)({
  height: 51,
  padding: '6px 16px ',
  background: 'rgb(17, 15, 26)',
  borderTop: '1px solid rgb(42, 40, 50)',
  borderBottom: '1px solid rgb(42, 40, 50)'
});

export const HomeAppBar = (props) => {
  return (
    <AppBar {...props}>
      <Toolbar>
        <AppBarSearch />
      </Toolbar>
    </AppBar>
  )
}