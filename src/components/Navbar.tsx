import { Button } from "./ui/button";
import logo from "../assets/Images/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const vendorCategories = [
    {
      title: "Food & Nutrition",
      items: [
        { name: "Meal Prep Services", link: "/vendors/food/meal-prep" },
        { name: "Grocery & Organic Stores", link: "/vendors/food/grocery" },
        { name: "Dietitian Partners", link: "/vendors/food/dietitian" },
        { name: "Specialty Cuisine", link: "/vendors/food/specialty-cuisine" },
      ],
    },
    {
      title: "Healthcare & Wellness",
      items: [
        { name: "Pharmacies", link: "/vendors/health/pharmacies" },
        { name: "Medical Clinics", link: "/vendors/health/clinics" },
        { name: "Wellness Providers", link: "/vendors/health/wellness" },
        { name: "Medical Supplies", link: "/vendors/health/medical-supplies" },
      ],
    },
    {
      title: "Extras & Lifestyle",
      items: [
        { name: "Subscription Boxes", link: "/vendors/lifestyle/subscription-boxes" },
        { name: "Local Farmers", link: "/vendors/lifestyle/local-farmers" },
        { name: "Fitness Centers / Gyms", link: "/vendors/lifestyle/gyms" },
      ],
    },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="HealthChow Logo" />
        <h5>HealthChow</h5>
      </div>

      {/* Desktop links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">Features</Link>

        {/* Vendors dropdown */}
        <div className="dropdown">
          <span onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>Vendors ▼</span>
          <div className="dropdown-menu">
            {vendorCategories.map((cat) => (
              <div key={cat.title}>
                <h4>{cat.title}</h4>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Link to="/contact">Contact</Link>
      </div>

      {/* Sign In button */}
      <Button>Sign In</Button>

      {/* Mobile menu button */}
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>Features</Link>

          {/* Mobile Vendors dropdown */}
          <div className={`dropdown ${mobileDropdownOpen ? "active" : ""}`}>
            <span onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>Vendors ▼</span>
            <div className="dropdown-menu">
              {vendorCategories.map((cat) => (
                <div key={cat.title}>
                  <h4>{cat.title}</h4>
                  {cat.items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Button>Sign In</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
