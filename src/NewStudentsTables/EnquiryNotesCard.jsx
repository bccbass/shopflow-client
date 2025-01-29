import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditNotesInPlace from "../AddStudent/EditNotesInPlace";
import EditIcon from "@mui/icons-material/Edit";

const EnquiryNotesCard = ({ lead, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Card
      onClick={() => !open && setOpen(true)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "flex-start",
        width: "32%",
        height: "inherit",
      }}
    >
      <Box sx={{ p: 2, flex: 2 }}>
        <Typography
          // align="center"
          variant="h6"
          gutterBottom
          color="textSecondary"
          component="div"
          // sx={{ pb: 1 }}
        >
          <strong> Notes </strong>
        </Typography>
        {open ? (
          <EditNotesInPlace student={lead} setOpen={setOpen} />
        ) : (
          <>
            <Divider sx={{ mb: 2 }} />

            <Typography>{lead?.notes}</Typography>
          </>
        )}
      </Box>
      {!open ? (
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            align="start"
            sx={{ mx: 0.5, my: 1 }}
            onClick={() => setOpen(true)}
            variant="text"
          >
            <EditIcon sx={{ color: "silver", fontSize: "1.3rem" }} />
          </Button>
        </Box>
      ) : (
        <Typography
          sx={{ color: "grey", mb: 0.5 }}
          onClick={() => open && setOpen(false)}
          align="center"
        >
          {open ? "Cancel" : "click to edit"}
        </Typography>
      )}
    </Card>
  );
};

export default EnquiryNotesCard;
