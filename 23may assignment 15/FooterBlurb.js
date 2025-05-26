import React from 'react';

const generateText = () => {
  const textArray = [
    "The smaller your reality, the more convinced you are that you know everything.",
    "If the facts don't fit the theory, change the facts.",
    "The past has no power over the present moment.",
    "This, too, will pass.",
    "Peace comes from within. Do not seek it without.",
    "The most important moment of your life is now..."
  ];
  return textArray[Math.floor(Math.random() * textArray.length)];
};

const FooterBlurb = () => (
  <div id="footerblurb">
    <div id="footerblurb-inner">
      {[1, 2, 3].map((_, i) => (
        <div className="column" key={i}>
          <h2><span>Heading</span></h2>
          <p>{generateText()}</p>
        </div>
      ))}
      <div className="clr"></div>
    </div>
  </div>
);

export default FooterBlurb;
