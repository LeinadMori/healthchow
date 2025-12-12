import React, { useState } from "react";
import "../index.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    setSubmitted(true);

    // Clear form
    e.target.reset();

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      {/* HEADER */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you</p>
      </header>

      {/* INFO CARDS */}
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

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea placeholder="Write your message here" required></textarea>

          <button type="submit">Send Message</button>

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <p className="form-success">
              ✔ Your message has been sent successfully!
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
