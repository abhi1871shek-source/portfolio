import React from 'react';
import { BookOpen, GraduationCap, MapPin } from 'lucide-react';
import characterImg from '../assets/character.jpeg';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Profile</span>
          <h2 className="section-title">About me</h2>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img 
                src={characterImg} 
                alt="Abhishek K" 
                className="about-character-img"
              />
            </div>
          </div>

          <div className="about-content">
            <h3 className="about-heading">Synthesizing data. Building intelligence.</h3>
            
            <p className="about-text">
              I am a 19-year-old Second-Year B.Tech student majoring in Artificial Intelligence & Data Science at Amal Jyothi College of Engineering. Driven by curiosity and a passion for technology, I focus on building smart applications, extracting hidden patterns, and solving real-world challenges through code and data.
            </p>

            <p className="about-text" style={{ marginBottom: '32px' }}>
              My academic journey is centered around core computational methodologies, modern database schemas, and statistical models. I maintain a mindset of continuous learning, exploring theoretical models and writing implementations to bridge the gap between academic theory and practical developer experience.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-val">19</div>
                <div className="stat-lbl">Years old</div>
              </div>
              <div className="stat-card">
                <div className="stat-val">B.Tech</div>
                <div className="stat-lbl">AI & Data Science</div>
              </div>
              <div className="stat-card">
                <div className="stat-val">AJCE</div>
                <div className="stat-lbl">Kanjirappally, Kerala</div>
              </div>
            </div>

            <div className="about-details-list">
              <div className="about-detail-item">
                <GraduationCap size={20} className="detail-icon" />
                <span>
                  <strong>Degree:</strong> B.Tech in Artificial Intelligence & Data Science (Second-Year Student)
                </span>
              </div>
              <div className="about-detail-item">
                <BookOpen size={20} className="detail-icon" />
                <span>
                  <strong>Institution:</strong> Amal Jyothi College of Engineering (AJCE)
                </span>
              </div>
              <div className="about-detail-item">
                <MapPin size={20} className="detail-icon" />
                <span>
                  <strong>Location:</strong> Kanjirappally, Kerala, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
