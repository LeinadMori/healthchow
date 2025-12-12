import React from "react";
import "./MedicalSupplies.css";

// ---------- IMPORT IMAGES ----------
import medicalMachineImg from "../../../assets/Images/hero-Image-removebg-preview.png";
import surgicalImg from "../../../assets/Images/surgical.png";
import monitoringImg from "../../../assets/Images/monitoring.png";
import imagingImg from "../../../assets/Images/imaging.png";
import furnitureImg from "../../../assets/Images/furniture.png";
import emergencyImg from "../../../assets/Images/emergency.png";
import rehabImg from "../../../assets/Images/rehab.png";

export default function MedicalSupplies() {
  return (
    <div className="medical-supplies-page">

      {/* ---------- HERO ---------- */}
      <section className="ms-hero">
        <div className="ms-hero-text">
          <h1>Advanced Medical Equipment for Every Facility</h1>
          <p>
            High-quality hospital tools, surgical machines and diagnostic devices.
          </p>
          <button className="ms-btn">Explore Products</button>
        </div>

        <div className="ms-hero-image">
          <img src={medicalMachineImg} alt="Medical Machine" />
        </div>
      </section>

      {/* ---------- CATEGORY CARDS ---------- */}
      <section className="ms-categories">
        <h2>Top Equipment Categories</h2>

        <div className="ms-categories-grid">
          {[
            { title: "Surgical Equipment", img: surgicalImg },
            { title: "Patient Monitoring", img: monitoringImg },
            { title: "Diagnostics & Imaging", img: imagingImg },
            { title: "Hospital Furniture", img: furnitureImg },
            { title: "Emergency Devices", img: emergencyImg },
            { title: "Rehabilitation Tools", img: rehabImg },
          ].map((item, i) => (
            <div className="ms-category-card" key={i}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FEATURED PRODUCTS GRID ---------- */}
      <section className="ms-products">
        <h2>Featured Medical Devices</h2>

        <div className="ms-product-grid">
          {[1, 2, 3, 4].map((item) => (
            <div className="ms-product-card" key={item}>
              <div className="ms-product-image">
              
              </div>
              <h4>Equipment Name {item}</h4>
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
