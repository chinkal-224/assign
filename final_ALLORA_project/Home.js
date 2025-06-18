// src/pages/Home.js
import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const moods = [
  { name: "Happy", emoji: "😊" },
  { name: "Sad", emoji: "😢" },
  { name: "Excited", emoji: "🤩" },
  { name: "Angry", emoji: "😠" },
  { name: "Loved", emoji: "😍" },
  { name: "Anxious", emoji: "😰" },
];

const Home = () => {
  const navigate = useNavigate();
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const { user, logout } = useAuth();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMoodIndex((prev) => (prev + 1) % moods.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getUsername = (email) => email?.split("@")[0];

  return (
    <div className="home-page">
      <div className="hero-content">
        <div className="left-section">
          <h1 className="neon-title">Allora – Tune into your emotions</h1>
          <p className="welcome-text">Welcome to the place where we visualize your emotions.</p>
          <p className="tagline">Track your mood, write your thoughts, and vibe with music.</p>

          <div className="hero-buttons">
            {!user ? (
              <>
                <button className="btn btn-success" onClick={() => navigate("/login-signup")}>
                  Log In | Sign Up
                </button>
                <button className="btn btn-outline-light" onClick={() => navigate("/explore")}>
                  Let's Allora!
                </button>
              </>
            ) : (
              <>
                <span className="welcome-user">👤 {getUsername(user.email)}</span>
                <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>
                <button className="btn btn-outline-light" onClick={() => navigate("/explore")}>
                  Let’s Allora!
                </button>
              </>
            )}
          </div>
        </div>

        <div className="right-section">
          <div className="bouncing-emoji">
            <span className="emoji">{moods[currentMoodIndex].emoji}</span>
            <p className="mood-name">{moods[currentMoodIndex].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
