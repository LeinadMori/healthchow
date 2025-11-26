import React from "react";
import "../signup.css";
import sampleImage from "../assets/Images/herovan-removebg-preview.png"; // Replace with your image


const SignIn = () => {
return (
<div className="auth-wrapper">
<div className="auth-image">
<img src={sampleImage} alt="Auth visual" />
</div>


<div className="auth-form">
<h2>Sign In</h2>


<div className="social-btns">
<button className="google">Sign in with Google</button>
<button className="facebook">Sign in with Facebook</button>
</div>


<p className="or">or sign in with your email address</p>


<form>
<input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<button className="submit-btn">Sign In</button>
</form>


<p className="redirect">Don't have an account? <a href="#">Sign up</a></p>
</div>
</div>
);
};


export default SignIn;