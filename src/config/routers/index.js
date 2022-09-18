import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../components/base/Home/Home";
import Detail from "../../components/module/Detail/DetailResep";
import DetailVideo from "../../components/module/Detail/DetailVideo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/DetailVideo" element={<DetailVideo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
