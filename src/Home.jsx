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
        // border={"1px solid grey"}
        sx={{
          display: "flex",
          flexDirection: "column",
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
          borderRadius={4}
          backgroundColor="primary.main"
          color="white"
          p={2}
          // width={"50%"}
          height={"100%"}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            // justifyContent: "space-around",
            alignItems: "center",
            background: 'rgb(22,106,217)',
background: 'linear-gradient(147deg, rgba(5,146,244,1)  0%, rgba(5,126,233,1) 33%, rgba(25,146,214,1) 100%)'
          }}
        >
          <Typography
            sx={{ fontFamily: "Gugi", transform: "skew(-6deg)" }}
            pt={2}
            width={"100%"}
            textAlign={"center"}
            variant="h4"
          >
            Welcome to ShopFlow!
          </Typography>
          <Typography p={3} variant="h5" style={{ textAlign: "justify" }}>
            ShopFlow is your ultimate solution for seamlessly managing the
            unique demands of music shops operating in both educational and
            retail spaces. Designed to streamline your workflow, ShopFlow
            simplifies everything from converting leads into new students to
            organizing shared notes, repair orders, sales, and more. With
            ShopFlow, you can focus on what truly matters—building your business
            and inspiring your customers—while we handle the details.
          </Typography>
        </Box>
        <Box>
          <HomeSectionItems />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
