import React from "react";
import "./GetStartedPage.css";

export default function GetStartedPage() {
  return (
    <div className="getstarted-page">

      {/* ================= HEADER TITLE ================= */}
      <h2 className="page-title">Kickstart Your Healthy Lifestyle</h2>
      <p className="page-sub">
        Choose what you need today — fresh meals, groceries, or wellness essentials delivered to you.
      </p>

      <div className="getstarted-container">

        {/* ================= LEFT SIDE CHOICES ================= */}
        <div className="form-section">

          {/* Choose Service */}
          <div className="form-group">
            <label>What would you like to do?</label>
            <select>
              <option>Order Healthy Meals</option>
              <option>Shop Groceries</option>
              <option>Get Medicine & Health Products</option>
              <option>Join as a Delivery Partner</option>
            </select>
          </div>

          {/* Delivery / Start Info */}
          <div className="form-group">
            <label>Where should we deliver or meet you?</label>
            <input type="text" placeholder="Enter your address or location" />
          </div>

          {/* Contact */}
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="0803 123 4567" />
          </div>

          {/* Notes */}
          <div className="form-group">
            <label>Additional Notes (Optional)</label>
            <textarea placeholder="E.g., call on arrival, dietary preference, special instructions"></textarea>
          </div>

        </div>

        {/* ================= RIGHT SIDE HIGHLIGHTS ================= */}
        <div className="summary-section">

          <h3>Your Selection Overview</h3>

          <div className="summary-box">
            <div className="summary-row">
              <span>Service Selected</span>
              <strong>Healthy Meals</strong>
            </div>
            <div className="summary-row">
              <span>Estimated Delivery Fee</span>
              <strong>₦800</strong>
            </div>
            <div className="summary-row">
              <span>Optional Add-ons</span>
              <strong>₦150</strong>
            </div>

            <div className="summary-total">
              <span>Total Estimated</span>
              <strong>₦950</strong>
            </div>
          </div>

          {/* HealthChow Benefits */}
          <div className="info-card">
            <p><strong>🍲 Fresh & Healthy Meals</strong></p>
            <p>All meals are carefully prepared and checked for nutrition and freshness.</p>
          </div>

          <div className="info-card">
            <p><strong>💊 Safe & Trusted Health Products</strong></p>
            <p>Medicine and wellness items are handled with the highest safety standards.</p>
          </div>

          <div className="info-card">
            <p><strong>🚚 Fast & Flexible Delivery</strong></p>
            <p>Choose your preferred delivery time and get your items on time, every time.</p>
          </div>

          {/* Next Step */}
          <button className="next-btn">Get Started →</button>
        </div>

      </div>
    </div>
  );
}
