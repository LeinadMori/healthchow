import React from "react";
import "./Cuisine.css";

export default function FoodDropdown() {
  return (
    <div className="food-dropdown-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Delicious Food Is<br />Waiting For You</h2>
          <p>
            Our team of registered
            <br />nurses and skilled healthcare
            <br />professionals provide in-home
            <br />nursing.
          </p>
          <button className="menu-btn">Food Menu</button>
        </div>
        <div className="hero-img"></div>
      </section>

      {/* Top List Section */}
      <section className="top-list">
        <h3>Top List</h3>
        <p className="subtitle">Our most-ordered meals</p>

        <div className="card-row">
          <div className="food-card">
            <div className="food-img img1"></div>
            <h4>Noodles three</h4>
            <p className="desc">Delicious spicy noodles</p>
            <span className="price">₦125</span>
          </div>

          <div className="food-card highlight">
            <div className="food-img img2"></div>
            <h4>Noodles one</h4>
            <p className="desc">Best seller noodles</p>
            <span className="price">₦200</span>
          </div>

          <div className="food-card">
            <div className="food-img img3"></div>
            <h4>Noodles two</h4>
            <p className="desc">Hot, tasty and fresh</p>
            <span className="price">₦185</span>
          </div>
        </div>
      </section>

      {/* Fries Section */}
      <section className="fries-section">
        <div className="fries-img"></div>
        <div className="fries-text">
          <h3>Best Potatoes for French Fries</h3>
          <p>
            Around private house area. Since they're dense, they
            <br />don't contain as much water inside, allowing them to
            <br />crisp up perfectly.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h3>Our services</h3>
        <div className="service-list">
          <span>Online Booking</span>
          <span>Catering Service</span>
          <span>Nutrition Support</span>
        </div>
      </section>
    </div>
  );
}
