import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const EnquiryNotesCard = ({ lead, children }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "flex-start",
        width: "30%",
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
        <Divider sx={{ mb: 2 }} />
        <Typography>{lead?.notes}</Typography>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        {children}
      </Box>
    </Card>
  );
};

export default EnquiryNotesCard;
