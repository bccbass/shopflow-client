import React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import CreateButton from "../Buttons/CreateButton.jsx";
import SubmitUpdateButton from '../Buttons/SubmitUpdateButton.jsx'
import RepairForm from "./RepairForm";
import FormTitle from '../FormTitle.jsx'
import { defaultRepairForm } from "../assets/defaultRepairForm.js";
import { formatDate } from "../assets/dateHelpers.js";

const RepairFormWrapper = ({ order=false, setOpen }) => {
  const [orderData, setRepairData] = useState(!order ? defaultRepairForm : order);

  useEffect(() => {
    // Reformat date from so it can be used as an input value and not throw error
    if (order){const formattedDate = formatDate(order.due)
    setRepairData({
      ...orderData,
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
      <RepairForm orderData={orderData} setRepairData={setRepairData}/>
      <DialogActions sx={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
       {!order ?  <CreateButton
          buttonProps={{
            path: "orders",
            data: orderData,
            setData: setRepairData,
            query: "orders",
            setDialogOpen: setOpen,
          }}
        /> :
        < SubmitUpdateButton 
        submitProps={{
          fullWidth: true,
          updatedData: orderData,
          path: 'orders/' + order._id,
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
