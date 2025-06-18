import React, { useEffect } from "react";
import "./About.css";
import StarryBackground from "../components/StarryBackground";

const About = () => {
  useEffect(() => {
    const container = document.querySelector(".shooting-stars");
    if (container) {
      for (let i = 0; i < 30; i++) {
        const star = document.createElement("div");
        star.className = "star-shooting";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(star);
      }
    }
  }, []);

  return (
    <div className="about-container">
      <StarryBackground />
      <div className="shooting-stars" />

      <div className="planet planet1">🪐</div>
    
      <div className="planet planet3">🛸</div>
      <div className="planet planet4">🌕</div>

      <div className="about-content">
        <h1 className="about-heading">About Allora 🌠</h1>
        <p className="about-text">
          Welcome to <span className="highlight">Allora</span> — your personal space to track your emotions, journal your thoughts, and vibe with mood-based music.
        </p>
        <p className="about-text">
          Whether you're feeling <span className="highlight">excited</span>, <span className="highlight">anxious</span>, <span className="highlight">loved</span>, or just unsure — Allora helps you tune in, write it out, and reflect.
        </p>
        <p className="about-text">
          Our mission is to make emotional wellbeing ✨ expressive, easy & accessible. Let your moods orbit your mind like stars — we’ll keep track of them for you 🌌
        </p>
        <p className="about-signoff">Stay mindful. Stay you. 🌈</p>
      </div>
    </div>
  );
};

export default About;
