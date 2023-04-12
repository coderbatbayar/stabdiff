import React from "react";
import { styled } from "@mui/system";
import Link from "next/link";

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
    <Menu {...props}>
      {items?.map((item, i) => {
        return <MenuItem>
          <StyledLink href={item.href}>
            {item.label}
          </StyledLink>  
        </MenuItem>
      })}
    </Menu>
  )
}