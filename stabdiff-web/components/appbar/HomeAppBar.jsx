import React from "react";
import { styled } from "@mui/system";
import BaseAppBar from "./BaseAppBar";
import { AppBarSearch } from "../search";

const AppBar = styled(BaseAppBar)(({theme}) => ({

}));

export const HomeAppBar = (props) => {
  return (
    <AppBar {...props}>
      <AppBarSearch />
    </AppBar>
  )
}