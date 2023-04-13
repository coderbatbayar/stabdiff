import React from "react";
import { styled } from "@mui/system";
import LinkList from "../link/LinkList";

const Link = styled(LinkList)(({ theme }) => ({
  color: theme.palette.secondary[theme.palette.mode],
  fontSize: 13,
  fontWeight: 'bold',
  padding: '0 15px',
  letterSpacing: 0.5
}));

export const MainMenuItem = (props) => {
  return (
    <Link {...props}>
      {props.children}
    </Link>
  )
}

export default MainMenuItem;