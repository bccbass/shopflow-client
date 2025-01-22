import React from "react";
import ToggleTaskStatusButton from "./ToggleTaskStatusButton";

const AdminFormTasks = ({ lead }) => {
  return lead.enrolled ? (
    <>
      <ToggleTaskStatusButton
        id={lead._id}
        taskName="timetable"
        description={"Update Timetables (MMS & SS)"}
        taskStatus={lead.enrolledAdmin.timetable}
        updateKey={"enrolledAdmin"}
      />
      <ToggleTaskStatusButton
        id={lead._id}
        taskName="status"
        taskStatus={lead.enrolledAdmin.status}
        description={'Make Student "Active" in MMS'}
        updateKey={"enrolledAdmin"}
      />

      <ToggleTaskStatusButton
        id={lead._id}
        taskName="createInvoice"
        taskStatus={lead.enrolledAdmin.createInvoice}
        description={"Create Term Invoice in MMS"}
        updateKey={"enrolledAdmin"}
      />
      <ToggleTaskStatusButton
        id={lead._id}
        taskName="sentInvoice"
        taskStatus={lead.enrolledAdmin.sentInvoice}
        description={"Email Completed Invoice from MMS"}
        updateKey={"enrolledAdmin"}
      />
    </>
  ) : (
    <>
      <ToggleTaskStatusButton
        id={lead._id}
        taskName="addToMms"
        taskStatus={lead.trialAdmin.addToMms}
        description={"Create new student in My Music Staff"}
        updateKey={"trialAdmin"}
      />
      <ToggleTaskStatusButton
        id={lead._id}
        taskName="timetable"
        description={"Add Lesson to MMS Calendar and SS Timetable"}
        taskStatus={lead.trialAdmin.timetable}
        updateKey={"trialAdmin"}
      />

      <ToggleTaskStatusButton
        id={lead._id}
        taskName="createInvoice"
        taskStatus={lead.trialAdmin.createInvoice}
        description={"Add Trial Fee to MMS Family Account"}
        updateKey={"trialAdmin"}
      />
      <ToggleTaskStatusButton
        id={lead._id}
        taskName="sentConfirmation"
        taskStatus={lead.trialAdmin.sentConfirmation}
        description={"Send Trial Confirmation Email"}
        updateKey={"trialAdmin"}
      />
    </>
  );
};

export default AdminFormTasks;
