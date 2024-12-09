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
    // <button
    //   className={mutation.isIdle || mutation.isPending && "text-slate-300"}
    //   disabled={mutation.isPending}
    //   onClick={handleClick}
    // >
    //   Delete
    // </button>
    <span
      className={`w-fit rounded-md p-1 m-1 text-red-700 hover:text-red-400 transition-all ${
        mutation.isIdle || (mutation.isPending && "text-slate-200")
      }`}
      disabled={mutation.isPending}
      onClick={handleClick}
    >
      delete
    </span>
  );
};
export default DeleteButton;
