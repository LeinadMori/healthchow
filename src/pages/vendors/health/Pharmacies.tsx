// PharmacyPage.jsx
import React from "react";
import "./PharmacyPage.css";

export default function PharmacyPage() {
  return (
    <div className="pharmacy-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Transforming Lives. Enhancing Your Health.</h1>
          <p className="hero-subtitle">
            Trusted pharmacy services with modern healthcare solutions tailored for you.
          </p>
          <button className="hero-btn">Explore Services</button>
        </div>

        <img
          src="/images/pharmacy-doctor.png"
          alt="doctor"
          className="hero-img"
        />
      </section>

      {/* SERVICE CARDS */}
      <section className="service-cards">
        <div className="card">Prescription Refill</div>
        <div className="card">Medical Consultation</div>
        <div className="card">Lab Test Booking</div>
        <div className="card">Vaccination Service</div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-text">
          <h2>Your Professional Healthcare & Pharmacy Partner</h2>
          <p>
            We provide fast, reliable, and advanced pharmaceutical solutions to
            support a healthier lifestyle.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
        <div className="about-img-box"></div>
      </section>

      {/* AREAS OF CARE */}
      <section className="care-areas">
        <h2>We Cover 9 Major Areas For Your Wellness</h2>
        <div className="care-grid">
          {["Diabetes Care", "Heart Health", "Skin Treatment", "Eye Care", "Mental Health", "First Aid Kits", "Supplements", "Women’s Health", "Elderly Support"]
            .map((item, i) => (
              <div key={i} className="care-card">{item}</div>
            ))}
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="track-record">
        <div className="track-img"></div>
        <div className="track-text">
          <h2>Our proven record speaks for itself</h2>
          <p>
            We've helped millions with dependable medications, healthcare products,
            and reliable pharmacy services.
          </p>
        </div>
      </section>
    </div>
  );
}


