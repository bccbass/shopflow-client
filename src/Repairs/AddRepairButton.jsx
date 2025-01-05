import React from "react";
import { useState } from "react";
import { Button, Modal, Dialog, Box, DialogContent } from "@mui/material";

const AddRepairButton = ({ children, repair }) => {
  const [open, setOpen] = useState(false);


  return (
    <>
      
        <Button variant='outlined' onClick={() => setOpen(!open)}>
          New Repair
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
          {React.cloneElement(children, { repair, setOpen })}
        </DialogContent>
      </Dialog>
    </>
  );
  
};

export default AddRepairButton;
