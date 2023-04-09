import React from "react";
import { InputBase } from "@mui/material";
import { styled } from "@mui/system";

const BaseAppBarSearch = styled('div')(({ theme }) => ({
  display: 'contents',
  height: 38,
  width: 333,
  border: '1px solid rgb(42, 40, 50)',
  borderRadius: 12
}));


export const AppBarSearch = (props) => {
  return (
    <BaseAppBarSearch {...props}>
    s
    </BaseAppBarSearch>
  )
}
