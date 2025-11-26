import React from "react";
import "./MealPrepPage.css";

export default function MealPrepPage() {
  return (
    <div className="mealprep-page">

      {/* HERO SECTION */}
      <section className="mealprep-hero">
        <div className="hero-left">
          <h1>Healthy Meal Prep Delivered Fresh</h1>
          <p>
            Nutritious meals crafted by top chefs — delivered to your doorstep.
            Choose a plan, enjoy fresh weekly menus, and eat better every day.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>

        <div className="hero-right">
          <img
            src="/path/to/mealprep.png"
            alt="Meal Prep"
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="mealprep-features">
        <div className="feature-card">
          <h3>Fresh Ingredients</h3>
          <p>Sourced from trusted organic suppliers.</p>
        </div>

        <div className="feature-card">
          <h3>Custom Meal Plans</h3>
          <p>Choose meal plans that match your lifestyle.</p>
        </div>

        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Daily and weekly delivery options available.</p>
        </div>
      </section>

      {/* MENU SELECTOR */}
      <section className="menu-selector">
        <h2>Select Your Weekly Menu</h2>

        <div className="days-scroll">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <div key={i} className="day-box">{day}</div>
          ))}
        </div>
      </section>

      {/* MEAL CARDS */}
      <section className="meal-cards">
        <h2>Featured Meals</h2>

        <div className="meal-grid">
          {[1, 2, 3, 4].map((m) => (
            <div key={m} className="meal-card">
              <div className="meal-img"></div>
              <h4>Grilled Chicken & Veggies</h4>
              <p>High-protein, low-carb, fresh cooked.</p>
              <button className="add-btn">Add to Plan</button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
