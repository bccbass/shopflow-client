/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FollowUpTable from "./FollowUpTable";
import OpenUpdateModalButton from "../Buttons/OpenUpdateModalButton";
import EnquiryDetailsCard from "./EnquiryDetailsCard";
import TrialDetailsCard from "./TrialDetailsCard";
import EnquiryNotesCard from "./EnquiryNotesCard";
import TrialLessonWrapper from "../TrialLessonForm/TrialLessonWrapper";
import EditStudentFormWrapper from "../AddStudent/EditStudentFormWrapper";
import EditNotesWrapper from "../AddStudent/EditNotesWrapper";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";
import EnrollmentFollowUpForm from "./EnrollmentFollowUpForm";
import { redirect } from "react-router";

const RowCollapsibleContent = ({ lead }) => {
  return (
    <Box sx={{ pb: 4, 
    // backgroundColor: "#FAFAFA", 
    backgroundColor: "teal", 
    width: "100%" }}>
      <Container
        sx={{
          display: "flex",
          pt: 2,
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

      {lead.enrolled ? (
        <EnrollmentFollowUpForm lead={lead} />
      ) : (
        <>
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
