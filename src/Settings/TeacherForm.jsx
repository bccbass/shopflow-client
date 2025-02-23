/** @format */

import React, { useState, useEffect } from "react";

import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const TeacherForm = ({
  instruments,
  setTeacherData,
  teacherData,
  edit = false,
}) => {
  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddInstrument = (instrument) => {
    setTeacherData({
      ...teacherData,
      instruments: [...teacherData.instruments, instrument],
    });
  }

  const handleRemoveInstrument = (instrument) => {
    setTeacherData({
      ...teacherData,
      instruments: teacherData.instruments.filter((el) => el !== instrument),
    });
  }
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
          sx={{ width: "45%" }}
          size="small"
          id="firstName"
          label="First Name"
          name="firstName"
          value={teacherData?.firstName}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "45%" }}
          size="small"
          id="lastName"
          label="Last Name"
          name="lastName"
          value={teacherData?.lastName}
          onChange={handleChange}
        />
      </Box>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mb: 3,

          justifyContent: "space-between",
        }}
      >
        <TextField
          sx={{ width: "45%" }}
          size="small"
          id="email"
          label="Email"
          name="email"
          value={teacherData?.email}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "45%" }}
          size="small"
          id="phone"
          label="Phone Number"
          name="phone"
          value={teacherData?.phone}
          onChange={handleChange}
        />
        <FormControlLabel
          sx={{ width: "22%", mr: 1, color: "grey" }}
          labelPlacement="start"
          control={
            <Checkbox
              checked={teacherData?.active}
              name="active"
              icon={<PanoramaFishEyeIcon />}
              checkedIcon={<TaskAltIcon />}
              size={"large"}
              label={"Active: "}
              onChange={(e) =>
                setTeacherData({
                  ...teacherData,
                  [e.target.name]: e.target.checked,
                })
              }
            />
          }
          label="Active: "
        />
        <Box
          sx={{
            // mb: 1,
            mt: 1,
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            gap={1}
            flexWrap={"wrap"}
            // borderRadius={3}
            p={2}
            mt={2}
            // border={1}
            sx={{ borderColor: "text.secondary" }}
          >
            {instruments.map((instrument) =>
              !teacherData.instruments.includes(instrument) ? (
                <Chip
                  size={"small"}
                  color="secondary"
                  key={instrument}
                  label={instrument}
                  // variant="outlined"
                  onClick={() => handleAddInstrument(instrument)}
                />
              ) : null
            )}
          </Stack>
        </Box>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6" color="grey">
            <strong>Instruments Taught: </strong>
          </Typography>
          {teacherData.instruments.length > 0 && (
            <Stack
              direction="row"
              spacing={1}
              gap={1}
              flexWrap={"wrap"}
              borderRadius={3}
              p={2}
              border={1}
              sx={{ borderColor: "text.secondary" }}
            >
              {teacherData.instruments?.map((instrument) => (
                <Chip
                  size={"large"}
                  color="secondary"
                  key={instrument}
                  label={instrument}
                  variant="outlined"
                  // onClick={() => null}
                  onDelete={() => handleRemoveInstrument(instrument)}
                />
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default TeacherForm;
