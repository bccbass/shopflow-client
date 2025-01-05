import React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useState } from "react";
import CreateButton from "../Buttons/CreateButton";
import RepairForm from "./RepairForm";
import { defaultRepairForm } from "../assets/defaultRepairForm";

const RepairFormWrapper = ({ repair=false, setOpen }) => {
  const [repairData, setRepairData] = useState(!repair ? defaultRepairForm : repair);

  return (
    <DialogContent
      sx={{
        width: "29rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <DialogTitle textAlign={"center"} variant="h5">
        {`Repair Form`}
      </DialogTitle>
      <RepairForm repairData={repairData} setRepairData={setRepairData}/>
      <DialogActions sx={{ display: "flex", flexDirection: "column" }}>
        <CreateButton
          buttonProps={{
            path: "repairs",
            data: repairData,
            setData: setRepairData,
            query: "repairs",
            setDialogOpen: setOpen,
          }}
        />

        <Button  onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </DialogContent>
  );
};

export default RepairFormWrapper;
