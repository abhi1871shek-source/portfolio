import React from 'react';
import './HeroName.css';

const HeroName = () => {
  return (
    <div className="hero-name" aria-hidden="true">
      {/* Background Orb Glow */}
      <div className="orb" />

      {/* Animated Ribbon Thread */}
      <svg
        className="thread"
        viewBox="0 0 1400 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="thread-base"
          d="M -100 320 C 120 120, 280 480, 440 240 C 540 80, 630 420, 750 200 C 850 50, 960 440, 1080 220 C 1180 60, 1280 380, 1500 240"
        />
        <path
          className="thread-run"
          d="M -100 320 C 120 120, 280 480, 440 240 C 540 80, 630 420, 750 200 C 850 50, 960 440, 1080 220 C 1180 60, 1280 380, 1500 240"
        />
      </svg>

      {/* Crisp Anton Typography Name Wrapper */}
      <div className="name-wrapper">
        <div className="name-line ghost ghost-top">ABHISHEK K</div>
        <div className="name-line main-title">ABHISHEK K</div>
        <div className="name-line ghost ghost-bottom">ABHISHEK K</div>
      </div>
    </div>
  );
};

export default HeroName;
