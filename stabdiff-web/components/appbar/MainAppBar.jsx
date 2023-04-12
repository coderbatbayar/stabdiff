import React from "react";
import { styled } from "@mui/system";
import { AppBar, Toolbar, Box } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: 81,
  borderBottom: `1px solid ${theme.palette.border.secondary[theme.palette.mode]}`,
  background: theme.palette.primary[theme.palette.mode],
  backgroundImage: 'none',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
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
    <StyledAppBar position="sticky" {...props}>
      <StyledToolbar>
        {props.children}
      </StyledToolbar>
    </StyledAppBar>
  )
}

export const MainAppBarRightSide = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {props.children}
      </Box>
    </>
  )
}