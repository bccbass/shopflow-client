import React from "react";
import { createContext, useState, useEffect } from "react";
import { getResource } from "./assets/apiHelpers";
import { useQuery } from "@tanstack/react-query";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState(null);

  const {data: user, isLoading, isError, refetch} = useQuery({
    queryKey: ["user"],
    queryFn: () => getResource("auth/me"),
    retry: false,
    staleTime: 1000 * 60 * 5, // Cache the user data for 5 minutes,
  });
//   console.log(data, isLoading, isError, refetch);

  if (isError) console.error('Failed to fetch user data');


  // useEffect(() => {
  //   if (!isError && !isLoading) setUser(data);
  //   console.log('from useeffect')
  // }, [isLoading, isError, data]);

  return (
    <UserContext.Provider value={{ user, isLoading, refetch }}>
      {children}
    </UserContext.Provider>
  );
};
