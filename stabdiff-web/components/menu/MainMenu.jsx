import React from "react";
import { styled } from "@mui/system";
import { Menu } from "@mui/material";

const StyledMenu = styled(Menu)(({ theme }) => ({

}));

export const MainMenu = (props) => {
  return (
    <>
      <StyledMenu>AI GEN</StyledMenu>
      <StyledMenu>GALLERY</StyledMenu>
      <StyledMenu>NOTICE</StyledMenu>
      <StyledMenu>MY PAGE</StyledMenu>
    </>
  )
}