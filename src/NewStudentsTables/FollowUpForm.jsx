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
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const FollowUpForm = ({ lead }) => {
  const { user } = useContext(UserContext);

  const [date, setDate] = React.useState(calculateNextContact(lead));
  const blankFormData = {
    nextContactDate: date,
    admin: user.initials,
    method: { chat: false, voicemail: false, email: false, call: false },
    notes: "",
  };
  const secondContact = !lead.bookedTrial && lead.followUp.length == 1;

  const [formData, setFormData] = React.useState(blankFormData);

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
    setFormData(blankFormData);
  };

  return (
    <TableRow>
      <TableCell>
        <TextField
          variant="standard"
          sx={{ width: "90%" }}
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
          color="primary"
          sx={{ fontSize: ".9rem", fontStyle: "italic" }}
        >
          {secondContact ? "Email Only" : ""}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Tooltip title="Call" placement="top">
          <Checkbox
            disabled={secondContact}
            size="large"
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
            name="call"
            onChange={handleCheckboxChange}
            checked={!!formData.method.call}
          />
        </Tooltip>
      </TableCell>
      <TableCell align="center">
        <Tooltip title="Chat" placement="top">
          <Checkbox
            disabled={secondContact}
            size="large"
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
            name="chat"
            onChange={handleCheckboxChange}
            checked={!!formData.method.chat}
          />
        </Tooltip>
      </TableCell>
      <TableCell align="center">
        <Tooltip title="Voicemail" placement="top">
          <Checkbox
            disabled={secondContact}
            size="large"
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
            name="voicemail"
            onChange={handleCheckboxChange}
            checked={!!formData.method.voicemail}
          />
        </Tooltip>
      </TableCell>
      <TableCell align="center">
        <Tooltip title="Email" placement="top">
          <Checkbox
            size="large"
            color="success"
            icon={<PanoramaFishEyeIcon />}
            checkedIcon={<TaskAltIcon />}
            name="email"
            onChange={handleCheckboxChange}
            checked={!!formData.method.email}
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
            title: "Submit",
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default FollowUpForm;
