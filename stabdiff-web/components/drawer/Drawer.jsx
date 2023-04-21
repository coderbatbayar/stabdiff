import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LinkIcon from "@mui/icons-material/Link";

const drawerWidth = 360;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    background: "black",
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "5px",
  color: `rgba(255, 255, 255, 0.8)`,
  fontSize: "10px",
}));

const ColumnMenu = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "5px",
  color: `rgba(255, 255, 255, 0.5)`,
  borderTop: `1px solid rgba(255, 255, 255, 0.4)`,
  borderBottom: `1px solid ${theme.palette.border.secondary}`,
}));

const MenuItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "15px",
  color: `rgba(255, 255, 255, 0.8)`,
  borderBottom: `1px solid rgba(255, 255, 255, 0.4)`,
  fontSize: "10px",
}));

export const DrawerRigth = (props) => {
  const theme = useTheme();
  
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Persistent drawer
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <StyledDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon sx={{ color: "yellow" }} />
          </IconButton>
        </DrawerHeader>

        <ColumnMenu>
          <StyledGrid>
            <Grid>
              <PersonOutlineIcon />
            </Grid>
            <Grid>
              <Typography>로그인/회원가입</Typography>
            </Grid>
          </StyledGrid>
          <StyledGrid>
            <Grid>
              <AccountBalanceWalletIcon />
            </Grid>
            <Grid>
              <Typography>지갑</Typography>
            </Grid>
          </StyledGrid>
          <StyledGrid>
            <Grid>
              <LinkIcon />
            </Grid>
            <Grid>
              <Typography>링크</Typography>
            </Grid>
          </StyledGrid>
        </ColumnMenu>

        <Grid>
          <MenuItem>
            <Grid>
              <Typography>갤러리</Typography>
            </Grid>
          </MenuItem>
          <MenuItem>
            <Grid>
              <Typography>AI 제너레이터</Typography>
            </Grid>
          </MenuItem>
          <MenuItem>
            <Grid>
              <Typography>공지사항</Typography>
            </Grid>
          </MenuItem>
          <MenuItem>
            <Grid>
              <Typography>공지사항</Typography>
            </Grid>
          </MenuItem>
          <MenuItem>
            <Grid>
              <Typography>마이페이지</Typography>
            </Grid>
          </MenuItem>
        </Grid>
      </StyledDrawer>
    </Box>
  );
};
export default DrawerRigth;
