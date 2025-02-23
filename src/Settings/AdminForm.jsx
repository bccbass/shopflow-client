/** @format */

import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const AdminForm = ({
  setAdminData,
  adminData,
  setInvalidData,
  edit = false,
}) => {
  const [verifyPassword, setVerifyPassword] = useState("");
  const [updatePW, setUpdatePW] = useState(false);

  useEffect(() => {
    setInvalidData(
      !adminData?.firstName ||
        !adminData?.lastName ||
        !adminData?.email ||
        adminData?.password?.length < 6 ||
        (updatePW && adminData?.password !== verifyPassword) ||
        (!edit && adminData?.password !== verifyPassword)
    )}, [adminData, verifyPassword, updatePW]);

  const handleChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box mb={5}>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          sx={{ width: "45%" }}
          size="small"
          id="firstName"
          label="First Name"
          name="firstName"
          value={adminData?.firstName}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "45%" }}
          size="small"
          id="lastName"
          label="Last Name"
          name="lastName"
          value={adminData?.lastName}
          onChange={handleChange}
        />
      </Box>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mb: 3,

          justifyContent: "space-between",
        }}
      >
        <TextField
          sx={{ width: "52%" }}
          size="small"
          id="email"
          label="Email"
          name="email"
          value={adminData?.email}
          onChange={handleChange}
        />
        <FormControlLabel
          sx={{ width: "40%", mr: 1, color: "grey" }}
          labelPlacement="start"
          control={
            <Checkbox
              checked={adminData?.fullAccess}
              name="fullAccess"
              icon={<PanoramaFishEyeIcon />}
              checkedIcon={<TaskAltIcon />}
              size={"large"}
              label={"Full Access: "}
              onChange={(e) =>
                setAdminData({
                  ...adminData,
                  [e.target.name]: e.target.checked,
                })
              }
            />
          }
          label="Full Access:"
        />
        <Box
          sx={{
            mb: 3,
            mt: 1,
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {!edit || updatePW ? (
            <>
              <TextField
                sx={{ mr: 1 }}
                // error={passwordError}
                // helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                value={adminData?.password}
                onChange={handleChange}
                required
                label="Password"
                size="small"
                fullWidth
                variant="outlined"
                // color={passwordError ? "error" : "primary"}
              />
              <TextField
                // error={passwordError}
                // helperText={passwordErrorMessage}
                name="verify-password"
                placeholder="••••••"
                type="password"
                id="verify-password"
                autoComplete="verify-password"
                autoFocus
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
                required
                label="Re-type Password"
                size="small"
                fullWidth
                variant="outlined"
                // color={passwordError ? "error" : "primary"}
              />
            </>
          ) : (
            <Button
              fullWidth
              onClick={() => setUpdatePW(!updatePW)}
              color="primary"
            >
              Reset Password...
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminForm;
