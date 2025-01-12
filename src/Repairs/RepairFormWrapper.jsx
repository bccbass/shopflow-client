import React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import CreateButton from "../Buttons/CreateButton";
import SubmitUpdateButton from '../Buttons/SubmitUpdateButton'
import RepairForm from "./RepairForm";
import FormTitle from '../FormTitle'
import { defaultRepairForm } from "../assets/defaultRepairForm";
import { formatDate } from "../assets/dateHelpers.js";

const RepairFormWrapper = ({ repair=false, setOpen }) => {
  const [repairData, setRepairData] = useState(!repair ? defaultRepairForm : repair);

  useEffect(() => {
    // Reformat date from so it can be used as an input value and not throw error
    if (repair){const formattedDate = formatDate(repair.due)
    setRepairData({
      ...repairData,
      due: formattedDate
    });}
  }, []);


  return (
    <DialogContent
      sx={{
        width: "29rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <FormTitle >
        {`Repair Form`}
      </FormTitle>
      <RepairForm repairData={repairData} setRepairData={setRepairData}/>
      <DialogActions sx={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
       {!repair ?  <CreateButton
          buttonProps={{
            path: "repairs",
            data: repairData,
            setData: setRepairData,
            query: "repairs",
            setDialogOpen: setOpen,
          }}
        /> :
        < SubmitUpdateButton 
        submitProps={{
          fullWidth: true,
          updatedData: repairData,
          path: 'repairs/' + repair._id,
          setOpen: setOpen,
          }}/>}
        <Button fullWidth variant="outlined" color="text.secondary" sx={{my: 2, mr: .5}} onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </DialogContent>
  );
};

export default RepairFormWrapper;
