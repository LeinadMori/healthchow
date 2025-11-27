import React from "react";
import "./MedicalSupplies.css";

export default function MedicalSupplies() {
  return (
    <div className="medical-supplies-page">

      {/* ---------- HERO ---------- */}
      <section className="ms-hero">
        <div className="ms-hero-text">
          <h1>Advanced Medical Equipment for Every Facility</h1>
          <p>High-quality hospital tools, surgical machines and diagnostic devices.</p>
          <button className="ms-btn">Explore Products</button>
        </div>

        <div className="ms-hero-image">
          <img src="/images/medical-machine.png" alt="Medical Machine" />
        </div>
      </section>


      {/* ---------- CATEGORY CARDS ---------- */}
      <section className="ms-categories">
        <h2>Top Equipment Categories</h2>

        <div className="ms-categories-grid">
          {[
            { title: "Surgical Equipment", img: "/images/surgical.png" },
            { title: "Patient Monitoring", img: "/images/monitoring.png" },
            { title: "Diagnostics & Imaging", img: "/images/imaging.png" },
            { title: "Hospital Furniture", img: "/images/furniture.png" },
            { title: "Emergency Devices", img: "/images/emergency.png" },
            { title: "Rehabilitation Tools", img: "/images/rehab.png" },
          ].map((item, i) => (
            <div className="ms-category-card" key={i}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ---------- PRODUCT GRID ---------- */}
      <section className="ms-products">
        <h2>Featured Medical Devices</h2>

        <div className="ms-product-grid">
          {[1, 2, 3, 4].map((item) => (
            <div className="ms-product-card" key={item}>
              <div className="ms-product-image"></div>
              <h4>Equipment Name</h4>
              <p className="ms-product-desc">
                High-precision device suitable for clinics & hospitals.
              </p>
              <button className="ms-btn">View Details</button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
