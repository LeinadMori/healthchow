// FitnessLanding.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Gym.css";

export default function FitnessLanding() {
  return (
    <div className="fitness-landing">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title"
          >
            Your Fitness <span className="highlight">Your Victory</span>
          </motion.h1>

          <p className="hero-subtitle">
            Transform your body and mindset with structured workouts designed to push
            your limits.
          </p>

          <button className="cta-btn">Get Started</button>
        </div>

        <motion.img
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="/images/fitness-model.png"
          alt="fitness model"
          className="hero-img"
        />
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2 className="section-title">Why Choose Us?</h2>

        <div className="features-grid">
          {["Professional", "Workout Plans", "Self Defence"].map((item, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{item}</h3>
              <p className="feature-text">
                High-quality training designed to improve strength, stamina, and
                confidence.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="programs">
        <h2 className="section-title">Training Programs</h2>

        <div className="programs-grid">
          {["Cardio Training", "Weight Lifting", "Body Balance", "Muscle Building", "KARATE", "HIIT"]
            .map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-img"></div>
                <div className="program-info">
                  <h3 className="program-title">{program}</h3>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
