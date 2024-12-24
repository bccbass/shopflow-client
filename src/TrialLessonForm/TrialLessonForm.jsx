import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
// These should be stored on the DB and queried
import {
  instruments,
  groupClasses,
  teachers,
  locations,
} from "../assets/dbPlaceholderData.js";

const hoursArray = Array.from({ length: 12 }, (_, i) => i + 1);
const minutesArray = ["00", "15", "30", "45"];
const ampmArray = ["am", "pm"];

const TrialLessonForm = ({ setStudentData, studentData }) => {
  const [time, setTime] = useState({ hour: 12, min: "00", twelveHr: "am" });
  console.log(studentData.trialLesson);

  useEffect(() => {
    // take in time from student data and reformat to match time state format
    const initialTime = studentData.trialLesson.time;
    if (initialTime?.length > 0) {
      const timeArr = initialTime.split(":");
      setTime({
        hour: timeArr[0],
        min: timeArr[1]?.slice(0, 2),
        twelveHr: timeArr[1]?.slice(2),
      });
    }
  }, []);

  const handleTrialLessonChange = (e) =>
    setStudentData({
      ...studentData,
      trialLesson: {
        ...studentData.trialLesson,
        [e.target.name]: e.target.value,
      },
    });
  const handleTimeChange = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value });
    const readableTime = `${time.hour}:${time.min}${time.twelveHr}`;
    setStudentData({ ...studentData, trialLesson: { time: readableTime } });
  };

  useEffect(() => {
    const readableTime = `${time.hour}:${time.min}${time.twelveHr}`;
    setStudentData({
      ...studentData,
      trialLesson: { ...studentData.trialLesson, time: readableTime },
    });
  }, [time]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 1,
        width: "100%",
        mt: 2,
        px: 2,
        py: 4,
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-around",
        }}
      >
        <TextField
          sx={{ width: "16.5ch" }}
          size="small"
          id="outlined-helperText"
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
          value={time.hour}
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
          value={time.min}
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
          id="outlined-helperText"
          helperText="12hr"
          // label="--"
          select
          name="twelveHr"
          value={time.twelveHr}
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
          justifyContent: "space-around",
          // width: "100%",
        }}
      >
        <TextField
          sx={{ width: "15ch" }}
          size="small"
          id="outlined-helperText"
          label="Instrument"
          select
          name="instrument"
          value={studentData.trialLesson.instrument}
          onChange={handleTrialLessonChange}
        >
          {instruments.map((instrument) => (
            <MenuItem value={instrument} key={instrument}>
              {instrument}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          size="small"
          sx={{ width: "16ch" }}
          select
          id="outlined-helperText"
          label="Group Class"
          name="groupClass"
          value={studentData.trialLesson.groupClass}
          onChange={handleTrialLessonChange}
        >
          {groupClasses.map((groupClass) => (
            <MenuItem value={groupClass} key={groupClass}>
              {groupClass}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <TextField
          size="small"
          sx={{ width: "15ch" }}
          select
          id="outlined-helperText"
          label="Teacher"
          name="teacher"
          value={studentData.trialLesson.teacher}
          onChange={handleTrialLessonChange}
        >
          {teachers.map((teacher) => (
            <MenuItem value={teacher} key={teacher}>
              {teacher}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          size="small"
          sx={{ width: "15ch" }}
          select
          id="outlined-helperText"
          label="Location"
          name="location"
          value={studentData.trialLesson.location}
          onChange={handleTrialLessonChange}
        >
          {locations.map((location) => (
            <MenuItem value={location} key={location}>
              {location}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default TrialLessonForm;
