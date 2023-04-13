import React from "react";
import { styled } from "@mui/system";
import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Box } from "@mui/material";
import { HeaderLogo, MenuLink } from "@/components";
import { MainMenu, MainMenuItem } from "@/components";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  height: 51,
  borderBottom: `1px solid ${theme.palette.border.secondary[theme.palette.mode]}`,
  background: theme.palette.primary[theme.palette.mode],
  backgroundImage: 'none',
}));

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: 50,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 6, 
  paddingBottom: 6,

  [theme.breakpoints.down('lg')]: {
    minHeight: 50,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6,
    paddingBottom: 6,
  },
}));

const MainAppBarRightSide = (props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'contents' } }}>
        {props.children}
      </Box>
    </>
  )
}

export const MainAppBar = (props) => {
  return (
    <AppBar position="sticky" {...props}>
      <Toolbar>
        <HeaderLogo />
        <MainAppBarRightSide>
          <MainMenu>
            <MainMenuItem href='/generate'>AI GEN</MainMenuItem>
            <MainMenuItem href='/gallery'>GALLERY</MainMenuItem>
            <MainMenuItem href='/notice'>NOTICE</MainMenuItem>
            <MainMenuItem href='/mypage'>MY PAGE</MainMenuItem>
          </MainMenu>
          <MenuLink links={[
              {label: 'RKM', link: 'https://www.renaultkoream.com/'},
              {label: 'Discord', link: 'https://discord.com/'},
              {label: 'ChatGPT', link: 'https://chat.openai.com/'}
            ]} 
          />
        </MainAppBarRightSide>
      </Toolbar>
    </AppBar>
  )
}

