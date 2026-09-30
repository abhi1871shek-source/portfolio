import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import HeroName from '../HeroName';
import characterImg from '../assets/character.png';

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section hero" style={{ position: 'relative' }}>
      {/* 1. HeroName Component (z-index 1) */}
      <HeroName />

      {/* Hero Content Container */}
      <div className="hero-container">
        {/* Left Column Block (Tagline, View work button, Mobile Badge) */}
        <div className="hero-bottom-left">
          <p className="hero-tagline">
            Designs that inspire. Ideas that connect.
          </p>
          <button
            className="hero-cta-btn"
            onClick={() => scrollToSection('projects')}
          >
            <span>View work</span>
            <ArrowUpRight className="hero-btn-arrow" />
          </button>

          {/* Mobile Badge Container */}
          <div className="hero-mobile-badge-wrap">
            <div className="hero-badge">
              <span>Available for</span>
              <span className="badge-dot" />
              <strong>Freelance projects</strong>
            </div>
          </div>
        </div>

        {/* Right Column: Character Container */}
        <div className="hero-art hero-character-wrapper">
          <img
            src={characterImg}
            alt="Abhishek K Character"
            className="hero-character-img"
          />
        </div>

        {/* Desktop Badge */}
        <div className="hero-bottom-right hero-desktop-badge-wrap">
          <div className="hero-badge">
            <span>Available for</span>
            <span className="badge-dot" />
            <strong>Freelance projects</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
