/** @format */

import React from "react";
import { useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  FormGroup,
  Checkbox,
  Tooltip,
  TableRow,
  TableCell,
} from "@mui/material";
import SubmitUpdateButton from "../Buttons/SubmitUpdateButton";
import { calculateNextContact } from "../assets/dateHelpers";
import { UserContext } from "../UserContext";

const FollowUpForm = ({ lead }) => {
  const { user } = useContext(UserContext);

  const blankFormData = {
    admin: user.initials,
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
    <TableRow>
      <TableCell>
        <TextField
          variant="standard"
          sx={{width: '90%'}}
          size="normal"
          helperText="Next Contact Date"
          name="nextContactDate"
          id="nextContactDate"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </TableCell>
      <TableCell>
        <Typography
          sx={{ mt: 1.67, mx: { xs: 2.5, lg: 1 } }}
        >
          {user.initials}
        </Typography>
      </TableCell>
      <TableCell align='center'>
        <Tooltip title="Chat" placement="top">
          <Checkbox
            name="chat"
            onChange={handleCheckboxChange}
            checked={!!formData.method.chat}
          />
        </Tooltip>
      </TableCell>
      <TableCell align='center'>
        <Tooltip title="Voicemail" placement="top">
          <Checkbox
            name="voicemail"
            onChange={handleCheckboxChange}
            checked={!!formData.method.voicemail}
          />
        </Tooltip>
      </TableCell>
      <TableCell align='center'>
        <Tooltip title="Email" placement="top">
          <Checkbox
            name="email"
            onChange={handleCheckboxChange}
            checked={!!formData.method.email}
          />
        </Tooltip>
      </TableCell>
      <TableCell align='center'>
        <Tooltip title="Text" placement="top">
          <Checkbox
            name="text"
            onChange={handleCheckboxChange}
            checked={!!formData.method.text}
          />
        </Tooltip>
      </TableCell>
      <TableCell>
        <TextField
          size="small"
          sx={{ width: "100%" }}
          id="notes"
          label="Notes"
          multiline
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          variant="standard"
        />
      </TableCell>
      <TableCell sx={{}}>
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
      </TableCell>
    </TableRow>
  );
};

export default FollowUpForm;
