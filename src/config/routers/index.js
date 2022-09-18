import { useSelector } from "react-redux";
// import RequireAuth from "../../components/base/RequireAuth";
import React from "react";
// import Swal from "sweetalert2";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../components/module/home/Home";
import Profile from "../../pages/Profile";
import DetailVideoRecipe from "../../pages/DetailVideoRecipe";
import DetailRecipe from "../../pages/DetailRecipe"
import DetailResep from "../../components/module/Detail/DetailResep"
import AddRecipe from "../../components/module/home/addrecipe/AddRecipe";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";
import ForgotPassword from "../../pages/auth/ForgotPassword";
import Searching from "../../components/module/home/pagination/Searching"

// const Role = ({ children }) => {
//   const { user } = useSelector((state) => state.auth);

//   if (user.role !== "seller") {
//     Swal.fire("Are you a Seller?", "Please be a Seller first!", "question");
//     return <Navigate to="/home" replace />;
//   }
//   return children;
// };

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Searching/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detailVideoRecipe" element={<DetailVideoRecipe />} />
        <Route path="/detailRecipe" element={<DetailRecipe />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/detailresep" element={<DetailResep />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
