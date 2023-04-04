import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const PrivateRoute = ({ children }) => {
  const [auth] = useLocalStorage("auth", "");
  console.log("PrivateRoute auth: ", auth);
  return auth ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
