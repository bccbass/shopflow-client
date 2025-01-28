import React from "react";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";

const DeleteFollowUpButton = ({ lead, id }) => {
  const dataPayload = lead.bookedTrial
    ? {
        nextContactDate: lead.nextContactDate,
        trialLesson: {
          followUp: lead.trialLesson.followUp.filter(
            (contact) => contact._id !== id
          ),
        },
      }
    : {
        nextContactDate: lead.nextContactDate,
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
          title: "X",
        }}
      />
  );
};

export default DeleteFollowUpButton;
