import React from "react";
import { styled } from "@mui/system";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { MenuLink } from "..";

const Wrapper = styled('ul')(({ theme }) => ({
  display: 'inherit',
  margin: 0
}));

export const MainMenu = (props) => {
  return (
    <>
      <Wrapper {...props}>
        {props.children}
      </Wrapper>

      {/* <Drawer>

      </Drawer>
      
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        // onClick={handleDrawerToggle}
        // sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton> */}
    </>
  )
}

export default MainMenu;