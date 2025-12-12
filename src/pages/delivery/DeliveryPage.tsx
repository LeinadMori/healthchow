import React from "react";
import "./DeliveryPage.css";

export default function DeliveryPage() {
  return (
    <div className="delivery-page">

      {/* ================= HEADER TITLE ================= */}
      <h2 className="page-title">Delivery Information</h2>
      <p className="page-sub">
        Tell us where to deliver your meal or health products.
      </p>

      <div className="delivery-container">

        {/* ================= LEFT SIDE FORM ================= */}
        <div className="form-section">

          {/* Delivery Location */}
          <div className="form-group">
            <label>Delivery Address</label>
            <input type="text" placeholder="Enter delivery address" />
          </div>

          {/* Delivery Type */}
          <div className="form-group">
            <label>What are you ordering?</label>
            <select>
              <option>Healthy Meals</option>
              <option>Groceries</option>
              <option>Medicine</option>
              <option>Health Products</option>
            </select>
          </div>

          {/* Contact */}
          <div className="form-group">
            <label>Contact Number</label>
            <input type="tel" placeholder="0803 123 4567" />
          </div>

          {/* Delivery Instructions */}
          <div className="form-group">
            <label>Delivery Note (optional)</label>
            <textarea placeholder="E.g. Call when you arrive, leave at gate"></textarea>
          </div>

          {/* Time */}
          <div className="form-group">
            <label>Preferred Delivery Time</label>
            <select>
              <option>As soon as possible</option>
              <option>In 30 minutes</option>
              <option>In 1 hour</option>
              <option>Schedule for later</option>
            </select>
          </div>

        </div>

        {/* ================= RIGHT SIDE SUMMARY ================= */}
        <div className="summary-section">

          <h3>Order Summary</h3>

          <div className="summary-box">
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₦4,200</strong>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <strong>₦800</strong>
            </div>
            <div className="summary-row">
              <span>Service Charge</span>
              <strong>₦150</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>₦5,150</strong>
            </div>
          </div>

          {/* HealthChow Guarantee Cards */}
          <div className="info-card">
            <p><strong>✔ Fresh & Nutrition-Checked Meals</strong></p>
            <p>Your meals are prepared with care and delivered quickly for maximum freshness.</p>
          </div>

          <div className="info-card">
            <p><strong>✔ Safe Delivery for Health Products</strong></p>
            <p>All medicine and wellness items follow proper handling guidelines.</p>
          </div>

          {/* Next Step */}
          <button className="next-btn">Continue →</button>
        </div>
      </div>
    </div>
  );
}
