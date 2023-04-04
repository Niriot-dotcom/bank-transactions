import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/Login";
import HomePage from "../../pages/Home";
import NotFoundPage from "../../pages/NotFound";
import SignupPage from "../../pages/Signup";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
