/** @format */

import React from "react";
import { Box, Typography, Button, ButtonGroup, Divider } from "@mui/material";

const SectionHeader = ({ setSearchParams, title, children }) => {
  const handleSort = (e) => {
    setSearchParams({ sort: e.target.name });
  };

  const sortOptions = ["new", "old", "due"];

  return (
    <Box sx={{ mx: 0, mt: 6, mb: 6, width: "90vw" }}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography
        variant="h4"
        color="primary"
        // sx={{textTransform: "uppercase"}}
      >
        {title}
      </Typography>
      {children}
      </Box>
      <Divider />
      {setSearchParams != null && (
        <Box sx={{ display: "flex", alignContent: "", height: 15, my: 1 }}>
          <Typography>sort by: </Typography>
          <ButtonGroup variant="text" size="small" sx={{ mt: 1.2, mx: 1 }}>
            {sortOptions.map((option) => (
              <Button key={option} name={option} onClick={handleSort}>
                {option}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      )}
    </Box>
  );
};

export default SectionHeader;
