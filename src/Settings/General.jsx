import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import EditableUtilStack from "./EditableUtilStack";
import Locations from "./Locations";

const General = ({ utilsData }) => {
  return (
    <Box maxWidth={700} mr={10} mb={12}>
      <Box my={5}>
        <Typography color="grey" variant="h5">
          Manage Instruments & Subjects
        </Typography>
        <EditableUtilStack
          utilsData={utilsData}
          objKey={"instruments"}
          textFieldLabel="Instrument"
        />
      </Box>
      <Box my={5}>
        <Typography color="grey" variant="h5">
          Manage Group Classes
        </Typography>
        <EditableUtilStack
          utilsData={utilsData}
          objKey={"groupClasses"}
          textFieldLabel="Group Class"
        />
      </Box>
      <Divider my={2} />
      <Box my={5}>
        <Typography color="grey" variant="h5">
          Manage Lead Sources
        </Typography>
        <EditableUtilStack
          utilsData={utilsData}
          objKey={"leadSources"}
          textFieldLabel="Lead Source"
        />
      </Box>
      <Divider my={2} />
      <Box my={5}>
        <Typography color="grey" variant="h5">
          Manage Locations
        </Typography>

        <Locations utilsData={utilsData} />
      </Box>
    </Box>
  );
};

export default General;
