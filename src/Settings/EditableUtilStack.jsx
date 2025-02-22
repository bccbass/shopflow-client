import React from "react";
import { useState } from "react";
import { Stack, Chip, Box, TextField, Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putResource } from "../assets/apiHelpers";

const EditableUtilStack = ({ utilsData, objKey, textFieldLabel }) => {
  const [utilsArr, setUtilsArr] = useState(utilsData[objKey]);
  const [newElement, setNewElement] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["utils"]);
      setNewElement("");
    },
  });

  const submitUpdate = (updatedArr) =>
    mutation.mutate({
      path: `utils/${utilsData._id}`,
      body: { ...utilsData, [objKey]: updatedArr },
    });

  const handleDelete = (labelToDelete) => {
    const updatedArr = utilsArr.filter((label) => label !== labelToDelete);
    setUtilsArr(updatedArr);
    submitUpdate(updatedArr);
  };

  const handleClick = (labelToAdd) => {
    const updatedArr = utilsArr.includes(labelToAdd)
      ? utilsArr
      : [...utilsArr, labelToAdd];
    setUtilsArr(updatedArr);
    submitUpdate(updatedArr);
  };
  return (
    <Box m={2}>
      <Stack
        direction="row"
        spacing={1}
        gap={1}
        flexWrap={"wrap"}
        borderRadius={3}
        p={2}
        border={1}
        sx={{ borderColor: "text.secondary" }}
      >
        {utilsArr.map((element) => (
          <Chip
            size={"large"}
            key={element}
            label={element}
            variant="outlined"
            onDelete={() => handleDelete(element)}
          />
        ))}
      </Stack>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        my={2}
      >
        <TextField
          value={newElement}
          onChange={(e) => setNewElement(e.target.value)}
          label={`Add ${textFieldLabel}`}
          size="small"
        />
        <Button
          variant="outlined"
          sx={{ mx: "1rem" }}
          onClick={() => handleClick(newElement.trim())}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default EditableUtilStack;
