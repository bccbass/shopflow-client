import React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useState } from "react";
import LocationForm from "./LocationForm";
import FormTitle from "../FormTitle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putResource } from "../assets/apiHelpers";

const defaultLocationForm = {
  name: "",
  streetAddress: "",
  suburb: "",
  state: "",
  phone: "",
  description: "",
};
const LocationFormWrapper = ({ location = false, setOpen, utilsData }) => {
  const [locationData, setLocationData] = useState(
    !location ? defaultLocationForm : location
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: putResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["utils"]);
      setOpen(false);
    },
  });
  const submitUpdate = (updatedArr) => {
    const updatedLocations = location
      ? utilsData.locations.map((location) =>
          location._id === locationData._id ? locationData : location
        )
      : [...utilsData.locations, locationData];
    mutation.mutate({
      path: `utils/${utilsData._id}`,
      body: { ...utilsData, locations: updatedLocations },
    });
  };

  const handleDelete = () => {
    const updatedLocations = utilsData.locations.filter((location) =>
      location._id !== locationData._id ? location : null
    );
    mutation.mutate({
      path: `utils/${utilsData._id}`,
      body: { ...utilsData, locations: updatedLocations },
    });
  };
  return (
    <DialogContent
      sx={{
        width: "29rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <FormTitle>{`${location ? "Edit" : "Add"} Location`}</FormTitle>
      <LocationForm
        locationData={locationData}
        setLocationData={setLocationData}
      />
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={submitUpdate}
          fullWidth
          variant="contained"
        >
          {location ? "Update Location" : "Add Location"}
        </Button>

        <Button
          fullWidth
          variant="outlined"
          color="text.secondary"
          sx={{ my: 2, mr: 0.5 }}
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        {location && (
          <Button
            onClick={handleDelete}
            color="error"
            fullWidth
            variant="contained"
            sx={{ mr: 0.5 }}
          >
            Delete Location
          </Button>
        )}
      </DialogActions>
    </DialogContent>
  );
};

export default LocationFormWrapper;
