import React from "react";
import {
  Divider,
  Card,
  Box,
  Typography,

} from "@mui/material";
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
              justifyContent: "space-between",
              width: 280,
              borderRadius: 3,
              color: "text.primary",
              px: 4,
              py: 2,
              m: 2,
            }}
          >
            <Box width={"100%"}>
              <Typography variant="h6" color="grey" align="center">
                {`${location.name.toUpperCase()}`}
              </Typography>
              <Divider />

              <Typography
                pt={2}
                pb={0}
              >{`${location.streetAddress}`}</Typography>

              <Typography pb={2}>
                {`${location.suburb}, ${location.state}`}
              </Typography>

              <Typography
                fontStyle={"italic"}
                pb={2}
              >{`"${location.description}"`}</Typography>

              <Typography pb={4}>{`Phone: ${location.phone}`}</Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Divider width={"100%"} />
              <OpenUpdateModalButton title={"Edit Location"}>
                <LocationFormWrapper
                  location={location}
                  utilsData={utilsData}
                />
              </OpenUpdateModalButton>
            </Box>
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
