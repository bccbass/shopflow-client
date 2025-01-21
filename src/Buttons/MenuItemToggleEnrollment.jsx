import React from "react";
import {
  Box,
  ListItemIcon,
  ListItemText,
  listSubheaderClasses,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchResource } from "../assets/apiHelpers";
import SchoolIcon from "@mui/icons-material/School";

const MenuItemToggleEnrollment = ({ student }) => {
//   const submitProps = {
//     redirect: `/newstudents?view=enrolled`,
//     updatedData: { enrolled: !lead.enrolled },
//     path: "leads/updatetrial/" + lead._id,
//     variant: "contained",
//     type: "patch",
//     title: `${lead.enrolled ? "Unenroll" : "Enroll"} ${lead.studentFullName}`,
//   };


    const redirectView = !student.enrolled ? 'enrolled' : student.bookedTrial ? 'triallessons' : 'enquiries'
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: patchResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["leads"]);
      navigate(`/newstudents?view=${redirectView}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({
      path: "leads/updatetrial/" + student._id,
      body: { enrolled: !student.enrolled },
    });
  };

  return (
    <Box onClick={handleSubmit} sx={{ display: "flex", width: "100%" }}>
      <ListItemIcon>
        <SchoolIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>
        {student.enrolled ? "Unenroll Student" : "Enroll Student"}
      </ListItemText>
    </Box>
  );
};

export default MenuItemToggleEnrollment;
