/** @format */

import React from "react";
import { useContext } from "react";
import { Box, TextField } from "@mui/material";
import { UserContext } from "../UserContext";

const LocationForm = ({ setLocationData, locationData }) => {
  const { user } = useContext(UserContext);
  const handleChange = (e) =>
    setLocationData({
      ...locationData,
      [e.target.name]: e.target.value,
    });
  return (
    <Box mb={5}>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          size="small"
          id="name"
          label="Location Name"
          name="name"
          value={locationData?.name}
          onChange={handleChange}
        />
      </Box>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <TextField
          sx={{ width: "52%" }}
          size="small"
          id="streetAddress"
          label="Street Address"
          helperText="eg. 123 Main Street"
          name="streetAddress"
          value={locationData?.streetAddress}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "25%" }}
          size="small"
          id="suburb"
          label="Suburb"
          name="suburb"
          value={locationData?.suburb}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "16%" }}
          size="small"
          id="state"
          label="State"
          name="state"
          value={locationData?.state}
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          mb: 3,
          mt: 2,
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          sx={{ width: "40%" }}
          size="small"
          id="phone"
          label="Phone Number"
          name="phone"
          value={locationData?.phone}
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          multiline
          sx={{ width: "100%" }}
          size="small"
          id="description"
          label="Location Description"
          name="description"
          value={locationData?.description}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default LocationForm;
