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
import FollowUpForm from "../Tables/FollowUpForm";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";

const RowCollapsibleContent = ({ lead }) => {
	return (
		<Box sx={{ p: 1, pb: 4, backgroundColor: "#FAFAFA", width: "100%" }}>
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
					<OpenUpdateModalButton  title={"Edit Student"}>
						<EditStudentFormWrapper student={lead}/>
					</OpenUpdateModalButton>
				</EnquiryDetailsCard>

				<TrialDetailsCard student={lead}>
					<OpenUpdateModalButton title={"Edit Trial"}>
						<TrialLessonWrapper student={lead} />
					</OpenUpdateModalButton>
				</TrialDetailsCard>

				<EnquiryNotesCard lead={lead}>
					<OpenUpdateModalButton  title={"Edit Notes"}>
						<EditNotesWrapper student={lead}/>
					</OpenUpdateModalButton>
				</EnquiryNotesCard>
			</Container>

			{ !lead.enrolled &&
				<>
					<FollowUpTable
						followUpEvents={
							lead.bookedTrial ? lead.trialLesson.followUp : lead.followUp
						}
					/>
					<FollowUpForm lead={lead} />
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "flex-end",
							px: 4,
							mt: 4,
						}}
					></Box>{" "}
				</>
			}

			<Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: lead.enrolled ? 2 : 0 }}>
				<SubmitUpdateButton
					submitProps={{
						updatedData: { enrolled: !lead.enrolled },
						path: "leads/updatetrial/" + lead._id,
						type: "patch",
						title: `${lead.enrolled ? "Unenroll" : "Enroll"} ${
							lead.studentFullName
						}`,
						variant: "outlined",
					}}
				/>
			</Box>
		</Box>
	);
};

export default RowCollapsibleContent;
