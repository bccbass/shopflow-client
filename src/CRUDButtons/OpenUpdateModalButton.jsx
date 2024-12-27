import React from "react";
import { useState } from "react";
import { Button, Modal, Box } from "@mui/material";

const OpenUpdateModalButton = ({children, student, title }) => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <Button onClick={() => setOpen(!open)} variant="contained">
        {title}
      </Button>
      <Modal open={open} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: "white",
            mt: 24,
            height: "fit-content",
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
