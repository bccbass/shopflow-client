import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router";
import { IconButton } from "@mui/material";

const SettingsNavIcon = ({fullAccess}) => {
  const navigate = useNavigate();
  return fullAccess && (
    <IconButton onClick={() => navigate("settings")}>
      <SettingsIcon fontSize="large" style={{ color: "snow" }} />
    </IconButton>
  );
};

export default SettingsNavIcon;
