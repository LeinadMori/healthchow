import React from "react";
import "./MedicalClinics.css";

export default function MedicalClinics() {
  return (
    <div className="clinics-page">

      {/* ===== HERO ===== */}
      <section className="clinics-hero">
        <div className="clinics-hero-content">
          <h1>Medical Clinics</h1>
          <p>
            Providing modern, accessible and patient-focused care across multiple
            specialized clinics. Your health is our priority.
          </p>

          <div className="clinics-stats">
            <div className="cstat">
              <h2>12+</h2>
              <span>Specialty Clinics</span>
            </div>
            <div className="cstat">
              <h2>50+</h2>
              <span>Medical Experts</span>
            </div>
            <div className="cstat">
              <h2>30k+</h2>
              <span>Patients Annually</span>
            </div>
          </div>
        </div>

        <div className="clinics-hero-img">
          <img
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
            alt="Clinic Team"
          />
        </div>
      </section>

      {/* ===== SERVICES BELOW HERO ===== */}
      <section className="clinic-services">
        <h2 className="section-title">Our Clinic Departments</h2>

        <div className="clinic-grid">

          <div className="clinic-card">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              alt=""
            />
            <h3>General Medicine</h3>
            <p>
              Primary care services including diagnosis, treatment and preventive healthcare.
            </p>
          </div>

          <div className="clinic-card">
            <img
              src="https://images.unsplash.com/photo-1580281658629-6d5a5f7b7ab9"
              alt=""
            />
            <h3>Pediatrics</h3>
            <p>
              Comprehensive health services tailored to infants, children, and adolescents.
            </p>
          </div>

          <div className="clinic-card">
            <img
              src="https://images.unsplash.com/photo-1597764691855-564c7b3c1f90"
              alt=""
            />
            <h3>Diagnostics & Lab</h3>
            <p>
              Advanced imaging, blood work and lab testing for accurate medical evaluation.
            </p>
          </div>

          <div className="clinic-card">
            <img
              src="https://images.unsplash.com/photo-1604881991631-cd21e841b230"
              alt=""
            />
            <h3>Women's Health</h3>
            <p>
              Specialized obstetrics and gynecology services with experienced clinicians.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
