import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import DetailVideoRecipe from "../../pages/DetailVideoRecipe";
import DetailRecipe from "../../pages/DetailRecipe";
import AddRecipe from "../../components/module/home/addrecipe/AddRecipe";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";
import ForgotPassword from "../../pages/auth/ForgotPassword";
import Searching from "../../components/module/home/pagination/Searching";
import NotFound from "../../pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace="true" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Searching />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/detailVideoRecipe" element={<DetailVideoRecipe />} />
      <Route path="/detailRecipe" element={<DetailRecipe />} />
      <Route path="/addRecipe" element={<AddRecipe />} />
      <Route
        path="*"
        element={
          <Fragment>
            <NotFound />
          </Fragment>
        }
      />
    </Routes>
  );
};

export default Router;
