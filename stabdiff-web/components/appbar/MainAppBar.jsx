import React from "react";
import { styled } from "@mui/system";
import { SignUpButton } from "../button";
import { AppBar, Toolbar } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: 81,
  borderBottom: `1px solid ${theme.palette.border.secondary[theme.palette.mode]}`,
  background: theme.palette.secondary[theme.palette.mode],
  backgroundImage: 'none',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: 80,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 6, 
  paddingBottom: 6,

  [theme.breakpoints.down('lg')]: {
    minHeight: 80,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6,
    paddingBottom: 6,
  },
}));

export const MainAppBar = (props) => {
  return (
    <StyledAppBar {...props}>
      <StyledToolbar>
        <SignUpButton>Sign Up</SignUpButton>
      </StyledToolbar>
    </StyledAppBar>
  )
}