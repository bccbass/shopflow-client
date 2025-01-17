import React from "react";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import { Dialog, DialogContent, Box, ListItemIcon, ListItemText } from "@mui/material";

const MenuItemEditOrder = ({ children, order=false }) => {
  const [open, setOpen] = useState(false);


  return (
    <>
      
       <Box sx={{ display: "flex", width: '100%' }} onClick={() => setOpen(true)}>
			<ListItemIcon>
                < Edit /> 
          	</ListItemIcon>
            <ListItemText>Edit</ListItemText>
        </Box>
     

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

export default MenuItemEditOrder;
