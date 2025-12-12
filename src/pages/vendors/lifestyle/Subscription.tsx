import React from "react";
import "./Subscription.css";

export default function SubscriptionPage() {
  return (
    <div className="subscription-container">
      {/* HERO SECTION */}
      <section className="sub-hero">
        <div className="sub-hero-text">
          <h2>Medical Subscription Service</h2>
          <p>
            Access premium healthcare equipment, ongoing support,
            and professional medical guidance at your convenience.
          </p>
          <button className="sub-btn">Subscribe Now</button>
        </div>

        <div className="sub-hero-img"></div>
      </section>

      {/* FEATURE GRID */}
      <section className="sub-feature-section">
        <h3>Our Medical Equipment Plans</h3>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-img img1"></div>
            <h4>Modular Operating Systems</h4>
            <p>High-end surgical equipment for modern operations.</p>
            <button className="feature-btn">Learn More</button>
          </div>

          <div className="feature-card">
            <div className="feature-img img2"></div>
            <h4>Emergency Diagnostic Tools</h4>
            <p>Instant detection and emergency-level care tools.</p>
            <button className="feature-btn">Learn More</button>
          </div>

          <div className="feature-card">
            <div className="feature-img img3"></div>
            <h4>Hospital Accessories</h4>
            <p>Essential medical accessories for everyday use.</p>
            <button className="feature-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* EQUIPMENT SECTION */}
      <section className="equipment-section">
        <h3>Explore Advanced Medical Devices</h3>

        <div className="equipment-grid">
          <div className="equipment-card">
            <div className="equipment-img eq1"></div>
            <h4>MRI Scanner</h4>
            <button className="equipment-btn">View</button>
          </div>

          <div className="equipment-card">
            <div className="equipment-img eq2"></div>
            <h4>CT Scanner</h4>
            <button className="equipment-btn">View</button>
          </div>

          <div className="equipment-card">
            <div className="equipment-img eq3"></div>
            <h4>Ultrasound Machine</h4>
            <button className="equipment-btn">View</button>
          </div>
        </div>
      </section>

      {/* DOCTOR CHAT SECTION */}
      <section className="chat-section">
        <h3>Chat With a Doctor</h3>
        <p>Need medical advice instantly? Our professionals are available 24/7.</p>

        <div className="chat-buttons">
          <a href="#" className="chat-btn whatsapp">Chat on WhatsApp</a>
          <a href="#" className="chat-btn telegram">Chat on Telegram</a>
        </div>
      </section>
    </div>
  );
}

