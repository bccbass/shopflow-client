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

const RowCollapsibleContent = ({ lead }) => {
  return (
    <Box sx={{ m: 2 }}>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", my: 4, width: '100%' }}
      >
        {/* Main Content in this container */}
        <EnquiryDetailsCard lead={lead}>
          <OpenUpdateModalButton student={lead} title={"Edit Student"}>
            < EditStudentFormWrapper />
          </OpenUpdateModalButton>
        </EnquiryDetailsCard>
        {lead.bookedTrial && (
          <TrialDetailsCard student={lead}>
            <OpenUpdateModalButton student={lead} title={"Edit Trial"}>
              <TrialLessonWrapper student={lead} />
            </OpenUpdateModalButton>
          </TrialDetailsCard>
        )}
        <EnquiryNotesCard lead={lead} >
             <OpenUpdateModalButton student={lead} title={"Update Notes"}>
            < EditNotesWrapper />
          </OpenUpdateModalButton>
           </EnquiryNotesCard>
      </Container>

      <FollowUpTable
        followUpEvents={
          lead.bookedTrial ? lead.trialLesson.followUp : lead.followUp
        }
      />
      {!lead.bookedTrial && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <OpenUpdateModalButton student={lead} title={"Book Trial"}>
            <TrialLessonWrapper student={lead} />
          </OpenUpdateModalButton>
        </Box>
      )}
    </Box>
  );
};

export default RowCollapsibleContent;