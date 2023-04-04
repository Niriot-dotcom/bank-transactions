import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login";
import SignupPage from "../../pages/Signup";
import TransactionsPage from "../../pages/Transactions";
import ProfilePage from "../../pages/Profile";
import EditProfilePage from "../../pages/EditProfile";
import NewTransactionPage from "../../pages/NewTransaction";
import NotFoundPage from "../../pages/NotFound";
import SuccessTxnPage from "../../pages/SuccessTxn";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />

        {/* PRIVATE ROUTES */}
        <Route
          exact
          path="/transactions"
          element={
            <PrivateRoute>
              <TransactionsPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile/edit"
          element={
            <PrivateRoute>
              <EditProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/tx"
          element={
            <PrivateRoute>
              <NewTransactionPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/tx/success"
          element={
            <PrivateRoute>
              <SuccessTxnPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
