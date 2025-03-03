import React from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Card from "@mui/material/Card";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NoteIcon from "@mui/icons-material/Note";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import DownloadIcon from "@mui/icons-material/Download";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BarChartIcon from "@mui/icons-material/BarChart";


const HomeSectionItems = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Add New Leads",
      path: "addstudent",
      description:
        "Easily add new students to the system and track their journey from lead to enrollment.",
      icon: <PersonAddIcon color="secondary" />,
    },
    {
      title: "View New Leads",
      path: "newstudents",
      description:
        "Manage new leads with a clear follow-up process to convert them into students.",
      icon: <PersonIcon color="secondary" />,
    },
    {
      title: "Track Trial Lessons",
      path: "newstudents?view=triallessons",
      description:
        "Oversee trial lessons and follow up to successfully enroll students full-time.",
      icon: <QueueMusicIcon color="secondary" />,
    },
    {
      title: "Orders",
      path: "orders",
      description:
        "Track and manage in-shop and web orders to manage distributor progress and easily communicate with customers.",
      icon: <ReceiptIcon color="secondary" />,
    },
    {
      title: "Repairs",
      path: "repairs",
      description:
        "Track and manage in-shop repairs and easily communicate with customers.",
      icon: <BuildCircleIcon color="secondary" />,
    },

    {
      title: "Notes",
      path: "notes",
      description:
        "Access and manage shared notes to streamline administration and track open tasks.",
      icon: <NoteIcon color="secondary" />,
    },
    {
      title: "Dashboard",
      path: "dashboard",
      // restricted: true,
      description:
      "Get up to date analytics and track business trends to facilitate effect decision making.",
      icon: <BarChartIcon color="secondary" />,
    },
    {
      title: "Archive",
      path: "archive",
      description:
        "Review archived students and leads to analyze business history and trends.",
      icon: <InboxIcon color="secondary" />,
    },
    {
      title: "Download",
      disabled: true,
      path: "/",
      description:
        "Export your data in clean, pre-formatted CSV files for easy portability.",
      icon: <DownloadIcon color="secondary" />,
    },
  ];

  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          mt: { xs: 0, md: 3 },
          px: { xs: 0, lg: 2, xl: 6 },
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {menuItems.map((item) => (
          <ListItem
            key={item.title}
            sx={{
              width: "30%",
              minWidth: { xs: "17rem", md: "19rem" },
            }}
          >
            <Card
              sx={{
                mb: { xs: 2, md: 4 },
                borderRadius: 4,
                aspectRatio: "1/1",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemButton
                color="secondary"
                onClick={() => {
                 navigate(`/${item.path}`);
                }}
                sx={[
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 5,
                    pb: 3,
                    px: 3,
                    justifyContent: "center",
                  },
                ]}
              >
                <ListItemIcon
                  sx={{
                    pl: 2,
                    transform: "scale(2)",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <Box
                  sx={{
                    pt: 2,
                  }}
                >
                  {/* <ListItemText secondary={item.title} sx={{ fontSize: "20rem" }} />
                <ListItemText secondary={item.description} sx={[]} /> */}
                  <Typography
                    align="center"
                    fontWeight={"bold"}
                    variant="h6"
                    color="secondary"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ textAlign: "center", pt: 1 }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </ListItemButton>
            </Card>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HomeSectionItems;
