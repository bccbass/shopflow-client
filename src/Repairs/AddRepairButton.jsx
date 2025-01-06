import React from "react";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import { Button, Modal, Dialog, Tooltip, DialogContent } from "@mui/material";
import { Add } from "@mui/icons-material";

const AddRepairButton = ({ children, repair=false }) => {
  const [open, setOpen] = useState(false);


  return (
    <>
      
        <Button variant={repair ? '': 'contained'} sx={{color: repair && 'grey'}} onClick={() => setOpen(!open)}>
          {repair ? 
          < Tooltip title='Edit' >
          < Edit /> 
          </Tooltip>
          : "New Repair" }
          
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
