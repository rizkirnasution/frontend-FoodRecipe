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
import { PublicRoutes } from '../../router/publicRoutes'
import { PrivateRoutes } from "../../router/privateRoutes";

const Router = () => {
  return (

    <Routes>

      <Route path="/" element={
          <PublicRoutes>
            <Navigate to="/home" replace="true" />
          </PublicRoutes>
      } />
      <Route path="/home" element={
          <PublicRoutes>
            <Home />
          </PublicRoutes>
        }/>
      <Route path="/login" element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
      } />
      <Route path="/search" element={
          <PublicRoutes>
            <Searching />
          </PublicRoutes>
      } />
      <Route path="/signup" element={
            <PublicRoutes>
              <Signup />
            </PublicRoutes>
      } />
      <Route path="/forgot-password" element={
          <PublicRoutes>
            <ForgotPassword />  
          </PublicRoutes>
      } />

      <Route path="/profile" element={
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
      } />
      <Route path="/detailVideoRecipe" element={
          <PublicRoutes>
            <DetailVideoRecipe />
          </PublicRoutes>
      } />
      <Route path="/detailRecipe" element={
          <PublicRoutes>
            <DetailRecipe />  
          </PublicRoutes>
      } />
      <Route path="/addRecipe" element={
        <PrivateRoutes>
          <AddRecipe />
        </PrivateRoutes>
      } />
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
