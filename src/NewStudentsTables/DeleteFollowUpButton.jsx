import React from "react";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";
import CloseIcon from '@mui/icons-material/Close';

const DeleteFollowUpButton = ({ lead, id }) => {
  const dataPayload = lead.bookedTrial
    ? {
        trialLesson: {
          followUp: lead.trialLesson.followUp.filter(
            (contact) => contact._id !== id
          ),
        },
      }
    : {
        followUp: lead.followUp.filter((contact) => contact._id !== id),
      };

  return (
      <SubmitUpdateButton
        submitProps={{
          color: "error",
          updatedData: dataPayload,
          path: `leads/updatefollowup/${lead._id}`,
          query: "leads",
          variant: "text",
          type: "patch",
          //   successCb: handleSubmit,
          title: <CloseIcon />,
        }}
      />
  );
};

export default DeleteFollowUpButton;
