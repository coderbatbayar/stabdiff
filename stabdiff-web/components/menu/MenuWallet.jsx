import React from "react";
import { styled } from "@mui/system";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { IconButton, MenuItem, MetamaskConnectButton, KaikasConnectButton } from "@/components";
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
  backgroundColor: 'white',
  boxShadow: 'none',
  textAlign: 'center'
}));

export const MenuWallet = ({links, ...props}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton 
        icon={<AccountBalanceWalletIcon />} 
        onClick={onOpenMenu}
        onMouseEnter={onOpenMenu}
        selected={open}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={onCloseMenu}
      >
        <Paper onMouseLeave={onCloseMenu}>
          <MenuItem>
            <MetamaskConnectButton />
          </MenuItem>
          <MenuItem>
            <KaikasConnectButton />
          </MenuItem>
        </Paper>
      </Menu>
    </>
  )
}

export default MenuWallet;