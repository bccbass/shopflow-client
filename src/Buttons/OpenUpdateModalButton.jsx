import React from "react";
import { useState } from "react";
import { Button, Dialog, Box, DialogContent } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from "@mui/icons-material/Edit";

const OpenUpdateModalButton = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  const buttonVariant = title == "Book Trial" ? "contained" : "text";

  return (
    <>
      {title !== undefined ? (
        <Button variant={buttonVariant} onClick={() => setOpen(!open)}>
          {title}
        </Button>
      ) : (
        <Box>
          <EditIcon onClick={() => setOpen(!open)} sx={{ color: "grey" }} />
        </Box>
      )
    
    }

      <Dialog open={open} sx={{ display: "flex", justifyContent: "center" }}>
        <Box onClick={() => setOpen(!open)} sx={{width: '100%', display: 'flex', justifyContent:'flex-end', pr: 2, pt: 1}}>
          < CloseIcon fontSize="large" sx={{color: 'grey'}} />
        </Box>
        <DialogContent
          sx={{
            backgroundColor: "white",
            // width: "fitContent",
            px: 6,
            py: 2,
            borderRadius: "5px",
          }}
        >
          {React.cloneElement(children, { setOpen })}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OpenUpdateModalButton;
