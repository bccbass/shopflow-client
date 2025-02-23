import React from "react";
import { Divider, Card, Box, Typography, Stack, Chip } from "@mui/material";
import OpenUpdateModalButton from "../Buttons/OpenUpdateModalButton";
import TeacherFormWrapper from "./TeacherFormWrapper";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Teachers = ({ teachersData, instruments }) => {
  return (
    <Box maxWidth={700} mr={10} mb={12}>
      <Box my={5}>
        <Typography color="grey" variant="h5">
          Manage Teachers
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
          {teachersData.map((teacher) => (
            
            <Card
              
              key={teacher._id}
              sx={{
                backgroundColor: !teacher.active && "silver",
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
                <Typography variant="h6" color="grey" align="center">
                  {`${teacher.firstName} ${teacher.lastName}`}
                </Typography>
                <Divider />

                {teacher.email && (
                  <Box
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
                      {` ${teacher.email}`}
                    </Typography>
                  </Box>
                )}

                {teacher.phone && (
                  <Box
                    color="grey"
                    pt={1}
                    pb={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <LocalPhoneIcon sx={{ mr: 1 }} />
                    <Typography>{` ${teacher.phone}`}</Typography>
                  </Box>
                )}
                {/* <Typography pt={2} pb={0}>
                  <strong>Active: </strong>

                  {`${teacher.active ? "Yes" : "No"}`}
                </Typography> */}
                {/* <Typography fontWeight={"bold"}>Instruments: </Typography> */}
              </Box>
              <Stack
                direction="row"
                spacing={1}
                gap={1}
                flexWrap={"wrap"}
                // borderRadius={3}
                p={2}
                mb={2}
                // border={1}
                sx={{ borderColor: "text.secondary" }}
              >
                {teacher.instruments.map((element) => (
                  <Chip
                    size={"small"}
                    color="secondary"
                    key={element}
                    label={element}
                    // variant="outlined"
                  />
                ))}
              </Stack>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Divider width={"100%"} />
                <OpenUpdateModalButton title={"Edit Teacher Info"}>
                  <TeacherFormWrapper
                    edit={true}
                    currentTeacher={teacher}
                    teachersData={teachersData}
                    instruments={instruments}
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
          <OpenUpdateModalButton
            color="secondary"
            variant="contained"
            title={"Add Teacher"}
          >
            <TeacherFormWrapper
              teachersData={teachersData}
              instruments={instruments}
            />
          </OpenUpdateModalButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Teachers;
