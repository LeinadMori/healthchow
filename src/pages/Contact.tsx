import React from "react";
import "../index.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you</p>
      </header>

      <section className="contact-info">
        <div className="info-card">
          <h3>Office Location</h3>
          <p>123 Street, City, Country</p>
        </div>
        <div className="info-card">
          <h3>Working Hours</h3>
          <p>Mon - Fri: 9:00am - 6:00pm</p>
        </div>
        <div className="info-card">
          <h3>Contact</h3>
          <p>email@example.com<br/>+123 456 789</p>
        </div>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea placeholder="Write your message here"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
