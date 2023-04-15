import React from "react";
import { styled } from "@mui/system";
import LinkIcon from '@mui/icons-material/Link';
import { VerticalIconButton, MenuItem } from "@/components";
import { Menu as MuiMenu } from "./Menu";
import { Paper as MuiPaper } from "@mui/material";

const Menu = styled(MuiMenu)(({theme}) => ({
  "> .MuiList-root": {
   paddingTop: 0 
  }
}));

const Paper = styled(MuiPaper)(({theme}) => ({
  width: 220,
  backgroundImage: 'none',
  backgroundColor: 'transparent',
  boxShadow: 'none'
}));

export const MenuLink = ({links, ...props}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuItemClick = (event, link) => {
    setAnchorEl(null);
    window.open(link, '_blank', 'noreferrer');
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <VerticalIconButton 
        icon={<LinkIcon />} 
        onClick={onOpenMenu}
        selected={open}
      >
        링크
      </VerticalIconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={onCloseMenu}
      >
        <Paper onMouseLeave={onCloseMenu}>
          {links?.map((link, index) => (
            <MenuItem
              key={index}
              onClick={(event) => onMenuItemClick(event, link.link)}
              divider={index !== links.length-1}
            >
              {link.label}
            </MenuItem>
          ))}
        </Paper>
      </Menu>
    </>
  )
}

export default MenuLink;