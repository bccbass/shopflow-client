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
import DownloadStudentCsvButton from "../Buttons/DownloadStudentCsvButton";

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
				{lead.bookedTrial ? (
					<TrialDetailsCard student={lead}>
						<OpenUpdateModalButton student={lead} title={"Edit Trial"}>
							<TrialLessonWrapper student={lead} />
						</OpenUpdateModalButton>
					</TrialDetailsCard>
				) : (	
				    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '30%',
        borderLeft: "1px solid #DDD",
      }}
    >
				<OpenUpdateModalButton student={lead} title={"Book Trial"}>
						<TrialLessonWrapper student={lead} />
					</OpenUpdateModalButton> </ Box>)}
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
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-end",
					px: 4,
					mt: 4
				}}
			>	
				< DownloadStudentCsvButton data={lead} />
				<ArchiveButton id={lead._id}  />
			</Box>
		</Box>
	);
};

export default RowCollapsibleContent;
