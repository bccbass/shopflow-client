import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TrialDetailsCard = ({student, children}) => {
  return (
    <Box
      sx={{
        py: 2,
        px: 1,
        flex: 2,
        borderLeft: "1px solid #DDD",
        // minHeight: "250px",
        pl: 4,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        color="textSecondary"
        component="div"
      >
        <strong> Trial Lesson </strong>
      </Typography>
      <Typography>
        <strong> date: </strong>
        {new Date(student?.trialLesson?.date).toLocaleString("en-AU", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })}
      </Typography>
      <Typography>
        <strong> Time: </strong>
        {`${student?.trialLesson?.time?.hour}:${student?.trialLesson?.time?.min}${student?.trialLesson?.time?.twelveHr}`}
      </Typography>
      <Typography>
        <strong> Location: </strong>
        {student?.trialLesson?.location}
      </Typography>
      <Typography>
        <strong> Instrument: </strong>
        {student?.trialLesson?.instrument}
      </Typography>
      <Typography>
        <strong> Teacher: </strong>
        {student?.trialLesson?.teacher}
      </Typography>
      {student.trialLesson.groupClass && (
        <Typography>
          <strong>Group Class: </strong>
          {student?.trialLesson?.groupClass}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          my: 4,
          ml: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default TrialDetailsCard;
