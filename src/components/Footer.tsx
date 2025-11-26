import React, { useState } from "react";
import "../index.css";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter your email!");
      return;
    }
    // Here you can send 'email' to your backend API
    setSubscribed(true);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* FIRST COLUMN */}
        <div className="footer-col">
          <h3>Create Healthy. Care For Health. For Best Choices.</h3>
          <p>
            At HealthChow, we combine nutritious meals with reliable health services 
            to help you live better every day. From fresh food delivery to wellness support, 
            we make healthy living simple and accessible.
          </p>
        </div>

        {/* SECOND COLUMN */}
        <div className="footer-col">
          <h3>Information</h3>
          <p><a href="#about">About Us</a></p>
          <p><a href="#privacy">Privacy Policy</a></p>
          <p><a href="#terms">Terms & Conditions</a></p>
        </div>

        {/* THIRD COLUMN */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Stay updated with our health & food insights.</p>

          <div className="newsletter-box">
            {!subscribed ? (
              <>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="subscribe-btn" onClick={handleSubscribe}>
                  Subscribe
                </button>
              </>
            ) : (
              <p>Thank you for subscribing!</p>
            )}
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p>© 2025 HealthChow. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#" className="icon-link"><FaInstagram /></a>
          <a href="#" className="icon-link"><FaTiktok /></a>
          <a href="#" className="icon-link"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
