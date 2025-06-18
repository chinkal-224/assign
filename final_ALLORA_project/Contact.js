import React, { useEffect } from "react";
import "./Contact.css";
import StarryBackground from "../components/StarryBackground";

const Contact = () => {
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
    <div className="contact-container">
      <StarryBackground />
      <div className="shooting-stars" />

      <div className="planet planet1">🪐</div>
      <div className="planet planet3">🛸</div>
      <div className="planet planet4">🌕</div>

      <div className="contact-content">
        <h1 className="contact-heading">Contact Us 💌</h1>

        <div className="contact-item">
          <h3>Email</h3>
          <p><a href="mailto:support@allora.com">support@allora.com</a></p>
        </div>

        <div className="contact-item">
          <h3>Customer Support</h3>
          <p><a href="tel:+919999999999">+91 99999 99999</a></p>
        </div>

        <div className="contact-item">
          <h3>We're here for you</h3>
          <p>Have a suggestion, issue, or just want to say hi? Reach out anytime — our space crew is listening 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
