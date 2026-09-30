import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const ExperienceEducation = () => {
  const educationalEntries = [
    {
      date: '2024 - 2028 (Expected)',
      title: 'B.Tech in Artificial Intelligence & Data Science',
      subtitle: 'Amal Jyothi College of Engineering (AJCE)',
      desc: 'Currently a Second-Year student. Learning core computational methodologies including Python, Java, SQL databases, linear algebra, and data structures.',
      icon: <GraduationCap size={20} className="column-icon" />
    },
    {
      date: 'Aug 2025 - Dec 2025',
      title: 'Machine learning training program',
      subtitle: 'Online certification bootcamp',
      desc: 'Intensive hands-on training focused on supervised/unsupervised algorithms, neural network design, feature scaling, and data pre-processing pipelines.',
      icon: <Award size={20} className="column-icon" />
    },
    {
      date: '2022 - 2024',
      title: 'Higher secondary education (CS & Maths)',
      subtitle: 'State Board of Education',
      desc: 'Completed secondary schooling with high honors, focusing heavily on Computer Science, Mathematics, Physics, and Chemistry foundations.',
      icon: <BookOpen size={20} className="column-icon" />
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic path</span>
          <h2 className="section-title">Educational journey</h2>
        </div>

        <div className="education-single-timeline">
          <div className="timeline">
            {educationalEntries.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <span className="timeline-date">{edu.date}</span>
                <div className="timeline-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    {edu.icon}
                    <h4 className="timeline-title" style={{ margin: 0 }}>{edu.title}</h4>
                  </div>
                  <h5 className="timeline-subtitle">{edu.subtitle}</h5>
                  <p className="timeline-desc">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
