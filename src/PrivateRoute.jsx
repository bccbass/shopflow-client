import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "./UserContext";
import FullScreenLoader from "./FullScreenLoader";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(UserContext);
  if (isLoading) return <FullScreenLoader />;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
