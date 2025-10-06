import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import SignIn from "../pages/SingIn";
import Dashboard from "../pages/Dashboard";

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
        </Routes>
      
    </Router>
  )
}

export default AppRouter

