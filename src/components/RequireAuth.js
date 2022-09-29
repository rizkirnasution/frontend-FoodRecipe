import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";



const RequireAuth = ({ children }) => {
  
  // const logout = useSelector(state => state.auth.logout, shallowEqual)
  const isAuth = localStorage.getItem("token");
  //   const toastId = React.useRef(null);
  // useEffect(() =>{
  //   const toastOptions = {
  //     position: "bottom-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   };
  //   if(logout?.isFulfilled){
  //     toast.dismiss();
  
  //     toastId.current = toast.success("Logout Success", toastOptions);
  //   }

  // }, [logout])
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
