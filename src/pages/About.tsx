import "../index.css"; // Create this file separately
import foodImg from "../assets/Images/photo-1638366170204-d5b084f93872.avif"; // adjust the path
import healthImg from "../assets/Images/image.png" // optional if needed

const About = () => {
  return (
    <div className="features-container">

      {/* SECTION 1 — ABOUT */}
      <section className="about-section">
        <div className="about-image">
          <img src={foodImg} alt="About" />
        </div>

        <div className="about-text">
          <h2>Your Food & Health in One Place</h2>
          <p>
          HealthChow is a unified platform designed to support your well-being from every angle. We combine convenient access to nutritious meals with fast, reliable medical services — all in one place. Whether you’re ordering healthy food, getting your prescriptions delivered, or chatting with a doctor, HealthChow makes staying healthy easier, smarter, and stress-free.

          We help you take care of your daily health needs by offering:

          Fresh, nutritious meals tailored for energy, weight goals, or medical conditions

          Fast delivery of medicines and health essentials, right to your doorstep

          Easy access to healthcare professionals through secure online chat

          Personalized health tools, including records, reminders, and meal plans

          With HealthChow, you don’t have to manage your food and health separately — everything you need to live well is brought together in one seamless experience.
          </p>
        </div>
      </section>

      {/* SECTION 2 — TWO PILLARS */}
      <section className="pillars-section">
        <div className="pillar food">
          <h3>Food Services</h3>
          <ul>
            <li>🍽️ Quick Delivery – Fresh meals in 30–45 min</li>
            <li>🥗 Healthy Meal Plans – Dietitian approved</li>
            <li>⚠️ Allergy Filters – Personalized for your health</li>
          </ul>
        </div>

        <div className="pillar health">
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
      <h2>INFOGRAPHIC<br/>TEMPLATE</h2>
    </div>
  </div>

  <div className="right-items">
    <div className="info-card">
      <div className="number">01</div>
      <div className="icon">🔍</div>
      <div className="text">
        <h4>LOREM IPSUM</h4>
        <p>Short supporting description goes here.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">02</div>
      <div className="icon">💡</div>
      <div className="text">
        <h4>LOREM IPSUM</h4>
        <p>Short supporting description goes here.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">03</div>
      <div className="icon">🎯</div>
      <div className="text">
        <h4>LOREM IPSUM</h4>
        <p>Short supporting description goes here.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">04</div>
      <div className="icon">📈</div>
      <div className="text">
        <h4>LOREM IPSUM</h4>
        <p>Short supporting description goes here.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">05</div>
      <div className="icon">⚙️</div>
      <div className="text">
        <h4>LOREM IPSUM</h4>
        <p>Short supporting description goes here.</p>
      </div>
    </div>

    <div className="info-card">
      <div className="number">06</div>
      <div className="icon">💰</div>
      <div className="text">
        <h4>LOREM IPSUM</h4>
        <p>Short supporting description goes here.</p>
      </div>
    </div>
  </div>
</div>

      </section>

    </div>
  );
};

export default About;