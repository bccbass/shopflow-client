/** @format */

import React from "react";
import {
  Box,
  Typography,
  TextField,
  FormGroup,
  Checkbox,
  Tooltip,
} from "@mui/material";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";
import { calculateNextContact } from "../assets/dateHelpers";

const FollowUpForm = ({ lead }) => {
  const blankFormData = {
    admin: "",
    method: { chat: false, voicemail: false, email: false, text: false },
    notes: "",
  };
  const [formData, setFormData] = React.useState(blankFormData);
  const [date, setDate] = React.useState(calculateNextContact(lead));

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      method: { ...formData.method, [e.target.name]: e.target.checked },
    });
  };
  const dataPayload = () => {
    return lead.bookedTrial
      ? {
          nextContactDate: date,
          trialLesson: { followUp: [...lead.trialLesson.followUp, formData] },
        }
      : {
          followUp: [...lead.followUp, formData],
          nextContactDate: date,
        };
  };
  const constructedPayload = dataPayload();

  const handleSubmit = (e) => {
    setFormData(blankFormData), setDate(calculateNextContact(lead));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <TextField
          variant="standard"
          size="normal"
          sx={{ width: "16%", minWidth: "8rem", mt: 1.67, pr: 5, ml: 1 }}
          helperText="Next Contact Date"
          name="nextContactDate"
          id="nextContactDate"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <TextField
          size="small"
          // minWidth: "1rem",
          sx={{ width: "6%", minWidth: "3rem" }}
          id="admin"
          label="Admin"
          multiline
          name="admin"
          value={formData.admin}
          onChange={handleChange}
          variant="standard"
          onSubmit={handleSubmit}
        />
        <Box
          sx={{
            mt: 1,
            width: "31%",
            minWidth: "18rem",
            display: "flex",
            justifyContent: "space-between",
            ml: 2
          }}
        >
          <Tooltip title="Chat" placement="top">
            <Checkbox
              name="chat"
              onChange={handleCheckboxChange}
              checked={!!formData.method.chat}
            />
          </Tooltip>
          <Tooltip title="Voicemail" placement="top">
            <Checkbox
              name="voicemail"
              onChange={handleCheckboxChange}
              checked={!!formData.method.voicemail}
            />
          </Tooltip>

          <Tooltip title="Email" placement="top">
            <Checkbox
              name="email"
              onChange={handleCheckboxChange}
              checked={!!formData.method.email}
            />
          </Tooltip>

          <Tooltip title="Text" placement="top">
            <Checkbox
              name="text"
              onChange={handleCheckboxChange}
              checked={!!formData.method.text}
            />
          </Tooltip>
        </Box>
        <TextField
          size="small"
          sx={{ width: "29%" }}
          id="notes"
          label="Notes"
          multiline
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          variant="standard"
        />

        <SubmitUpdateButton
          submitProps={{
            updatedData: constructedPayload,
            path: `leads/updatefollowup/${lead._id}`,
            query: "Leads",
            type: "patch",
            successCb: handleSubmit,
            title: "add",
          }}
        />
      </FormGroup>
    </Box>
  );
};

export default FollowUpForm;
