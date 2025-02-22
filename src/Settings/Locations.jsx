import React from "react";
import { useState } from "react";
import { Stack, Card, Box, Typography, TextField, Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putResource } from "../assets/apiHelpers";
import OpenUpdateModalButton from "../Buttons/OpenUpdateModalButton";
import LocationFormWrapper from "./LocationFormWrapper";
const Locations = ({ utilsData }) => {
  return (
    <Box m={2}>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        borderRadius={3}
        p={2}
        border={1}
        sx={{ borderColor: "text.secondary" }}
      >
        {utilsData.locations.map((location) => (
          <Card
            key={location._id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 280,
              borderRadius: 3,
              color: "text.primary",
              px: 4,
              py: 2,
              m: 2,
            }}
          >
            <Box width={'100%'}>
              <Typography variant="h6" color="grey" align="center" pb={2}>
                {`${location.name.toUpperCase()}`}
              </Typography>

              <Typography pb={0}>{`${location.streetAddress}`}</Typography>

              <Typography pb={2}>
                {`${location.suburb}, ${location.state}`}
              </Typography>

              <Typography
                fontStyle={"italic"}
                pb={2}
              >{`"${location.description}"`}</Typography>

              <Typography pb={4}>{`Phone: ${location.phone}`}</Typography>
            </Box>
            <OpenUpdateModalButton title={"Edit Location"}>
              <LocationFormWrapper location={location} utilsData={utilsData} />
            </OpenUpdateModalButton>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          py: 2,
          px: 4,
        }}
      >
        <OpenUpdateModalButton variant="contained" title={"Add Location"}>
          <LocationFormWrapper utilsData={utilsData} />
        </OpenUpdateModalButton>
      </Box>
    </Box>
  );
};

export default Locations;
