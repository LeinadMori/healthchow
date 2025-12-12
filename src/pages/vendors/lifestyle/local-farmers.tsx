import React from "react";
import "./LocalFarm.css";

export default function LocalFarm() {
  return (
    <div className="localfarm-page">
      {/* HERO SECTION */}
      <section className="farm-hero">
        <div className="hero-content">
          <h1>Let’s Go Back to Pure Natural Food</h1>
          <p>Fresh produce sourced directly from trusted local farmers.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <img
          src="/images/farm-hero.png"
          alt="Fresh Farm Produce"
          className="hero-img"
        />
      </section>

      {/* FEATURES */}
      <section className="farm-features">
        <div className="feature-card">
          <h3>100% Organic Vegetables</h3>
          <p>Locally-grown, chemical-free vegetables.</p>
        </div>
        <div className="feature-card">
          <h3>Handpicked Berries</h3>
          <p>Fresh berries sourced directly from farmers.</p>
        </div>
      </section>

      {/* ACCREDITED FARMERS */}
      <section className="accredited">
        <div className="accredited-text">
          <h2>We Work With Accredited Farmers</h2>
          <p>
            Our network of trusted farmers ensures top-quality produce
            delivered straight from the farm to your kitchen.
          </p>
        </div>
        <img src="/images/farmers.png" alt="Farmers" className="accredited-img" />
      </section>

      {/* PRODUCT GRID */}
      <section className="product-section">
        <h2>Fresh From Local Farms</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/tomatoes.png" alt="Tomatoes" />
            <h4>Organic Tomatoes</h4>
            <p>₦1,500 / basket</p>
          </div>
          <div className="product-card">
            <img src="/images/lettuce.png" alt="Lettuce" />
            <h4>Fresh Lettuce</h4>
            <p>₦900 / bunch</p>
          </div>
          <div className="product-card">
            <img src="/images/potatoes.png" alt="Potatoes" />
            <h4>Farm Potatoes</h4>
            <p>₦2,200 / bag</p>
          </div>
          <div className="product-card">
            <img src="/images/berries.png" alt="Berries" />
            <h4>Mixed Berries</h4>
            <p>₦3,800 / pack</p>
          </div>
        </div>
      </section>
    </div>
  );
}
