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

      {/* 2. Character Container (z-index 2) */}
      <div className="hero-art hero-character-wrapper" style={{ zIndex: 2 }}>
        <img
          src={characterImg}
          alt="Abhishek K Character"
          className="hero-character-img"
          style={{ mixBlendMode: 'normal', background: 'none' }}
        />
      </div>

      {/* 3. Hero Text, Buttons & Badge (z-index 3 or higher) */}
      <div className="hero-bottom-left" style={{ zIndex: 3 }}>
        <p className="hero-tagline">
          Designs that inspire. Ideas that connect.
        </p>
        <button
          className="hero-cta-btn"
          onClick={() => scrollToSection('projects')}
        >
          <span>View work</span>
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="hero-bottom-right" style={{ zIndex: 3 }}>
        <div className="hero-badge">
          <span>Available for</span>
          <span className="badge-dot" />
          <strong>Freelance projects</strong>
        </div>
      </div>
    </section>
  );
};

export default Hero;
