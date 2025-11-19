import "../index.css"; // Create this file separately
import foodImg from "../assets/Images/photo-1638366170204-d5b084f93872.avif"; // adjust the path
import healthImg from "../assets/Images/image.png" // optional if needed

const About = () => {
  return (
    <div className="features-container">

      {/* SECTION 1 — ABOUT */}
      <section className="about-section">
  <div className="about-left">
    <div className="about-img-large">
      <img src={foodImg} alt="Team working" />
    </div>

    <div className="about-img-small">
      <img src={foodImg} alt="Video preview" />
      <button className="play-btn">▶</button>
    </div>
  </div>

  <div className="about-right">
    <h4 className="section-label">INTRODUCTION</h4>
    <h2>Your Food & Health in One Place</h2>

    <p>
      HealthChow is a unified platform designed to support your well-being from 
      every angle. We combine convenient access to nutritious meals with fast, 
      reliable medical services — all in one place.
    </p>

    <ul className="about-list">
      <li>Fresh, nutritious meals tailored for energy, weight goals, or medical conditions</li>
      <li>Fast delivery of medicines and essentials</li>
      <li>Secure doctor chat (video or text)</li>
      <li>Personalized tools: records, reminders, meal plans</li>
    </ul>
  </div>
</section>


      {/* SECTION 2 — TWO PILLARS */}
      <section className="pillars-section">
  <div className="pillar-card food">
    <h3>Food Services</h3>
    <ul>
      <li>🍽️ Quick Delivery – Fresh meals in 30–45 min</li>
      <li>🥗 Healthy Meal Plans – Dietitian approved</li>
      <li>⚠️ Allergy Filters – Personalized for your health</li>
    </ul>
  </div>

  <div className="pillar-card health">
    <h3>Health Services</h3>
    <ul>
      <li>💊 Medicine Delivery – Same-day</li>
      <li>👨‍⚕️ Doctor Chat – Video/text consultation</li>
      <li>📁 Health Records – Safe & encrypted</li>
    </ul>
  </div>
</section>


      {/* SECTION 3 — FEATURE GRID */}
      <section className="cards-section">
        <h2>Everything You Need</h2>

        <div className="info-section">
  <div className="circle-wrapper">
    <div className="outer-ring"></div>
    <div className="inner-circle">
      <h2>Eat Well.<br/>Stay Healthy.</h2>
    </div>
  </div>

  <div className="right-items">
    <div className="info-card">
      <div className="number">01</div>
      <div className="icon">🔍</div>
      <div className="text">
        <h4>Personalized Meal Plans</h4>
        <p>Tailored meals to meet your health goals and dietary needs.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">02</div>
      <div className="icon">💡</div>
      <div className="text">
        <h4>Expert Nutrition Advice</h4>
        <p>Access guidance from certified dietitians and nutritionists.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">03</div>
      <div className="icon">🎯</div>
      <div className="text">
        <h4>Fast Medical Delivery</h4>
        <p>Get prescriptions and health essentials delivered quickly.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">04</div>
      <div className="icon">📈</div>
      <div className="text">
        <h4>Track Your Health</h4>
        <p>Monitor your wellness with tools, reminders, and records.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">05</div>
      <div className="icon">⚙️</div>
      <div className="text">
        <h4>Integrated Platform</h4>
        <p>Manage food, health, and wellness all in one place.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">06</div>
      <div className="icon">💰</div>
      <div className="text">
        <h4>Affordable Options</h4>
        <p>Nutritious meals and healthcare services at competitive prices.</p>
      </div>
    </div>
  </div>
</div>

      </section>

    </div>
  );
};

export default About;