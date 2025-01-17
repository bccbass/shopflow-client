import React from "react";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import { Button, Modal, Dialog, Tooltip, DialogContent } from "@mui/material";

const AddOrderButton = ({ children, order=false }) => {
  const [open, setOpen] = useState(false);


  return (
    <>
      
        <Button variant={order ? 'text': 'contained'} sx={{color: order && 'grey'}} onClick={() => setOpen(!open)}>
          {order ? 
            "Edit Order "
          : "New Order" }
          
        </Button>
     

      <Dialog open={open} sx={{ display: "flex", justifyContent: "center" }}>
        <DialogContent
          sx={{
            backgroundColor: "white",
            width: "fitContent",
            px: 6,
            py: 2,
            borderRadius: "5px",
          }}
        >
          {React.cloneElement(children, { order, setOpen })}
        </DialogContent>
      </Dialog>
    </>
  );
  
};

export default AddOrderButton;
