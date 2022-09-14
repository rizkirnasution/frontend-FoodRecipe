import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../../components/base/Home/Home"



const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace="true"/>}/>
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router