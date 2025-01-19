/** @format */

import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import Logo from "./Logo";
import HomeSectionItems from "./HomeSectionIcons";

const Home = () => {
  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };
  return (
    <Container sx={{ pt: 10, pb: 20, width: "100vw" }}>
      <Box
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
          height={"100%"}
          style={{
            boxShadow: "3px 3px 6px 0px rgba(0,0,0,0.51)",
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            m: 2,
            alignItems: "center",
            background:
              "linear-gradient(147deg, rgba(52,126,238,1) 0%, rgba(5,126,233,1) 33%, rgba(50,119,230,1) 100%)",
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
          <Button
            onClick={handleScrollToFeatures}
            variant="contained"
            color="primary"
            size="large"
            sx={{
              color: "cornflowerblue",
              my: 4,
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#e0e7ff",
              },
            }}
            href="#features"
          >
            Explore Features
          </Button>
        </Box>
        <Box id="features">
          <HomeSectionItems />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
