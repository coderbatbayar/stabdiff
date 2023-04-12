import React from "react";
import { styled } from "@mui/system";
import Link from "next/link";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary[theme.palette.mode],
  fontSize: 20,
  fontWeight: 'bold',
  padding: '0 15px',
  textDecoration: 'none',
  letterSpacing: -0.5
}));

const Menu = styled('ul')(({ theme }) => ({
  display: 'inherit'
}));

const MenuItem = styled('li')(({ theme }) => ({
  display: 'inherit'
}));

export const MainMenu = ({items, ...props}) => {
  return (
    <>
      <Menu {...props}>
        {items?.map((item, i) => {
          return <MenuItem key={i}>
            <StyledLink href={item.href}>
              {item.menu}
            </StyledLink>  
          </MenuItem>
        })}
      </Menu>
      <Drawer>

      </Drawer>
      
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        // onClick={handleDrawerToggle}
        // sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}