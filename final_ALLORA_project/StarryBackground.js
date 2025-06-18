import React, { useEffect } from "react";
import "./StarryBackground.css";

const StarryBackground = () => {
  useEffect(() => {
    const starContainer = document.querySelector(".dynamic-stars");
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="starry-bg">
      <div className="dynamic-stars"></div>

      {/* Planets Floating */}
      <div className="planet planet1">🪐</div>
      <div className="planet planet2">🌎</div>
      <div className="planet planet3">🛸</div>
    </div>
  );
};

export default StarryBackground;
