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
import OrderForm from "./OrderForm";
import FormTitle from '../FormTitle'
import { defaultOrderForm } from "../assets/defaultOrderForm";
import { formatDate } from "../assets/dateHelpers.js";

const OrderFormWrapper = ({ order=false, setOpen }) => {
  const [orderData, setOrderData] = useState(!order ? defaultOrderForm : order);

  useEffect(() => {
    // Reformat date from so it can be used as an input value and not throw error
    if (order){const formattedDate = formatDate(order.due)
    setOrderData({
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
        {`Order Form`}
      </FormTitle>
      <OrderForm orderData={orderData} setOrderData={setOrderData}/>
      <DialogActions sx={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
       {!order ?  <CreateButton
          buttonProps={{
            path: "orders",
            data: orderData,
            setData: setOrderData,
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

export default OrderFormWrapper;
