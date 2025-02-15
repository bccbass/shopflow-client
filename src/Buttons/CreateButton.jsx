import * as React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { postResource } from "../assets/apiHelpers";

const CreateButton = ({ buttonProps }) => {
  const {
    redirect = false,
    buttonText = "Submit",
    path,
    defaultData,
    data,
    setData,
    setDialogOpen = false,
    query = false,
  } = buttonProps;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postResource,
    onSuccess: () => {
      setOpen(true);
      queryClient.invalidateQueries([!query ? "leads" : query]);
      setData(defaultData);
      setDialogOpen && setDialogOpen(false);
      redirect && navigate(redirect);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({ path: path, body: data });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignContent: "center",
        // mt: 2,
        // mb: 6,
      }}
    >
      <Snackbar
        sx={{ mt: 10 }}
        severity="success"
        variant="filled"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Successfully added!
        </Alert>
      </Snackbar>
      <Button
        variant="contained"
        disabled={mutation.isPending}
        sx={{ margin: "auto", width: "100%" }}
        onClick={handleSubmit}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default CreateButton;
