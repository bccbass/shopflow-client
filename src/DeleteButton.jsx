import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource } from "./assets/apiHelpers";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


const DeleteButton = ({ path, id }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteResource,
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ path: path, id: id });
  };

  return (
		<Button
			className={` ${
				mutation.isIdle || (mutation.isPending && "text-slate-200")
			}`}
			disabled={mutation.isPending}
			onClick={handleClick}
      sx={{color: 'grey'}}
    >

			< DeleteIcon />
		</Button>
	);
};
export default DeleteButton;
