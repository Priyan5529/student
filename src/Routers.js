import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/header";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Signup from "./pages/signup";
import Signin from "./pages/Signin";
import About from "./pages/About";
import DetailsStudents from "./components/DetailsStudent";




const NotFound = () => <div>Not found</div>;

const AppRouters = ({ children }) => {
    return (
        <BrowserRouter>
            <ResponsiveAppBar />

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/DetailsStudents" element={<DetailsStudents />} />
            </Routes>
        </BrowserRouter>
    
    );
};

export default AppRouters;
