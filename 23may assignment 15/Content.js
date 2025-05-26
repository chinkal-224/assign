import React from 'react';
import Sidebar from './Sidebar';

const generateText = (count) => {
  const textArray = [
    "The smaller your reality, the more convinced you are that you know everything.",
    "If the facts don't fit the theory, change the facts.",
    "The past has no power over the present moment.",
    "This, too, will pass.",
    "You will not be punished for your anger, you will be punished by your anger.",
    "Peace comes from within. Do not seek it without.",
    "The most important moment of your life is now..."
  ];
  return Array.from({ length: count }, () => textArray[Math.floor(Math.random() * textArray.length)]).join(" ");
};

const Content = () => (
  <div id="content">
    <div id="content-inner">
      <main id="contentbar">
        <div className="article">
          <p>{generateText(12)}</p>
        </div>
      </main>
      <Sidebar />
      <div className="clr"></div>
    </div>
  </div>
);

export default Content;
