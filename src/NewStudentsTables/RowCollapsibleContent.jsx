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
import AdminFormTasks from "./AdminFormTasks";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";

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
        backgroundColor: "teal",
        width: "100%",
      }}
    >
      <Divider sx={{ ...dividerStyles, pt: 5 }}>
        <Typography
          sx={titleStyles}
          align="center"
          variant="h5"
          fontWeight={"bold"}
        >
          Student Details
        </Typography>
      </Divider>
      {/* Main Card Content in this container */}
      <Container
        sx={{
          display: "flex",
          // pt: 2,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
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
          {/* <OpenUpdateModalButton>
            <EditNotesWrapper student={lead} />
          </OpenUpdateModalButton> */}
        </EnquiryNotesCard>
      </Container>

      {/* ADMIN CHECKLIST SECTION */}
      {(lead.bookedTrial || lead.enrolled) && (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
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
        </Container>
      )}

      {/* FOLLOWUP FORM SECTION */}
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
          <Box
            sx={{
              pt: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {/* ENROLL STUDENT BUTTON */}
            <Box sx={{ p: 1, bgcolor: "cadetblue", borderRadius: "5px" }}>
              <SubmitUpdateButton
                submitProps={{
                  redirect: `/newstudents?view=enrolled`,
                  updatedData: { enrolled: !lead.enrolled },
                  path: "leads/updatetrial/" + lead._id,
                  variant: "contained",
                  type: "patch",
                  title: `${lead.enrolled ? "Unenroll" : "Enroll"} ${
                    lead.studentFullName
                  }`,
                }}
              />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default RowCollapsibleContent;
