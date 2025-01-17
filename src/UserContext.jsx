import React from "react";
import { createContext } from "react";
import { getResource, postResource } from "./assets/apiHelpers";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const {data: user, isLoading, isError, refetch} = useQuery({
    queryKey: ["user"],
    queryFn: () => getResource("auth/me"),
    retry: false,
    staleTime: 1000 * 60 * 5, // Cache the user data for 5 minutes,
  });

  const logout = () => {
    mutation.mutate({ path: "auth/logout" });
  };
  const mutation = useMutation({
    mutationFn: postResource,
    onError: (error) => console.log("logout error", error),
    onSuccess: () => {
      queryClient.removeQueries(['user'])
    },
  });


  if (isError) console.error('Failed to fetch user data');



  return (
    <UserContext.Provider value={{ user, logout, isLoading, refetch }}>
      {children}
    </UserContext.Provider>
  );
};
