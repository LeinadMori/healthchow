import React, { useState } from "react";

export default function MealPrepPage() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const categories = [
    { name: "Rice Dishes", icon: "🍚" },
    { name: "Soups", icon: "🍲" },
    { name: "Swallow", icon: "🍛" },
    { name: "Proteins", icon: "🍗" },
    { name: "Breakfast", icon: "🥞" },
    { name: "Snacks", icon: "🥙" },
    { name: "Drinks", icon: "🥤" },
  ];

  const products = [
    { id: 1, name: "Jollof Rice & Chicken", price: 3500 },
    { id: 2, name: "Fried Rice & Plantain", price: 3200 },
    { id: 3, name: "Egusi Soup & Pounded Yam", price: 4000 },
    { id: 4, name: "Afang Soup & Eba", price: 3800 },
    { id: 5, name: "Bitterleaf Soup & Semovita", price: 3500 },
    { id: 6, name: "Efo Riro & Amala", price: 3600 },
    { id: 7, name: "Edikang Ikong & Fufu", price: 4200 },
    { id: 8, name: "Pepper Soup & Agidi", price: 2800 },
    { id: 9, name: "Ofe Nsala & Garri", price: 3400 },
    { id: 10, name: "Okro Soup & Eba", price: 3000 },
    { id: 11, name: "Coconut Rice & Beef", price: 3800 },
    { id: 12, name: "Native Rice & Fish", price: 3500 },
  ];

  const [selectedDay, setSelectedDay] = useState("Mon");
  const [plan, setPlan] = useState({
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  });
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
    setPlan((prev) => {
      const alreadyAdded = prev[selectedDay].some((item) => item.id === product.id);

      if (alreadyAdded) {
        // Remove if exists
        showNotification(`${product.name} removed from ${selectedDay}'s plan`);
        return {
          ...prev,
          [selectedDay]: prev[selectedDay].filter((item) => item.id !== product.id),
        };
      } else {
        // Add to plan
        showNotification(`${product.name} successfully added to ${selectedDay}'s plan! ✓`);
        setCartOpen(true);
        return {
          ...prev,
          [selectedDay]: [...prev[selectedDay], { ...product, quantity: 1 }],
        };
      }
    });
  };

  const incrementQuantity = (id) => {
    setPlan((prev) => ({
      ...prev,
      [selectedDay]: prev[selectedDay].map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  };

  const decrementQuantity = (id) => {
    setPlan((prev) => ({
      ...prev,
      [selectedDay]: prev[selectedDay].map(item => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(item.quantity - 1, 1) };
        }
        return item;
      }),
    }));
  };

  const cart = plan[selectedDay];
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 800 : 0;
  const serviceCharge = subtotal > 0 ? 150 : 0;
  const total = subtotal + deliveryFee + serviceCharge;

  return (
    <div className="mealprep-page" style={styles.mealPrepPage}>
      {/* SUCCESS NOTIFICATION */}
      {notification && (
        <div style={styles.notification}>
          {notification}
        </div>
      )}

      {/* HERO SECTION */}
      <section style={styles.mealPrepHero}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Delivered Weekly</h1>
          <p style={styles.heroSubtitle}>
            Choose from chef-crafted meals, delivered fresh to your door. 
            Heat in minutes and enjoy nutrition-packed meals.
          </p>
          <button style={styles.shopButton}>Get Started</button>
          <button onClick={toggleCart} style={styles.cartToggleBtn}>
            🛒 {cart.length > 0 ? cart.length : ""}
          </button>
        </div>

        <div style={styles.heroImage}>
          <div style={styles.imagePlaceholder}>🍛</div>
        </div>
      </section>

      {/* TOP CATEGORIES */}
      <section style={styles.topCategories}>
        <h2 style={styles.sectionTitle}>Meal Categories</h2>
        <div style={styles.categoriesGrid}>
          {categories.map((cat, i) => (
            <div style={styles.categoryCard} key={i}>
              <div style={styles.catIcon}>{cat.icon}</div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DAY SELECTOR */}
      <section style={styles.daySelector}>
        <h2 style={styles.sectionTitle}>Choose Your Day</h2>
        
        <div style={styles.daysScroll}>
          {days.map((day) => (
            <div
              key={day}
              style={{
                ...styles.dayBubble,
                ...(selectedDay === day ? styles.activeDayBubble : {})
              }}
              onClick={() => setSelectedDay(day)}
            >
              <span>{day}</span>
            </div>
          ))}
        </div>

        <p style={styles.dayMessage}>
          Planning meals for: <strong>{selectedDay}</strong> ({plan[selectedDay].length} selected)
        </p>
      </section>

      {/* PRODUCTS */}
      <section style={styles.productSection}>
        <h2 style={styles.sectionTitle}>Meals for {selectedDay}</h2>
        <div style={styles.productGrid}>
          {products.map((prod) => {
            const inCart = plan[selectedDay].some(item => item.id === prod.id);
            return (
              <div style={styles.productCard} key={prod.id}>
                <div style={styles.productImg}></div>
                <p style={styles.productName}>{prod.name}</p>
                <p style={styles.productDesc}>Chef-prepared, high-protein, ready to heat</p>
                <p style={styles.productPrice}>₦{prod.price.toLocaleString()}</p>
                <button
                  onClick={() => addToCart(prod)}
                  style={{
                    ...styles.addButton,
                    ...(inCart ? styles.addedButton : {})
                  }}
                >
                  {inCart ? "Added ✔ Tap to remove" : "Add to Plan"}
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
            🔥 Weekly Special 🔥
          </h3>
          <p style={{ fontSize: '22px', marginBottom: '25px', color: '#92400e', fontWeight: '500' }}>
            Get 20% off on all soup combos this week!
          </p>
          <button style={styles.dealButton}>View Deals</button>
        </div>
      </section>

      {/* SLIDE-OUT CART - Only shows if cart has items */}
      {cart.length > 0 && (
        <div style={{
          ...styles.cartDrawer,
          ...(isCartOpen ? styles.cartDrawerOpen : {})
        }}>
          <div style={styles.cartHeader}>
            <h3>{selectedDay}'s Cart</h3>
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
                <p style={styles.cartItemPrice}>₦{(item.price * item.quantity).toLocaleString()}</p>
                <button onClick={() => addToCart(item)} style={styles.removeButton}>Remove</button>
              </div>
            ))}
          </div>

          <div style={styles.cartSummary}>
            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <strong>₦{subtotal.toLocaleString()}</strong>
            </div>
            <div style={styles.summaryRow}>
              <span>Delivery Fee</span>
              <strong>₦{deliveryFee.toLocaleString()}</strong>
            </div>
            <div style={styles.summaryRow}>
              <span>Service Charge</span>
              <strong>₦{serviceCharge.toLocaleString()}</strong>
            </div>
            <div style={styles.summaryTotal}>
              <span>Total</span>
              <strong>₦{total.toLocaleString()}</strong>
            </div>
            <button style={styles.checkoutBtn}>Checkout →</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  mealPrepPage: {
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
  mealPrepHero: {
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
    margin: '0 0 10px 0',
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
  daySelector: {
    padding: '60px 40px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  daysScroll: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  dayBubble: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    border: '3px solid transparent',
  },
  activeDayBubble: {
    backgroundColor: '#10b981',
    color: 'white',
    border: '3px solid #059669',
    transform: 'scale(1.1)',
  },
  dayMessage: {
    fontSize: '18px',
    color: '#6b7280',
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
  productDesc: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '10px',
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
    padding: '80px 40px',
    backgroundColor: '#fff',
    marginTop: '40px',
    marginBottom: '40px',
  },
  dealCard: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    padding: '70px 50px',
    borderRadius: '24px',
    textAlign: 'center',
    boxShadow: '0 15px 40px rgba(245, 158, 11, 0.3)',
    border: '4px solid #d97706',
  },
  dealButton: {
    backgroundColor: '#92400e',
    color: 'white',
    border: 'none',
    padding: '16px 40px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '18px',
    marginTop: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
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
  },
};