import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import {Home} from "../pages/Home/home.jsx";
import React from "react";
import {Diets} from "../pages/Diet/index.jsx";

function RoutesApp(){
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/home"} element={<Home/>} />
                <Route path={"/diets"} element={<Diets/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router> 
    )
}

export default RoutesApp