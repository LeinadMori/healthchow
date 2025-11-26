import React from "react";
import "../signup.css";
import sampleImage from "../assets/Images/herovan-removebg-preview.png"; // same style image

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-image">
        <img src={sampleImage} alt="Login visual" />
      </div>

      <div className="auth-form">
        <h2>Login</h2>

        <div className="social-btns">
          <button className="google">Login with Google</button>
          <button className="facebook">Login with Facebook</button>
        </div>

        <p className="or">or login with your email</p>

        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="submit-btn">Login</button>
        </form>

        <p className="redirect">
          Don't have an account? <a href="/signin">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;