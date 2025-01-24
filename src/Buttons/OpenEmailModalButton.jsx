import React from "react";
import { useState } from "react";
import { Dialog, Box, DialogContent, Tooltip, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";

const OpenEmailModalButton = ({ children, email }) => {
  const [open, setOpen] = useState(false);

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleClick = (e) => {
    e.stopPropagation();
    email ? setOpen(!open) : null;
  };

  return (
    <>
      <Tooltip
        title={
          email ? "Compose Email from Template" : "No Valid Email Address!"
        }
      >
        <EmailIcon onClick={handleClick} sx={{ color: "grey" }} />
      </Tooltip>
      <Dialog
        onClick={handleStopPropagation}
        disableEnforceFocus
        open={open}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            pr: 2,
            pt: 1,
          }}
        >
          <Button>
            <CloseIcon
              onClick={handleClick}
              fontSize="large"
              sx={{ color: "grey" }}
            />
          </Button>
        </Box>
        <DialogContent
          sx={{
            px: 6,
            py: 2,
          }}
        >
          {React.cloneElement(children, { setOpen })}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OpenEmailModalButton;
