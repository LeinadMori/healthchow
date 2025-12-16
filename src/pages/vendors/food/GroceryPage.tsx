import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    { id: 1, name: "Fresh Tomatoes", price: 4.5 },
    { id: 2, name: "Organic Bananas", price: 3.2 },
    { id: 3, name: "Green Peppers", price: 2.8 },
    { id: 4, name: "Carrots Pack", price: 2.4 },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const toggleCart = () => setCartOpen(!isCartOpen);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      // Remove if exists
      setCart(cart.filter((item) => item.id !== product.id));
      showNotification(`${product.name} removed from cart`);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      showNotification(`${product.name} successfully added to cart! ✓`);
      setCartOpen(true); // auto-open cart when item added
    }
  };

  const incrementQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (id) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
      }
      return item;
    }));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="grocery-page" style={styles.groceryPage}>
      {/* SUCCESS NOTIFICATION */}
      {notification && (
        <div style={styles.notification}>
          {notification}
        </div>
      )}

      {/* HERO SECTION */}
      <section style={styles.groceryHero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Farm Fresh Organic</h1>
          <h1 style={styles.heroTitle}>Vegetables & Fruits</h1>
          <p style={styles.heroSubtitle}>Delivered fresh from the farm to your kitchen.</p>
          <Link to="/get-started">
            <button style={styles.shopButton}>Shop Now</button>
          </Link>
          <button onClick={toggleCart} style={styles.cartToggleBtn}>
            🛒 {cart.length > 0 ? cart.length : ""}
          </button>
        </div>

        <div style={styles.heroImage}>
          <div style={styles.imagePlaceholder}>🥗</div>
        </div>
      </section>

      {/* TOP CATEGORIES */}
      <section style={styles.topCategories}>
        <h2 style={styles.sectionTitle}>Top Categories</h2>
        <div style={styles.categoriesGrid}>
          {categories.map((cat, i) => (
            <div style={styles.categoryCard} key={i}>
              <div style={styles.catIcon}>{cat.icon}</div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={styles.productSection}>
        <h2 style={styles.sectionTitle}>Fresh Products</h2>
        <div style={styles.productGrid}>
          {products.map((prod) => {
            const inCart = cart.some(item => item.id === prod.id);
            return (
              <div style={styles.productCard} key={prod.id}>
                <div style={styles.productImg}></div>
                <p style={styles.productName}>{prod.name}</p>
                <p style={styles.productPrice}>${prod.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(prod)}
                  style={{
                    ...styles.addButton,
                    ...(inCart ? styles.addedButton : {})
                  }}
                >
                  {inCart ? "Added ✔ Tap to remove" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* DEAL OF THE WEEK */}
      <section style={styles.dealSection}>
        <div style={styles.dealCard}>
        <h3 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', color: '#78350f' }}>
      🔥 Deal of the Week 🔥</h3>
      <p style={{ fontSize: '22px', marginBottom: '25px', color: '#92400e', fontWeight: '500' }}>
      Up to 25% off on selected organic products!</p>
          <button style={styles.dealButton}>Shop Deals</button>
        </div>
      </section>

      {/* SLIDE-OUT CART - Only shows if cart has items */}
      {cart.length > 0 && (
        <div style={{
          ...styles.cartDrawer,
          ...(isCartOpen ? styles.cartDrawerOpen : {})
        }}>
          <div style={styles.cartHeader}>
            <h3>Your Cart</h3>
            <button onClick={toggleCart} style={styles.closeButton}>✖</button>
          </div>
          <div style={styles.cartItems}>
            {cart.map(item => (
              <div key={item.id} style={styles.cartItem}>
                <p style={styles.cartItemName}>{item.name}</p>
                <div style={styles.cartControls}>
                  <button onClick={() => decrementQuantity(item.id)} style={styles.controlButton}>-</button>
                  <span style={styles.quantity}>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)} style={styles.controlButton}>+</button>
                </div>
                <p style={styles.cartItemPrice}>${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => addToCart(item)} style={styles.removeButton}>Remove</button>
              </div>
            ))}
          </div>

          <div style={styles.cartSummary}>
            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <div style={styles.summaryRow}>
              <span>Delivery Fee</span>
              <strong>${deliveryFee.toFixed(2)}</strong>
            </div>
            <div style={styles.summaryTotal}>
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button style={styles.checkoutBtn}>Checkout →</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  groceryPage: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  },
  notification: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#10b981',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 1000,
    fontWeight: '500',
  },
  groceryHero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px 8%',
    backgroundColor: '#FFD699',
    flexWrap: 'wrap',
    marginBottom: '70px',
    marginTop: '-120px',
  },

  heroText: {
    flex: 1,
    minWidth: '300px',
    color: '#1c1c1c',
    
  },
  heroTitle: {
    fontSize: '45px',
    fontWeight: '800',
    color: '#1c1c1c',
    marginBottom: '70',
    marginTop: '-120',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '30px',
  },
  shopButton: {
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: '14px 32px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    marginRight: '15px',
  },
  cartToggleBtn: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '14px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  heroImage: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: '300px',
    height: '300px',
    backgroundColor: '#e5e7eb',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '120px',
  },
  topCategories: {
    padding: '60px 40px',
    backgroundColor: '#f9fafb',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#1f2937',
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '20px',
  },
  categoryCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  catIcon: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  productSection: {
    padding: '60px 40px',
    backgroundColor: '#fff',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  },
  productCard: {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  productImg: {
    width: '100%',
    height: '180px',
    backgroundColor: '#e5e7eb',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#1f2937',
  },
  productPrice: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: '15px',
  },
  addButton: {
    width: '100%',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
  },
  addedButton: {
    backgroundColor: '#6b7280',
  },
  dealSection: {
    padding: '60px 40px',
    backgroundColor: '#f9fafb',
  },
  dealCard: {
    backgroundColor: '#fef3c7',
    padding: '40px',
    textAlign: 'center',
  },
  dealButton: {
    backgroundColor: '#f59e0b',
    color: 'white',
    border: 'none',
    padding: '14px 32px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    marginTop: '15px',
  },
  cartDrawer: {
    position: 'fixed',
    right: '-400px',
    top: 0,
    width: '400px',
    height: '100vh',
    backgroundColor: 'white',
    boxShadow: '-4px 0 12px rgba(0,0,0,0.15)',
    transition: 'right 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 999,
  },
  cartDrawerOpen: {
    right: 0,
  },
  cartHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #e5e7eb',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#6b7280',
  },
  cartItems: {
    flex: 1,
    overflowY: 'auto',
    padding: '20px',
  },
  cartItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '15px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  cartItemName: {
    fontWeight: '600',
    color: '#1f2937',
  },
  cartControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  controlButton: {
    width: '32px',
    height: '32px',
    backgroundColor: '#e5e7eb',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  quantity: {
    minWidth: '30px',
    textAlign: 'center',
    fontWeight: '600',
  },
  cartItemPrice: {
    fontWeight: 'bold',
    color: '#10b981',
  },
  removeButton: {
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  cartSummary: {
    padding: '20px',
    borderTop: '1px solid #e5e7eb',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
    paddingTop: '15px',
    borderTop: '2px solid #e5e7eb',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  checkoutBtn: {
    width: '100%',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    marginTop: '20px',
  }
}