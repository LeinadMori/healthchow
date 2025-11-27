import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import Pharmacies from "../src/pages/vendors/health/Pharmacies";
import MedicalSupplies from "./pages/vendors/health/MedicalSupplies";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vendors/health/pharmacies" element={<Pharmacies />} />
        <Route path="/vendors/health/medical-supplies" element={<MedicalSupplies />} />




        
       
      </Routes>
    </Router>
  );
}

export default App;
