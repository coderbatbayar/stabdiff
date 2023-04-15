import React from "react";
import { styled } from "@mui/system";
import LinkList from "../link/LinkList";
import { usePathname } from "next/navigation";

const Link = styled(LinkList)(({ theme, selected }) => ({
  color: selected ? 'textSecondary' : 'textTertiary',
  fontSize: 24,
  padding: '0 28px',
  fontWeight: 500,

  "&:hover": {
    color: `${theme.palette.text.secondary} !important`,
  },

  "&:visited": {
    color: selected ? 'textSecondary' : 'inherit',
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