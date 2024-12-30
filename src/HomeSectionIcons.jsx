import React from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NoteIcon from "@mui/icons-material/Note";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";

const HomeSectionItems = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Add New Leads",
      path: "addstudent",
      description:
        "Add a new student to the system, tracking progress from lead to enrollment",
      icon: <PersonAddIcon sx={{ transform: "scale(3)" }} />,
    },
    {
      title: "View New Leads",
      path: "newstudents",
      description:
        "View and manage new leads, tracking your followup process on the path to converting them to students",
      icon: <PersonIcon sx={{ transform: "scale(3)" }} />,
    },
    {
      title: "Track Trial Lessons",
      path: "triallessons",
      description:
        "View and manage trial lessons, tracking your followup process on the path enrolling them as full time students",
      icon: <QueueMusicIcon sx={{ transform: "scale(3)" }} />,
    },
    {
      title: "Notes",
      path: "notes",
      description:
        "View and manage shared notes - a convenient place to handle administration handoff and monitor tasks that fall outside of narrowly defined needs.",
      icon: <NoteIcon sx={{ transform: "scale(3)" }} />,
    },
    {
      title: "Archive",
      path: "archive",
      description:
        "View and manage archived students and leads, tracking business history and trends.",
      icon: <InboxIcon sx={{ transform: "scale(3)" }} />,
    },
  ];
  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {menuItems.map((item) => (
          <ListItem
            key={item.title}
            sx={{
              m: 2,
              width: "100%",
              // border: "1px solid grey",
              // borderRadius: 4,
            }}
          >
            <ListItemButton
              color="primary"
              onClick={() => navigate(`/${item.path}`)}
              sx={[
                {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  px: 2.5,
                  justifyContent: "center",
                },
              ]}
            >
              <ListItemIcon
              >
                {item.icon}
              </ListItemIcon>
              <Box
                sx={{
                  pt: 2, pl:2
                }}
              >
                {/* <ListItemText primary={item.title} sx={{ fontSize: "20rem" }} />
                <ListItemText primary={item.description} sx={[]} /> */}
                <Typography variant="h6" color="primary" >
                  {item.title}
                </Typography>
                <Typography  color="textSecondary" style={{textAlign: 'justify'}} >
                  {item.description}
                </Typography>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HomeSectionItems;
