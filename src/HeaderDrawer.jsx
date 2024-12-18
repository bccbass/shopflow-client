/** @format */

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NoteIcon from "@mui/icons-material/Note";
import Person from "@mui/icons-material/Person";
import Home from "@mui/icons-material/Home";
import { Link, useNavigate } from "react-router";

const drawerWidth = 240;

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
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
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
  const navigate = useNavigate()
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex", mt: 8, ml: 4 }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
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
					<Typography variant="h6" noWrap component="div">
						Shopflow
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					<ListItem key={"home"} disablePadding sx={{ display: "block" }}>
							<ListItemButton
              onClick={() => navigate('/ ')}
								sx={[
									{
										minHeight: 48,
										px: 2.5,
									},
									open
										? {
												justifyContent: "initial",
										  }
										: {
												justifyContent: "center",
										  },
								]}
							>
								<ListItemIcon
									sx={[
										{
											minWidth: 0,
											justifyContent: "center",
										},
										open
											? {
													mr: 3,
											  }
											: {
													mr: "auto",
											  },
									]}
								>
									<Home />
								</ListItemIcon>
								<ListItemText
									primary={"Home"}
									sx={[
										open
											? {
													opacity: 1,
											  }
											: {
													opacity: 0,
											  },
									]}
								/>
							</ListItemButton>
					</ListItem>
					<ListItem key={"note"} disablePadding sx={{ display: "block" }}>
							<ListItemButton
              onClick={() => navigate('/notes')}
								sx={[
									{
										minHeight: 48,
										px: 2.5,
									},
									open
										? {
												justifyContent: "initial",
										  }
										: {
												justifyContent: "center",
										  },
								]}
							>
								<ListItemIcon
									sx={[
										{
											minWidth: 0,
											justifyContent: "center",
										},
										open
											? {
													mr: 3,
											  }
											: {
													mr: "auto",
											  },
									]}
								>
									<NoteIcon />
								</ListItemIcon>
								<ListItemText
									primary={"Notes"}
									sx={[
										open
											? {
													opacity: 1,
											  }
											: {
													opacity: 0,
											  },
									]}
								/>
							</ListItemButton>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem key={"archive"} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							sx={[
								{
									minHeight: 48,
									px: 2.5,
								},
								open
									? {
											justifyContent: "initial",
									  }
									: {
											justifyContent: "center",
									  },
							]}
						>
							<ListItemIcon
								sx={[
									{
										minWidth: 0,
										justifyContent: "center",
									},
									open
										? {
												mr: 3,
										  }
										: {
												mr: "auto",
										  },
								]}
							>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText
								primary={"Archive"}
								sx={[
									open
										? {
												opacity: 1,
										  }
										: {
												opacity: 0,
										  },
								]}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			{children}
		</Box>
	);
}
