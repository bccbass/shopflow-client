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
import ArchiveButton from "../Buttons/ArchiveButton";

const RowCollapsibleContent = ({ lead }) => {
	return (
		<Box sx={{ m: 2, mb: 4 }}>
			<Container
				sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
			>
				{/* Main Content in this container */}
				<EnquiryDetailsCard lead={lead}>
					<OpenUpdateModalButton student={lead} title={"Edit Student"}>
						<EditStudentFormWrapper />
					</OpenUpdateModalButton>
				</EnquiryDetailsCard>
				{lead.bookedTrial && (
					<TrialDetailsCard student={lead}>
						<OpenUpdateModalButton student={lead} title={"Edit Trial"}>
							<TrialLessonWrapper student={lead} />
						</OpenUpdateModalButton>
					</TrialDetailsCard>
				)}
				<EnquiryNotesCard lead={lead}>
					<OpenUpdateModalButton student={lead} title={"Update Notes"}>
						<EditNotesWrapper />
					</OpenUpdateModalButton>
				</EnquiryNotesCard>
			</Container>

			<FollowUpTable
				followUpEvents={
					lead.bookedTrial ? lead.trialLesson.followUp : lead.followUp
				}
			/>
			<FollowUpForm lead={lead} />

			{!lead.bookedTrial && (
				<Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
					<OpenUpdateModalButton student={lead} title={"Book Trial"}>
						<TrialLessonWrapper student={lead} />
					</OpenUpdateModalButton>
				</Box>
			)}
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-end",
					px: 4,
					mt: 4
				}}
			>
				<ArchiveButton id={lead._id}  />
			</Box>
		</Box>
	);
};

export default RowCollapsibleContent;
