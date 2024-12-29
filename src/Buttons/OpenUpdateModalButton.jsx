import React from "react";
import { useState } from "react";
import { Button, Modal, Dialog, Box, DialogContent } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";



const OpenUpdateModalButton = ({children, student, title }) => {
  const [open, setOpen] = useState(false);

  const bookTrial = title == 'Book Trial'


  return (
    <>
    { title !== undefined ? 
      <Button variant={bookTrial && 'contained'} onClick={() => setOpen(!open)} >
        {title}
      </Button> :
      < Box >
       < EditIcon onClick={() => setOpen(!open)} sx={{ color: "grey" }}/>
       </Box>}

      <Dialog open={open} sx={{ display: "flex", justifyContent: "center" }}>
        <DialogContent
          sx={{
            backgroundColor: "white",
            width: 'fitContent',
            px: 6,
            py: 2,
            borderRadius: "5px",
          }}
        >
          {React.cloneElement(children, { student, setOpen })}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OpenUpdateModalButton;
