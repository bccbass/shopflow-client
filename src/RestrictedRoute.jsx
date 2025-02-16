import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "./UserContext";
import FullScreenLoader from "./FullScreenLoader";

const RestrictedRoute = ({ children }) => {
  const { user, isLoading } = useContext(UserContext);
  if (isLoading) return <FullScreenLoader />;

  return user?.fullAccess ? children : user ? <Navigate to="/" /> : <Navigate to="/login" />;
};

export default RestrictedRoute;
