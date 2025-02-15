import React from "react";
import { useState } from "react";
import {
  Dialog,
  Box,
  DialogContent,
  Tooltip,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SmsIcon from "@mui/icons-material/Sms";
import FormTitle from "../FormTitle";

const OpenSMSModalButton = ({
  recipient,
  contactNumber,
  customMessage = "[MESSAGE]",
  admin = "",
}) => {
  const newMsg = `Hi ${recipient}, 

${customMessage}

Thank you, 
${admin}
Caringbah Music`;

  const [open, setOpen] = useState(false);
  const [textBody, setTextBody] = useState(newMsg);
  const smsHref = `sms:/${contactNumber}/&body=${textBody}`;

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleClick = (e) => {
    e.stopPropagation();
    contactNumber ? setOpen(!open) : null;
  };

  return (
    <>
      <Tooltip
        title={contactNumber ? "Open SMS Portal" : "No Valid Phone Number"}
      >
        <SmsIcon
          onClick={handleClick}
          sx={{ color: "grey" }}
        />
      </Tooltip>
      <Dialog
      onClick={handleStopPropagation}
      open={open} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          onClick={() => setOpen(!open)}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            pr: 2,
            pt: 1,
          }}
        > <Button>
          <CloseIcon fontSize="large" sx={{ color: "grey" }} />
          </Button>
        </Box>
        <DialogContent
          sx={{
            px: 6,
            py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              my: 3,
            }}
          >
            <FormTitle>Compose SMS Message</FormTitle>
            <TextField
              multiline
              value={textBody}
              id={textBody}
              minRows={6}
              sx={{ width: "20rem", mb: 4 }}
              onChange={(e) => setTextBody(e.target.value)}
            ></TextField>

            <a
              style={{
                padding: "6px 15px",
                backgroundColor: "cornflowerblue",
                borderRadius: "8px",
                color: "white",
                textDecoration: "none",
                whiteSpace: "-moz-pre-wrap",
              }}
              href={smsHref.replaceAll("\n", "%0D%0A")}
              onMouseUp={() => setOpen(false)}
            >
              OPEN SMS MESSENGER
            </a>
            <Button
              sx={{ mt: 1 }}
              variant="text"
              onClick={() => {
                setTextBody(newMsg), setOpen(false);
              }}
            >
              Cancel
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OpenSMSModalButton;
