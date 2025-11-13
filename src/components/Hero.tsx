import heroImage from "../assets/Images/herovan2-removebg-preview.png";
import "../index.css"; // import normal CSS

const Hero = () => {
  return (
    <section className="hero">
      {/* Text Section */}
      <div className="hero-text">
        <h1>
          Deliver. <br />
          Order. <br />
          Feel healthy.
        </h1>
        <p>
        HealthChow goes beyond meals — we deliver essential health supplies and connect you instantly with doctors who care.
        </p>
        <div className="hero-buttons">
          <button className="deliver">Start Delivering</button>
          <button className="order">Start Ordering</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
