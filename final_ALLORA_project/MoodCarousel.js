// src/components/MoodCarousel.js
import React, { useState, useEffect } from "react";
import "./MoodCarousel.css";

const moods = [
  { name: "Happy", emoji: "😊" },
  { name: "Sad", emoji: "😢" },
  { name: "Excited", emoji: "🤩" },
  { name: "Angry", emoji: "😡" },
  { name: "Loved", emoji: "😍" },
  { name: "Anxious", emoji: "😨" },
];

const MoodCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % moods.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <div className="emoji-bounce">{moods[index].emoji}</div>
      <p className="mood-name">{moods[index].name}</p>
    </div>
  );
};

export default MoodCarousel;
