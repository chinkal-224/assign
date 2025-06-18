// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const getUsername = (email) => email?.split("@")[0];

  return (
    <nav className="allora-navbar">
      <div className="nav-left" onClick={() => navigate("/")}>
        <span className="logo-text">Allora</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        {!user ? (
          <button
            className="nav-login-btn"
            onClick={() => navigate("/login-signup")}
          >
            Login | Signup
          </button>
        ) : (
          <div className="nav-user-section">
            <span className="nav-username">👤 {getUsername(user.email)}</span>
            <button className="nav-logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
