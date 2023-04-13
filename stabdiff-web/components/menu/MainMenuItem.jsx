import React, { useEffect } from "react";
import { styled } from "@mui/system";
import LinkList from "../link/LinkList";


const Link = styled(LinkList)(({ theme, selected }) => ({
  color: selected ? theme.palette.tertiary[theme.palette.mode] : theme.palette.secondary[theme.palette.mode],
  fontSize: 13,
  fontWeight: 'bold',
  padding: '0 15px',
  letterSpacing: 0.5,

  "&:hover": {
    color: theme.palette.tertiary[theme.palette.mode],
  },

  // "&:visited": {
  //   color: 'inherit',
  // }
}));

export const MainMenuItem = ({href, ...props}) => {
  

  return (
    <Link href={href} {...props} selected={href === ""}>
      {props.children}
    </Link>
  )
}




export default MainMenuItem;