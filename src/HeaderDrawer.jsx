/** @format */

import * as React from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router';
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HeaderMenuItems from "./HeaderMenuItems";
import Logo from "./Logo";
import LogOutButton from "./Login/LogOutButton";
import { UserContext } from "./UserContext";
import UserAvatar from "./UserAvatar";
import SettingsNavIcon from './SettingsNavIcon'

const drawerWidth = 240;
// console.log(location.pathname)
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: location.pathname == '/' ? 0 : `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: location.pathname == '/' ? 0 : `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer({ children }) {
  const location = useLocation()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user, refetch } = React.useContext(UserContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", mt: 10, ml: 1 }}>
      <CssBaseline />
      <AppBar sx={{}} position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {user ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={[
                  {
                    marginRight: 5,
                  },
                  open && { display: "none" },
                ]}
              >
                <MenuIcon />
              </IconButton>
              <Logo variant="h4" centerOffset={user.fullAccess ? 19 : 14} />
              <Box
                mr={1}
                display={"flex"}
                // width={"14rem"}
                sx={{gap: 4}}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <LogOutButton />
                <SettingsNavIcon fullAccess={user.fullAccess}/>

                <UserAvatar user={user}/>
              </Box>
            </>
          ) : (
            <Logo variant="h4" />
          )}
        </Toolbar>
      </AppBar>

      {user && (
        <Drawer sx={{}} variant="permanent" open={open}>
          <DrawerHeader onClick={handleDrawerClose}>
            <Typography sx={{ mr: 6.5, fontWeight: 600 }} color="primary">
              Menu Items
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <HeaderMenuItems />
        </Drawer>
      )}
      {children}
    </Box>
  );
}
