import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import OpenUpdateModalButton from "../Buttons/OpenUpdateModalButton";
import TrialLessonWrapper from "../TrialLessonForm/TrialLessonWrapper";
import { nullDate } from "../assets/dateHelpers";
import ToggleTrialPaidButton from "../TrialLessonForm/ToggleTrialPaidButton";

const TrialDetailsCard = ({ student, children }) => {
  const noTrialDate = nullDate(student.trialLesson.date);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "flex-start",
        width: "32%",
      }}
    >
      <Box
        sx={{ p: 2, flex: 2, bgcolor: !student.bookedTrial ? "cadetblue" : 0 }}
      >
        {student.bookedTrial && (
          <>
            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              component="div"
              // align="center"
            >
              <strong> Trial Lesson </strong>
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </>
        )}

        {!student.bookedTrial ? (
          // <Box sx={{ height: '100%', display: "flex", justifyContent: "center", alignItems: 'center' }}>
          <OpenUpdateModalButton title={"Book Trial"}>
            <TrialLessonWrapper student={student} />
          </OpenUpdateModalButton>
        ) : (
          // </Box>
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
            <Box
              sx={{
                mt: 3,
                mb: -2,
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <ToggleTrialPaidButton student={student} />
            </Box>
          </>
        )}
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        {student.bookedTrial ? children : null}
      </Box>
    </Card>
  );
};

export default TrialDetailsCard;
