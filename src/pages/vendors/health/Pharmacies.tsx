// React Component (PharmacyPage.jsx)
import React from "react";
import "../PharmacyPage.css";

export default function PharmacyPage() {
  return (
    <div className="pharmacy-page">
      {/* Hero Section */}
      <section className="pharmacy-hero">
        <div className="pharmacy-hero-text">
          <h1>Your Medication Now Made Easy</h1>
          <p>Fast, reliable delivery and trusted pharmacy services.</p>
          <button>Shop Now</button>
        </div>
        <div className="pharmacy-hero-image">
          <img src="/path/to/medicine.png" alt="Medicine" />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>Free Shipping & Delivery</h3>
          <p>On medicine orders made today.</p>
        </div>
        <div className="feature-card">
          <h3>Pharma Grade Guarantee</h3>
          <p>Trusted pharmaceutical partners.</p>
        </div>
        <div className="feature-card">
          <h3>Certified Pharmacy</h3>
          <p>Licensed and secure medication handling.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Explore Featured Categories</h2>
        <div className="categories-grid">
          {[
            "Supplements",
            "Vitamins",
            "Skin Care",
            "Personal Care",
            "Herbal Products",
            "Medicine",
          ].map((item, index) => (
            <div key={index} className="category-card">
              <div className="category-icon"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Deals */}
      <section className="daily-deals">
        <h2>Shop Daily Deals</h2>
        <div className="deals-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="deal-card">
              <div className="deal-image"></div>
              <p className="deal-title">Product Name</p>
              <p className="deal-desc">Short description...</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
