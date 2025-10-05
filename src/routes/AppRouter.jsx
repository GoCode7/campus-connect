import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
        </Routes>
      
    </Router>
  )
}

export default AppRouter

