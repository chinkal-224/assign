// src/pages/LoginSignup.js
import React, { useState } from "react";
import "./LoginSignup.css";
import StarryBackground from "../components/StarryBackground";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({ id: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (isSignup && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/${isSignup ? "signup" : "login"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      login(data.user, data.token);
      alert(`${isSignup ? "Signup" : "Login"} successful!`);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-signup-container">
      <StarryBackground />
      <div className="orbit-rings">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="planet">🪐</div>
      </div>

      <form className="form-card" onSubmit={handleSubmit}>
        <h2>{isSignup ? "Sign Up" : "Log In"}</h2>

        <input
          type="text"
          name="id"
          placeholder="Enter your ID"
          value={formData.id}
          onChange={handleChange}
          required
        />

        {/* ✅ Email field always visible now */}
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {isSignup && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}

        <button type="submit" className="glow-button">
          {isSignup ? "Sign Up" : "Log In"}
        </button>

        <p className="switch-text" onClick={toggleForm}>
          {isSignup ? "Already have an account? Log In" : "New here? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default LoginSignup;
