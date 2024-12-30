import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OpenUpdateModalButton from '../Buttons/OpenUpdateModalButton'
import TrialLessonWrapper from '../TrialLessonForm/TrialLessonWrapper'

const TrialDetailsCard = ({student, children}) => {
  return (
    <Box
    sx={{
        borderLeft: "1px solid #DDD",

      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: '30%'
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
          { !student.bookedTrial ? (		
            < Box sx={{mt:12}}>
          <OpenUpdateModalButton student={student} title={"Book Trial"}>
						<TrialLessonWrapper student={student} />
					</OpenUpdateModalButton>
          </ Box > 
       ) : ( <><Typography>
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
