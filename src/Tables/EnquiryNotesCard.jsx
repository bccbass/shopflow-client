import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const EnquiryNotesCard = ({ lead, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "30%",
        borderLeft: "1px solid #DDD",
        pr: 6,
      }}
    >
      <Box
        sx={{
          py: 2,
          ml: 3,
          flex: 2,
          width: "100%",
          // minHeight: "250px",
          pl: 4,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          color="textSecondary"
          component="div"
          // sx={{ pb: 1 }}
        >
          <strong> Notes </strong>
        </Typography>
        <Typography>{lead?.notes}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          // my: 4,
          ml: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default EnquiryNotesCard;
