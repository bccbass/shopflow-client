/** @format */

import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NoteIcon from "@mui/icons-material/Note";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { getResource } from "./assets/apiHelpers";
import { UserContext } from "./UserContext";
import SettingsIcon from "@mui/icons-material/Settings";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BarChartIcon from "@mui/icons-material/BarChart";

const HeaderMenuItems = () => {
  const { user } = useContext(UserContext);

  const dueQuery = useQuery({
    queryKey: ["due"],
    queryFn: () => getResource("leads/due"),
  });

  const navigate = useNavigate();

  const menuItems = [
    { title: "Home", path: "", icon: <HomeIcon fontSize="large" /> },
    {
      title: "Add Student",
      path: "addstudent",
      icon: <PersonAddIcon fontSize="large" />,
    },
    {
      title: "New Students",
      path: "newstudents",
      due:
        dueQuery?.data?.trials +
          dueQuery?.data?.enquiries +
          dueQuery?.data?.enrolled || "",
      icon: <PersonIcon fontSize="large" />,
    },
    {
      title: "Repairs",
      path: "repairs",
      due: dueQuery?.data?.repairs || "",
      icon: <BuildCircleIcon fontSize="large" />,
    },
    {
      title: "Orders",
      path: "orders",
      due: dueQuery?.data?.orders || "",
      icon: <ReceiptIcon fontSize="large" />,
    },
    {
      title: "Notes",
      path: "notes",
      due: dueQuery?.data?.notes || "",
      icon: <NoteIcon fontSize="large" />,
    },
  ];
  const utilityMenuItems = [
    {
      title: "Archive",
      path: "archive",
      icon: <InboxIcon fontSize="large" />,
      fullAccess: false,
    },
    {
      title: "Analytics",
      path: "analytics",
      icon: <BarChartIcon fontSize="large" />,
      fullAccess: true,
    },
    {
      title: "Settings",
      path: "settings",
      icon: <SettingsIcon fontSize="large" />,
      fullAccess: true,
    },
  ];
  return (
    <>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.title}
            disablePadding
            sx={{ display: "block", my: 2, ml: -1 }}
          >
            <ListItemButton
              onClick={() => navigate(`/${item.path}`)}
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
                <Badge
                  color={item.due && "error"}
                  badgeContent={
                    dueQuery.isLoading ? "" : dueQuery.isError ? "" : item.due
                  }
                >
                  {item.icon && item.icon}
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary={item.title}
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
        ))}
      </List>
      <Divider />
      <List>
        {utilityMenuItems.map(
          (item) =>
            !user.fullAccess &&
            item.fullAccess ? null : 
             (
              <ListItem
                key={item.title}
                disablePadding
                sx={{ display: "block", my: 2, ml: -1 }}
              >
                <ListItemButton
                  onClick={() => navigate(`/${item.path}`)}
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
                    <Badge
                      color={item.due && "error"}
                      badgeContent={
                        dueQuery.isLoading
                          ? ""
                          : dueQuery.isError
                          ? ""
                          : item.due
                      }
                    >
                      {item.icon}
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
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
            )
        )}
      </List>
    </>
  );
};

export default HeaderMenuItems;
