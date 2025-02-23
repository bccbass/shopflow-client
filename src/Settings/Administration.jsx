import React from "react";
import { Divider, Card, Box, Typography } from "@mui/material";
import OpenUpdateModalButton from "../Buttons/OpenUpdateModalButton";
import AdminFormWrapper from "./AdminFormWrapper";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Administration = ({ adminData }) => {
  return (
    <Box maxWidth={700} mr={10} mb={12}>
      <Box my={5}>
        <Typography color="grey" variant="h5">
          Manage Administrators
        </Typography>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          borderRadius={3}
          p={2}
          m={2}
          border={1}
          sx={{ borderColor: "text.secondary" }}
        >
          {adminData.map((admin) => (
            <Card
              key={admin._id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                width: 280,
                borderRadius: 3,
                color: "text.primary",
                px: 4,
                py: 2,
                m: 2,
              }}
            >
              <Box width={"100%"}>
                <Typography variant="h6" color="text.secondary" align="center">
                  {`${admin.firstName} ${admin.lastName}`}
                </Typography>
                <Typography align="center" color="text.light" pb={2}>
                 
                 {`${admin.fullAccess ? "(Full Access)" : "(Restricted Access)"}`}
               </Typography>
                {/* <Divider /> */}

                {/* <Box
                    color="grey"
                    pt={1}
                    pb={0}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <EmailIcon sx={{ mr: 1 }} />
                    <Typography sx={{ wordBreak: "break-all" }}>
                      {` ${admin.email}`}
                    </Typography>
                  </Box> */}

     
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Divider width={"100%"} />
                <OpenUpdateModalButton title={"Edit Administrator"}>
                  <AdminFormWrapper
                    edit={true}
                    currentAdmin={admin}
                    adminData={adminData}
                  />
                </OpenUpdateModalButton>
              </Box>
            </Card>
          ))}
        </Box>
        <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          py: 2,
          px: 4,
        }}
      >
        <OpenUpdateModalButton variant="contained" title={"Add Administrator"}>
          <AdminFormWrapper />
        </OpenUpdateModalButton>
      </Box>
      </Box>
    </Box>
  );
};

export default Administration;
