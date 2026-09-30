import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceEducation = () => {
  const experiences = [
    {
      date: 'Jan 2026 - Present',
      title: 'Technical intern (Data Analytics)',
      subtitle: 'Remote | Project internship',
      desc: 'Analyzing student academic trends, building predictive algorithms for course enrollment, and developing interactive analytics dashboards.'
    },
    {
      date: 'Aug 2025 - Dec 2025',
      title: 'Machine learning training program',
      subtitle: 'Online certification bootcamp',
      desc: 'Intensive hands-on training focused on supervised/unsupervised algorithms, neural network design, feature scaling, and data pre-processing pipelines.'
    },
    {
      date: 'May 2025 - Present',
      title: 'Freelance UI & web developer',
      subtitle: 'Self-employed',
      desc: 'Creating custom responsive landing pages and user interfaces using HTML/CSS/JavaScript and React for local businesses.'
    },
    {
      date: 'Oct 2024 - Present',
      title: 'Technical coordinator & student member',
      subtitle: 'AJCE tech event committee & IEEE CS club',
      desc: 'Assisting in coordinating regional coding competitions, hosting academic technology workshops, and coordinating student registration.'
    }
  ];

  const education = [
    {
      date: '2024 - 2028 (Expected)',
      title: 'B.Tech in Artificial Intelligence & Data Science',
      subtitle: 'Amal Jyothi College of Engineering (AJCE)',
      desc: 'Currently a Second-Year student. Learning core methodologies including Python, Java, SQL databases, linear algebra, and data structures. Actively participating in campus tech hubs and AI laboratories.'
    },
    {
      date: '2022 - 2024',
      title: 'Higher secondary education (CS & Maths)',
      subtitle: 'State Board of Education',
      desc: 'Completed secondary schooling with high honors, focusing heavily on Computer Science, Mathematics, Physics, and Chemistry foundations.'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Background</span>
          <h2 className="section-title">Timeline & milestones</h2>
        </div>

        <div className="experience-layout">
          {/* Experience Column */}
          <div>
            <h3 className="timeline-column-title">
              <Briefcase size={20} className="column-icon" />
              <span>Experience & roles</span>
            </h3>

            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <span className="timeline-date">{exp.date}</span>
                  <div className="timeline-card">
                    <h4 className="timeline-title">{exp.title}</h4>
                    <h5 className="timeline-subtitle">{exp.subtitle}</h5>
                    <p className="timeline-desc">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div id="education">
            <h3 className="timeline-column-title">
              <GraduationCap size={20} className="column-icon" />
              <span>Education journey</span>
            </h3>

            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <span className="timeline-date">{edu.date}</span>
                  <div className="timeline-card">
                    <h4 className="timeline-title">{edu.title}</h4>
                    <h5 className="timeline-subtitle">{edu.subtitle}</h5>
                    <p className="timeline-desc">{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
