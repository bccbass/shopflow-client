import React from "react";
import { useState } from "react";
import { Button, Dialog, Box, DialogContent, Tooltip} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";

const OpenEmailModalButton = ({ children, email }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
        <Tooltip title={email ? '' : 'No Valid Email Address!'}>
            <EmailIcon onClick={() => email ?  setOpen(!open) : null} sx={{ color: "grey" }} />
        </Tooltip>
        <Dialog open={open} sx={{ display: "flex", justifyContent: "center" }}>
            <Box onClick={() => setOpen(!open)} sx={{width: '100%', display: 'flex', justifyContent:'flex-end', pr: 2, pt: 1}}>
            < CloseIcon fontSize="large" sx={{color: 'grey'}} />
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
