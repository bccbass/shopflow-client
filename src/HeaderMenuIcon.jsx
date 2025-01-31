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
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";


// Unfinished Refactoring for header items

const HeaderMenuIcon = ({title, path, due, dueQuery}) => {
  return (
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
            {item.path === "" && <HomeIcon fontSize="large" />}
            {item.path === "newstudents" && <PersonIcon fontSize="large" />}
            {item.path === "addstudent" && <PersonAddIcon fontSize="large" />}
            {item.path === "triallessons" && (
              <QueueMusicIcon fontSize="large" />
            )}
            {item.path === "repairs" && <BuildCircleIcon fontSize="large" />}
            {item.path === "notes" && <NoteIcon fontSize="large" />}
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
  );
};

export default HeaderMenuIcon;
