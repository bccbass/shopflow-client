/** @format */

import React from "react";
import { useContext } from "react";
import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { UserContext } from "../UserContext";

const status = [
  "In Progress",
  "Awaiting Response",
  "Awaiting Shipment",
  "Awaiting Pick-Up",
  "Completed",
];

const RepairForm = ({ setRepairData, repairData }) => {
  const { user } = useContext(UserContext);
  const handleChange = (e) =>
    setRepairData({
      ...repairData,
      createdBy: user.initials,
      [e.target.name]: e.target.value,
    });
  return (
    <Box
      sx={{
        display: "flex",
        // border: "1px solid grey",
        flexDirection: "column",
        mb: 1,
        width: "100%",
        mt: 2,
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "space-between",
          height: "200px",
          width: "100%",
        }}
      >
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="firstName"
          label="First Name"
          name="firstName"
          value={repairData?.firstName}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="lastName"
          label="Last Name"
          name="lastName"
          value={repairData?.lastName}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="phone"
          label="Phone"
          name="phone"
          value={repairData?.phone}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="email"
          label="Email"
          name="email"
          value={repairData?.email}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="instrument"
          label="Instrument"
          name="instrument"
          value={repairData?.instrument}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="jobDescription"
          label="Job Description"
          name="jobDescription"
          value={repairData?.jobDescription}
          onChange={handleChange}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="due"
          type="date"
          helperText="Date Due"
          name="due"
          value={repairData?.due}
          onChange={handleChange}
        />
        {/* <TextField
          sx={{ width: "28%" }}
          size="small"
          id="createdBy"
          label="Created By"
          name="createdBy"
          value={repairData?.createdBy}
          onChange={handleChange}
        /> */}
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="status"
          helperText="status"
          // label="--"
          select
          name="status"
          value={repairData?.status}
          onChange={handleChange}
        >
          {status.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box
        sx={{
          my: 2,
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="amount"
          label="Amount Due"
          name="amount"
          value={repairData?.amount}
          onChange={handleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />

        <FormControlLabel
          sx={{ mr: 10, color: "grey" }}
          labelPlacement="start"
          control={
            <Checkbox
              name="paid"
              checked={repairData?.paid}
              onChange={(e) =>
                setRepairData({
                  ...repairData,
                  [e.target.name]: e.target.checked,
                })
              }
            />
          }
          label="Paid:"
        />
        {/* <Checkbox name='paid' checked={repairData?.paid} onChange={e => setRepairData({...repairData, [e.target.name]: e.target.checked}) } /> */}
      </Box>
      <Box
        sx={{
          my: 2,
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          multiline
          sx={{ width: "100%" }}
          size="small"
          id="notes"
          label="Notes"
          name="notes"
          value={repairData?.notes}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default RepairForm;
