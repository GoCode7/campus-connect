import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import SignIn from "../pages/SingIn";

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            
        </Routes>
      
    </Router>
  )
}

export default AppRouter

