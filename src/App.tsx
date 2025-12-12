import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import Pharmacies from "../src/pages/vendors/health/Pharmacies";
import MedicalSupplies from "./pages/vendors/health/MedicalSupplies";
import Dietitian from "./pages/vendors/food/Dietitian";
import Cuisine from "./pages/vendors/food/Cuisine";
import MealPrepPage from "./pages/vendors/food/MealPrepPage";
import Subscription from "./pages/vendors/lifestyle/Subscription";
import LocalFarm from "./pages/vendors/lifestyle/local-farmers";
import Gyms from "./pages/vendors/lifestyle/gyms";
import GroceryPage from "./pages/vendors/food/GroceryPage";
import MedicalClinics from "./pages/vendors/health/MedicalClinics";
import DeliveryPage from "./pages/delivery/DeliveryPage";
import GetStartedPage from "./pages/delivery/GetStartedPage";

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
        <Route path="/vendors/food/Dietitian" element={<Dietitian />} />
        <Route path="/vendors/food/Cuisine" element={<Cuisine />} />
        <Route path="/vendors/food/MealPrepPage" element={<MealPrepPage />} />
        <Route path="/vendors/lifestyle/Subscription" element={<Subscription />} />
        <Route path="/vendors/lifestyle/local-farmers" element={<LocalFarm />} />
        <Route path="/vendors/lifestyle/gyms" element={<Gyms/>} />
        <Route path="/vendors/food/groceryPage" element={<GroceryPage />} />
        <Route path="/vendors/health/medical-clinics" element={<MedicalClinics/>} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />

      </Routes>
    </Router>
  );
}

export default App;