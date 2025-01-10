/** @format */

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getResource } from "../assets/apiHelpers.js";
import { Box, TextField, MenuItem } from "@mui/material";

const hoursArray = Array.from({ length: 12 }, (_, i) => i + 1);
const minutesArray = ["00", "15", "30", "45"];
const ampmArray = ["am", "pm"];

const TrialLessonForm = ({ setStudentData, studentData }) => {
  const utilsQuery = useQuery({
    queryKey: ["utils"],
    queryFn: () => getResource("utils?resource=info"),
  });

  const teachersQuery = useQuery({
    queryKey: ["teachers"],
    queryFn: () => getResource("teachers"),
  });

  const loaded = !utilsQuery.isError && !utilsQuery.isLoading;

  const handleTrialLessonChange = (e) =>
    setStudentData({
      ...studentData,
      trialLesson: {
        ...studentData.trialLesson,
        [e.target.name]: e.target.value,
      },
    });
  const handleTimeChange = (e) => {
    setStudentData({
      ...studentData,
      trialLesson: {
        ...studentData.trialLesson,
        time: {
          ...studentData.trialLesson.time,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        // border: "1px solid grey",
        flexDirection: "column",
        mb: 1,
        width: "100%",
        mt: 2,
        py: 4,
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
        }}
      >
        <TextField
          sx={{ width: "16.5ch" }}
          size="small"
          id="date"
          type="date"
          helperText="Lesson Date"
          name="date"
          value={studentData?.trialLesson?.date}
          onChange={handleTrialLessonChange}
        />

        <TextField
          sx={{ width: "7.5ch" }}
          size="small"
          id="hour"
          helperText="hour"
          // label="--"
          select
          name="hour"
          value={studentData.trialLesson.time.hour}
          onChange={handleTimeChange}
        >
          
          {hoursArray.map((hour) => (
            <MenuItem value={hour} key={hour}>
              {hour}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ width: "7.5ch" }}
          size="small"
          id="min"
          helperText="min"
          // label="--"
          select
          name="min"
          value={studentData.trialLesson.time.min}
          onChange={handleTimeChange}
        >
          {minutesArray.map((minute) => (
            <MenuItem value={minute} key={minute}>
              {minute}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ width: "8ch" }}
          size="small"
          id="12hr"
          helperText="12hr"
          // label="--"
          select
          name="twelveHr"
          value={studentData.trialLesson.time.twelveHr}
          onChange={handleTimeChange}
        >
          {ampmArray.map((ampm) => (
            <MenuItem value={ampm} key={ampm}>
              {ampm}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box
        sx={{
          my: 2,
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          // width: "100%",
        }}
      >
        <TextField
          sx={{ width: "21ch" }}
          size="small"
          id="instrument"
          label="Instrument"
          select
          disabled={!loaded}
          name="instrument"
          value={studentData.trialLesson.instrument}
          onChange={handleTrialLessonChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {loaded ? (
            utilsQuery.data.instruments.map((instrument) => (
              <MenuItem value={instrument} key={instrument}>
                {instrument}
              </MenuItem>
            ))
          ) : (
            <MenuItem></MenuItem>
          )}
        </TextField>

        <TextField
          size="small"
          sx={{ width: "21ch" }}
          select
          id="groupclass"
          label="Group Class"
          name="groupClass"
          disabled={!loaded}
          value={studentData.trialLesson.groupClass}
          onChange={handleTrialLessonChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {loaded ? (
            utilsQuery.data.groupClasses.map((group) => (
              <MenuItem value={group} key={group}>
                {group}
              </MenuItem>
            ))
          ) : (
            <MenuItem></MenuItem>
          )}
        </TextField>
      </Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          size="small"
          sx={{ width: "21ch" }}
          select
          id="teacher"
          label={"Teacher"}
          name="teacher"
          disabled={teachersQuery.isLoading || teachersQuery.isError}
          value={studentData.trialLesson.teacher}
          onChange={handleTrialLessonChange}
        >
          {!teachersQuery.isLoading && !teachersQuery.isError ? (
            teachersQuery.data.map((teacher) => (
              <MenuItem value={teacher.firstLast} key={teacher._id}>
                {teacher.firstLast}
              </MenuItem>
            ))
          ) : (
            <MenuItem></MenuItem>
          )}
        </TextField>
        <TextField
          size="small"
          sx={{ width: "21ch" }}
          select
          id="location"
          label="Location"
          name="location"
          disabled={!loaded}
          value={studentData.trialLesson.location}
          onChange={handleTrialLessonChange}
        >
          {loaded ? (
            utilsQuery.data.locations.map((location) => (
              <MenuItem value={location.name} key={location._id}>
                {location.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem></MenuItem>
          )}
        </TextField>
      </Box>
    </Box>
  );
};

export default TrialLessonForm;
