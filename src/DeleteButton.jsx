import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteResource } from "./assets/apiHelpers";

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
    <button
      className={mutation.isIdle || mutation.isPending && "text-slate-300"}
      disabled={mutation.isPending}
      onClick={handleClick}
    >
      Delete
    </button>
  );
};
export default DeleteButton;
