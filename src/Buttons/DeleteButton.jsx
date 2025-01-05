import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource } from "../assets/apiHelpers";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";

const DeleteButton = ({ path, id, query=path}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteResource,
    onSuccess: () => {
      queryClient.invalidateQueries([query]);
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ path: path, id: id });
  };

  return (
		<Tooltip title="Delete forever">
			<Button
				className={` ${
					mutation.isIdle || (mutation.isPending && "text-slate-200")
				}`}
				disabled={mutation.isPending}
				onClick={handleClick}
				sx={{ px: 2 }}
			>
				<DeleteOutlineOutlinedIcon sx={{color: 'grey'}}/>
			</Button>
		</Tooltip>
	);
};
export default DeleteButton;
