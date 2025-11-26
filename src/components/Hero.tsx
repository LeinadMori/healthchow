import heroImage from "../assets/Images/ChatGPT_Image_Nov_20__2025__12_10_39_PM-removebg-preview.png";
import "../index.css"; // import normal CSS
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      {/* Text Section */}
      <div className="hero-text">
        <h1>
        Order. <br />
          Deliver. <br />
          Feel healthy.
        </h1>
        <p>
        HealthChow goes beyond meals — we deliver essential health supplies and connect you instantly with doctors who care.
        </p>
        <div className="hero-buttons">
  <Link to="/delivery">
    <button className="deliver">Start Delivering</button>
  </Link>
  <Link to="/order">
    <button className="order">Start Ordering</button>
  </Link>
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
