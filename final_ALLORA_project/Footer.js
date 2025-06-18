import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="allora-footer">
      <p className="footer-text">
        Made with <span className="heart">❤️</span> and stardust ✨ by the Allora Team
      </p>
      <p className="footer-tagline">
        Tune into your emotions. Reflect. Glow. 🌌
      </p>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Allora. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
