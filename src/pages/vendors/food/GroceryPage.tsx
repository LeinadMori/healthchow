import React from "react";
import "./GroceryPage.css";

export default function GroceryPage() {
  const categories = [
    { name: "Vegetables", icon: "🥬" },
    { name: "Fruits", icon: "🍎" },
    { name: "Dairy", icon: "🥛" },
    { name: "Organic", icon: "🌱" },
    { name: "Bakery", icon: "🍞" },
    { name: "Snacks", icon: "🍪" },
    { name: "Beverages", icon: "🥤" },
  ];

  const products = [
    { name: "Fresh Tomatoes", price: "$4.50" },
    { name: "Organic Bananas", price: "$3.20" },
    { name: "Green Peppers", price: "$2.80" },
    { name: "Carrots Pack", price: "$2.40" },
  ];

  return (
    <div className="grocery-page">
      {/* HERO SECTION */}
      <section className="grocery-hero">
        <div className="hero-text">
          <h1>Farm Fresh Organic</h1>
          <h1>Vegetables & Fruits</h1>
          <p>Delivered fresh from the farm to your kitchen.</p>
          <button>Shop Now</button>
        </div>

        <div className="hero-image">
          <img src="/grossry.png" alt="Fresh groceries" />
        </div>
      </section>

      {/* TOP CATEGORIES */}
      <section className="top-categories">
        <h2>Top Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div className="category-card" key={i}>
              <div className="cat-icon">{cat.icon}</div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="product-section">
        <h2>Fresh Products</h2>
        <div className="product-grid">
          {products.map((prod, i) => (
            <div className="product-card" key={i}>
              <div className="product-img"></div>
              <p className="product-name">{prod.name}</p>
              <p className="product-price">{prod.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* DEAL OF THE WEEK */}
      <section className="deal-section">
        <div className="deal-card">
          <h3>Deal of the Week</h3>
          <p>Up to 25% off on selected organic products!</p>
          <button>Shop Deals</button>
        </div>
      </section>
    </div>
  );
}
