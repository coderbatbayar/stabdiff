import React from "react";
import { styled } from "@mui/system";
import { AppBar as MuiAppBar, Toolbar as MuiToolbar, Box, Button } from "@mui/material";
import { HeaderLogo, MenuLink, MenuProfile, MenuWallet } from "@/components";
import { MainMenu, MainMenuItem } from "@/components";
import DeleteIcon from '@mui/icons-material/Delete';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  height: 150,
  background: 'primary',
  backgroundImage: 'none',
  boxShadow: 'none'
}));

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  minHeight: 150,
  paddingLeft: 50,
  paddingRight: 50,
  paddingTop: 32, 
  paddingBottom: 32,

  [theme.breakpoints.up('xs')]: {
    minHeight: 150,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 32,
    paddingBottom: 32,
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
        <MainMenu>
          <MainMenuItem href='/gallery'>갤러리</MainMenuItem>
          <MainMenuItem href='/generate'>AI 제너레이터</MainMenuItem>
          <MainMenuItem href='/notice'>공지사항</MainMenuItem>
          <MainMenuItem href='/mypage'>마이페이지</MainMenuItem>
        </MainMenu>
        <MainAppBarRightSide>
          <MenuLink links={[
              {label: 'RKM', link: 'https://www.renaultkoream.com/'},
              {label: 'Discord', link: 'https://discord.com/'},
              {label: 'ChatGPT', link: 'https://chat.openai.com/'}
            ]} 
          />
          <MenuWallet />
          <MenuProfile />
        </MainAppBarRightSide>
      </Toolbar>
    </AppBar>
  )
}

