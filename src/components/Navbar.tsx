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
        <Link to="/features">Features</Link>
        <Link to="/vendors">Vendors</Link>
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
