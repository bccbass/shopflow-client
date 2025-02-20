import React from "react";
import SectionHeader from "../SectionHeader";
import { Container, Box, Tabs, Tab, Typography } from "@mui/material";

const Settings = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box sx={{ mx: 0, mt: 6, mb: 6, width: "90vw", typography: "body1" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs onChange={handleChange} aria-label="lab API tabs example">
            <Typography pr={8} variant="h4" color="secondary">
              Settings
            </Typography>

            <Tab label="General" value="1" />
            <Tab label="Teachers" value="2" />
            <Tab label="Administrators" value="3" />
            <Tab label="School" value="3" />
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
};

export default Settings;
