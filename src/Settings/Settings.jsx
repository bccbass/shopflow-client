import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getResource, patchResource } from "../assets/apiHelpers";
import { Container, Box, Tabs, Tab, Typography } from "@mui/material";
import General from "./General";
import Teachers from "./Teachers";
import Administration from "./Administration";
import FullScreenLoader from "../FullScreenLoader";
const Settings = () => {
  const [value, setValue] = React.useState("1");

  const {
    data: utilsData,
    isLoading: utilsIsLoading,
    isError: utilsIsError,
  } = useQuery({
    queryKey: ["utils"],
    queryFn: () => getResource("utils?resource=info"),
  });

  const {
    data: teachersData,
    isLoading: teachersIsLoading,
    isError: teachersIsError,
  } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => getResource("teachers"),
  });
  const {
    data: adminData,
    isLoading: adminIsLoading,
    isError: adminIsError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getResource("users"),
  });

  const queryLoading = utilsIsLoading;
  const queryError = utilsIsError;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box sx={{ mx: 0, mt: 6, mb: 6, width: "90vw", typography: "body1" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
          <Typography pr={8} variant="h4" color="secondary">
            Settings
          </Typography>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab sx={{ ml: 0 }} label="General" value="1" />
            <Tab sx={{ ml: 4 }} label="Teachers" value="2" />
            <Tab sx={{ ml: 4 }} label="Administrators" value="3" />
          </Tabs>
        </Box>
      </Box>
      {queryLoading ? (
        <FullScreenLoader />
      ) : queryError ? (
        <FullScreenLoader />
      ) : (
        <Box px={8} py={2} sx={{ display: "flex", justifyContent: "center" }}>
          {value === "1" && <General utilsData={utilsData} />}{" "}
          {value === "2" && <Teachers teachersData={teachersData} instruments={utilsData.instruments} />}{" "}
          {value === "3" && <Administration adminData={adminData} />}{" "}
        </Box>
      )}
    </Container>
  );
};

export default Settings;
