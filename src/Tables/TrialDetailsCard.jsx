import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OpenUpdateModalButton from "../Buttons/OpenUpdateModalButton";
import TrialLessonWrapper from "../TrialLessonForm/TrialLessonWrapper";
import { nullDate } from "../assets/dateHelpers";

const TrialDetailsCard = ({ student, children }) => {
  const noTrialDate = nullDate(student.trialLesson.date);
  return (
    <Box
      sx={{
        borderLeft: "1px solid #DDD",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "30%",
      }}
    >
      <Box
        sx={{
          py: 2,
          mr: 3,
          flex: 2,
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
        {!student.bookedTrial ? (
          <Box sx={{ mt: '60%' }}>
            <OpenUpdateModalButton title={"Book Trial"}>
              <TrialLessonWrapper student={student} />
            </OpenUpdateModalButton>
          </Box>
        ) : (
          <>
            <Typography>
              <strong> Day: </strong>
              {noTrialDate ? "" : student.trialDay}
            </Typography>
            <Typography>
              <strong> Date: </strong>
              {noTrialDate ? "" : student.trialDate}
            </Typography>
            <Typography>
              <strong> Time: </strong>
              {student.trialTime}
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
          </>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          // my: 4,
        }}
      >
        {student.bookedTrial ? children : null}
      </Box>
    </Box>
  );
};

export default TrialDetailsCard;
