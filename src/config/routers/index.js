// import { useSelector } from "react-redux";
// import RequireAuth from "../../components/base/RequireAuth";
import React, { Fragment } from "react";
// import Swal from "sweetalert2";
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

// const Role = ({ children }) => {
//   const { user } = useSelector((state) => state.auth);

//   if (user.role !== "seller") {
//     Swal.fire("Are you a Seller?", "Please be a Seller first!", "question");
//     return <Navigate to="/home" replace />;
//   }
//   return children;
// };

// const authPath = ['/auth', '/auth/login', '/auth/signup', '/auth/forgot-password']
const Router = () => {
  return (

    <Routes>

      <Route path="/" element={
         
            <Navigate to="/home" replace="true" />
        
      } />
      <Route path="/home" element={
          
            <Home />
        
        }/>
      <Route path="/login" element={
           
              <Login />
       
      } />
      <Route path="/search" element={
       
            <Searching />
        
      } />
      <Route path="/signup" element={
           
              <Signup />
           
      } />
      <Route path="/forgot-password" element={
         
            <ForgotPassword />  
         
      } />

      <Route path="/profile" element={
       
            <Profile />
         
      } />
      <Route path="/detailVideoRecipe/:recipeid" element={
            <DetailVideoRecipe />
         
      } />
      <Route path="/detailRecipe/:id" element={
         
            <DetailRecipe />  
      
      } />
      <Route path="/addRecipe" element={
        
          <AddRecipe />
      
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
