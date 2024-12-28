import React from "react";
import { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
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

      <Modal open={open} sx={{ overflowY: 'scrollable', display: "flex", justifyContent: "center", height: '2000px' }}>
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
      </Modal>
    </>
  );
};

export default OpenUpdateModalButton;
