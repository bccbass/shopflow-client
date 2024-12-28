import React from "react";
import { useState } from "react";
import { Button, Modal, Dialog, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";



const OpenUpdateModalButton = ({children, student, title }) => {
  const [open, setOpen] = useState(false);


  return (
    <>
    { title !== undefined ? 
      <Button onClick={() => setOpen(!open)} variant="contained">
        {title}
      </Button> :
      < Box >
       < EditIcon onClick={() => setOpen(!open)} sx={{ color: "grey" }}/>
       </Box>}

      <Dialog open={open} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: "white",
            mt: 24,
            // height: "fit-content",
            width: 500,
            p: 2,
            borderRadius: "5px",
          }}
        >
          {React.cloneElement(children, { student, setOpen })}
        </Box>
      </Dialog>
    </>
  );
};

export default OpenUpdateModalButton;
