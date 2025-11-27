import React from "react";
import "./Dietitian.css";

export default function DietitianPage() {
  return (
    <div className="dietitian-page-container">
      {/* Header Section */}
      <section className="dietitian-hero">
        <div className="hero-text">
          <h2>Organic Soursop Graviola</h2>
          <p>
            Powerful natural nutrition designed to support
            your immunity, wellness, and long‑term vitality.
          </p>
        </div>
        <div className="hero-img"></div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h3>Benefits of Soursop Graviola</h3>
        <div className="benefits-center-img"></div>

        <div className="benefit-grid">
          <div className="benefit-card">Boosts Immune System</div>
          <div className="benefit-card">Rich in Antioxidants</div>
          <div className="benefit-card">Supports Healthy Digestion</div>
          <div className="benefit-card">Natural Detox Support</div>
        </div>
      </section>

      {/* Natural Section */}
      <section className="natural-section">
        <div className="natural-img"></div>

        <div className="natural-text">
          <h3>Discover the Natural Power of Soursop</h3>
          <p>
            Made from premium organic soursop, carefully processed
            to retain its healing properties and support daily
            wellness.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="choose-section">
        <h3>Why Choose Us?</h3>
        <div className="choose-grid">
          <span>Organic Extract</span>
          <span>No Additives</span>
          <span>Lab Tested</span>
          <span>High Absorption</span>
          <span>Trusted Quality</span>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="lifestyle-section">
        <div className="lifestyle-img"></div>
        <div className="lifestyle-text">
          <h3>High Extract Formula</h3>
          <p>Made for people who value health, longevity, and a natural approach.</p>
        </div>
      </section>
    </div>
  );
}
