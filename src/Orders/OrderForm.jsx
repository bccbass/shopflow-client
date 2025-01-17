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
import { UserContext } from '../UserContext'

const status = ["In Progress", "Awaiting Response", "Completed"];

const OrderForm = ({ setOrderData, orderData }) => {
  const { user } = useContext(UserContext)
  const handleChange = (e) =>
    setOrderData({
      ...orderData,
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
          value={orderData?.firstName}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="lastName"
          label="Last Name"
          name="lastName"
          value={orderData?.lastName}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="phone"
          label="Phone"
          name="phone"
          value={orderData?.phone}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="email"
          label="Email"
          name="email"
          value={orderData?.email}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="instrument"
          label="Instrument"
          name="instrument"
          value={orderData?.instrument}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "49%" }}
          size="small"
          id="jobDescription"
          label="Job Description"
          name="jobDescription"
          value={orderData?.jobDescription}
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
          value={orderData?.due}
          onChange={handleChange}
        />
        {/* <TextField
          sx={{ width: "28%" }}
          size="small"
          id="createdBy"
          label="Created By"
          name="createdBy"
          value={orderData?.createdBy}
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
          value={orderData?.status}
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
          value={orderData?.amount}
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
              checked={orderData?.paid}
              onChange={(e) =>
                setOrderData({
                  ...orderData,
                  [e.target.name]: e.target.checked,
                })
              }
            />
          }
          label="Paid:"
        />
        {/* <Checkbox name='paid' checked={orderData?.paid} onChange={e => setOrderData({...orderData, [e.target.name]: e.target.checked}) } /> */}
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
          value={orderData?.notes}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default OrderForm;
