import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../../components/module/home/Home"
import Profile from "../../components/module/profile/Profile"
import DetailVideoRecipe from "../../components/module/detailvideorecipe/index"
import AddRecipe from "../../components/module/home/addrecipe/AddRecipe"



const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace="true"/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/detailVideoRecipe" element={<DetailVideoRecipe/>} />
                <Route path="/addRecipe" element={<AddRecipe/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router