import React, { useEffect } from 'react';
import './App.css';
import CanvasBackground from './components/CanvasBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import CertificationsAchievements from './components/CertificationsAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Interactive Canvas Background */}
      <CanvasBackground />
      
      {/* Global Navigation Header */}
      <Navigation />
      
      {/* Main Layout Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <CertificationsAchievements />
        <Contact />
      </main>
      
      {/* Footer Branding & Social Links */}
      <Footer />
    </>
  );
}

export default App;
