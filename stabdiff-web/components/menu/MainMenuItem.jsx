import React from "react";
import { styled } from "@mui/system";
import LinkList from "../link/LinkList";
import { usePathname } from "next/navigation";

const Link = styled(LinkList)(({ theme, selected }) => ({
  color: selected ? theme.palette.tertiary[theme.palette.mode] : theme.palette.secondary[theme.palette.mode],
  fontSize: 13,
  fontWeight: 'bold',
  padding: '0 15px',
  letterSpacing: 0.5,

  "&:hover": {
    color: theme.palette.tertiary[theme.palette.mode],
  },

  "&:visited": {
    color: selected ? theme.palette.tertiary[theme.palette.mode] : 'inherit',
  }
}));

export const MainMenuItem = ({href, ...props}) => {
  const pathname = usePathname();

  return (
    <Link href={href} {...props} selected={href === pathname}>
      {props.children}
    </Link>
  )
}

export default MainMenuItem;