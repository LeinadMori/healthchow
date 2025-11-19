import { Button } from "./ui/button";
import logo from "../assets/Images/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css"; // import the CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left logo + text */}
      <div className="logo">
        <img src={logo} alt="HealthChow Logo" />
        <h5>HealthChow</h5>
      </div>

      {/* Desktop links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">Features</Link>
        <div className="dropdown">
    <Link to="/vendors">Vendors ▼</Link>
    <div className="dropdown-menu">
      <div>
        <h4>Food & Nutrition</h4>
        <ul>
          <li>Meal Prep Services</li>
          <li>Grocery & Organic Stores</li>
          <li>Dietitian Partners</li>
          <li>Specialty Cuisine</li>
        </ul>
      </div>
      <div>
        <h4>Healthcare & Wellness</h4>
        <ul>
          <li>Pharmacies</li>
          <li>Medical Clinics</li>
          <li>Wellness Providers</li>
          <li>Medical Supplies</li>
        </ul>
      </div>
      <div>
        <h4>Extras & Lifestyle</h4>
        <ul>
          <li>Subscription Boxes</li>
          <li>Local Farmers</li>
          <li>Fitness Centers / Gyms</li>
        </ul>
      </div>
    </div>
  </div>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Right button */}
      <button className="navbar-button">Sign In</button>


      {/* Mobile menu button */}
      <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link to="/vendors" onClick={() => setMenuOpen(false)}>Vendors</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Button>Sign In</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
