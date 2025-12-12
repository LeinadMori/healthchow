import React from "react";
import "./Cuisine.css";

export default function FoodRecipes() {
  return (
    <div className="food-recipes-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Simple & Tasty Recipes</h1>
          <p>Fresh, delicious, and easy-to-make meals crafted for everyone.</p>
          <button className="hero-btn">Get Started</button>
        </div>
        <img
          src="/images/hero-meal.png"
          alt="Delicious Food"
          className="hero-img"
        />
      </section>

      {/* Featured Recipes */}
      <section className="featured-recipes">
        <h2>Our Recipes</h2>
        <div className="recipe-grid">
          <div className="recipe-card">
            <img src="/images/recipe1.png" alt="Recipe" />
            <h3>Spicy Asian Noodles</h3>
            <p>A simple yet mouth-watering noodle bowl.</p>
          </div>
          <div className="recipe-card">
            <img src="/images/recipe2.png" alt="Recipe" />
            <h3>Fresh Veggie Salad</h3>
            <p>Light, healthy and full of flavor.</p>
          </div>
          <div className="recipe-card">
            <img src="/images/recipe3.png" alt="Recipe" />
            <h3>Classic Curry Bowl</h3>
            <p>Rich, warm and absolutely unforgettable.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Kitchen Services</h2>
        <div className="service-grid">
          <div className="service-item">
            <h4>Quality Food</h4>
            <p>Prepared with fresh ingredients for your wellbeing.</p>
          </div>
          <div className="service-item">
            <h4>Healthy Meals</h4>
            <p>Well-balanced dishes crafted by nutrition-minded cooks.</p>
          </div>
          <div className="service-item">
            <h4>Ingredients</h4>
            <p>Only natural and high-quality components used.</p>
          </div>
          <div className="service-item">
            <h4>Easy Recipes</h4>
            <p>Follow simple steps and cook like a pro.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story">
        <h2>Discover Our Story</h2>
        <p>
          We believe in food that nourishes the body and excites the senses.
          From everyday meals to gourmet treats, our passion is delivering fresh,
          tasty, and accessible recipes to your kitchen.
        </p>
      </section>
    </div>
  );
}
