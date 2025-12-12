import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MealPrepPage.css";

export default function MealPrepPage() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [selectedDay, setSelectedDay] = useState("Mon");

  const [meals, setMeals] = useState([
    { id: 1, name: "Grilled Chicken & Veggies", price: 1400 },
    { id: 2, name: "Salmon & Quinoa", price: 1500 },
    { id: 3, name: "Beef Stir Fry", price: 1300 },
    { id: 4, name: "Vegetarian Bowl", price: 1200 },
  ]);

  // Store meals PER DAY
  const [plan, setPlan] = useState({
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  });

  // Add/remove meal per selected day
  const toggleMeal = (meal) => {
    setPlan((prev) => {
      const alreadyAdded = prev[selectedDay].some((m) => m.id === meal.id);

      // REMOVE meal
      if (alreadyAdded) {
        return {
          ...prev,
          [selectedDay]: prev[selectedDay].filter((m) => m.id !== meal.id),
        };
      }

      // ADD meal
      return {
        ...prev,
        [selectedDay]: [...prev[selectedDay], meal],
      };
    });
  };

  // Calculate summary
  const deliveryFee = 800;
  const serviceCharge = 150;

  const subtotal = plan[selectedDay].reduce((sum, m) => sum + m.price, 0);
  const total = subtotal + deliveryFee + serviceCharge;

  return (
    <div className="mealprep-page">

      {/* HERO SECTION */}
      <section className="mealprep-hero">
        <div className="hero-left">
          <h1>
            Fresh, Healthy Meals <br /> Delivered Weekly
          </h1>

          <p>
            Choose from chef-crafted meals, delivered fresh to your door.
            Heat in minutes and enjoy nutrition-packed meals.
          </p>

          <Link to="/get-started">
            <button className="hero-btn">Get Started</button>
          </Link>
        </div>
      </section>

      <div className="curve-divider"></div>

      {/* WHY CHOOSE US */}
      <section className="why-choose container">
        <h2 className="section-title">How We Work & What You Get</h2>
        <div className="choose-cards">
          <div className="choose-card"><h3>Choose Meals</h3></div>
          <div className="choose-card"><h3>Delivered Fresh</h3></div>
          <div className="choose-card"><h3>Heat & Eat</h3></div>
        </div>
      </section>

      {/* DAY SELECTOR */}
      <section className="menu-selector container">
        <h2 className="section-title">Choose Your Week</h2>

        <div className="days-scroll">
          {days.map((day) => (
            <div
              key={day}
              className={`day-bubble ${selectedDay === day ? "active-day" : ""}`}
              onClick={() => setSelectedDay(day)}
            >
              <span>{day}</span>
            </div>
          ))}
        </div>

        <p className="day-message">
          Planning meals for: <strong>{selectedDay}</strong>  
          ({plan[selectedDay].length} selected)
        </p>
      </section>

      {/* MEALS */}
      <section className="meal-cards container">
        <h2 className="section-title">Meals for {selectedDay}</h2>

        <div className="meal-grid">
          {meals.map((meal) => {
            const isAdded = plan[selectedDay].some((m) => m.id === meal.id);

            return (
              <div key={meal.id} className="meal-card">
                <div className="meal-img" />
                <h4>{meal.name}</h4>
                <p>High-protein, low-carb, chef-prepared.</p>

                <button
                  className={`add-btn ${isAdded ? "added" : ""}`}
                  onClick={() => toggleMeal(meal)}
                >
                  {isAdded ? "Added ✔ (Tap to remove)" : "Add to Plan"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* SUMMARY */}
      <section className="summary-section">
        <h3>{selectedDay} Summary</h3>

        <div className="summary-box">
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₦{subtotal}</strong>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <strong>₦{deliveryFee}</strong>
          </div>
          <div className="summary-row">
            <span>Service Charge</span>
            <strong>₦{serviceCharge}</strong>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₦{total}</strong>
          </div>
        </div>

        <button className="next-btn">Continue →</button>
      </section>
    </div>
  );
}
