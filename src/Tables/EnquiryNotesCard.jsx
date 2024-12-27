import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const EnquiryNotesCard = ({ lead, children }) => {
  return (
    <Box
      sx={{
        py: 2,
        flex: 2,
        borderLeft: "1px solid #DDD",
        pl: 4,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        color="textSecondary"
        component="div"
      >
        <strong> Notes </strong>
      </Typography>
      <Typography>{lead?.notes}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          my: 4,
          ml: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default EnquiryNotesCard;
