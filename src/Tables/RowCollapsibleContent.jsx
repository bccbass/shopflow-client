/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import FollowUpTable from "./FollowUpTable";
import OpenUpdateModalButton from "../Buttons/OpenUpdateModalButton";
import EnquiryDetailsCard from "./EnquiryDetailsCard";
import TrialDetailsCard from "./TrialDetailsCard";
import EnquiryNotesCard from "./EnquiryNotesCard";
import TrialLessonWrapper from "../TrialLessonForm/TrialLessonWrapper";
import EditStudentFormWrapper from "../AddStudent/EditStudentFormWrapper";
import EditNotesWrapper from "../AddStudent/EditNotesWrapper";
import AdminChecklistForm from "./AdminChecklistForm";
import AdminFormTasks from "./AdminFormTasks";

const RowCollapsibleContent = ({ lead }) => {
  const dividerStyles = {
    px: 3,
    pt: 8,
    pb: 4,
    "&::before, &::after": {
      borderColor: "white",
    },
  };

  const titleStyles = {
    bgcolor: "white",
    borderRadius: "10px",
    color: "teal",
    px: 3,
  };
  return (
    <Box
      sx={{
        pb: 4,
        // backgroundColor: "#FAFAFA",
        backgroundColor: "teal",
        width: "100%",
        // py:
      }}
    >
      <Divider sx={{ ...dividerStyles, pt: 5 }}>
        <Typography
          sx={titleStyles}
          color="white"
          align="center"
          variant="h5"
          fontWeight={"bold"}
        >
          Student Details
        </Typography>
      </Divider>
      <Container
        sx={{
          display: "flex",
          // pt: 2,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Main Content in this container */}
        <EnquiryDetailsCard lead={lead}>
          <OpenUpdateModalButton>
            <EditStudentFormWrapper student={lead} />
          </OpenUpdateModalButton>
        </EnquiryDetailsCard>

        <TrialDetailsCard student={lead}>
          <OpenUpdateModalButton>
            <TrialLessonWrapper student={lead} />
          </OpenUpdateModalButton>
        </TrialDetailsCard>

        <EnquiryNotesCard lead={lead}>
          <OpenUpdateModalButton>
            <EditNotesWrapper student={lead} />
          </OpenUpdateModalButton>
        </EnquiryNotesCard>
      </Container>
      {(lead.bookedTrial || lead.enrolled) && (
        <Box sx={{ display: "flex", flexDirection:'column', justifyContent: "center", width: '100%' }}>
          <Divider sx={dividerStyles}>
            <Typography
              sx={titleStyles}
              align="center"
              variant="h5"
              fontWeight={"bold"}
            >
              {`${lead.enrolled ? "Enrollment" : "Trial Lesson"} Checklist`}
            </Typography>
          </Divider>
            <AdminFormTasks lead={lead} />
        </Box>
      )}
      {!lead.enrolled && (
        <>
          <Divider sx={dividerStyles}>
            <Typography
              sx={titleStyles}
              color="white"
              align="center"
              variant="h5"
              fontWeight={"bold"}
            >
              Follow Up History
            </Typography>
          </Divider>
          <FollowUpTable
            lead={lead}
            followUpEvents={
              lead.bookedTrial ? lead.trialLesson.followUp : lead.followUp
            }
          />
        </>
      )}
    </Box>
  );
};

export default RowCollapsibleContent;
