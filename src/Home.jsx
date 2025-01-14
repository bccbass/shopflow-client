/** @format */

import React from "react";
import { Container, Box, IconButton, Typography } from "@mui/material";
import Logo from "./Logo";
import HomeSectionItems from "./HomeSectionIcons";

const Home = () => {
  return (
    <Container sx={{ pt: 10, pb: 20, width: "100vw" }}>
      {/* <SectionHeader title="Home" setSearchParams={null} /> */}

      <Box
        border={"1px solid grey"}
        borderRadius={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "75vw",
          maxWidth: "60rem",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <Box
          backgroundColor="primary.main"
          color="white"
          p={2}
          width={"50%"}
          height={"100%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            // justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontFamily: "Gugi", transform: 'skew(-6deg)' }}
            p={5}
            width={"100%"}
            textAlign={"center"}
            variant="h4"
          >
            Welcome to ShopFlow!
          </Typography>
          <Typography p={3} variant="h5">
            Shopflow was designed to help integrate the needs of music shops
            that operate in both educational and retail spaces. It is meant to
            ease the pain of tracking the progress from lead to new student.
            Additionally there are sections to store shared notes, repair and
            sales orders, and so much more...
          </Typography>
        </Box>
        <Box p={2} width={"50%"} maxWidth={"25rem"}>
          <HomeSectionItems />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
