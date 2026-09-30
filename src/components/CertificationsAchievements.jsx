import React from 'react';
import { Award, ExternalLink, Trophy, ShieldCheck, Milestone } from 'lucide-react';

const CertificationsAchievements = () => {
  const certifications = [
    {
      title: 'Machine Learning Specialization',
      platform: 'DeepLearning.AI | Coursera',
      desc: 'Supervised ML (Regression, Classification), Unsupervised ML (Clustering, PCA), and Recommender Systems.',
      verifyUrl: 'https://www.linkedin.com/in/abhishek-k-56a18b422',
      date: 'Aug 2025'
    },
    {
      title: 'Google Data Analytics Professional',
      platform: 'Google | Coursera',
      desc: 'Data cleaning, SQL modeling, Tableau visualizations, R programming, and comprehensive pipeline analysis.',
      verifyUrl: 'https://www.linkedin.com/in/abhishek-k-56a18b422',
      date: 'Jun 2025'
    },
    {
      title: 'Python for Data Science, AI & Development',
      platform: 'IBM | Coursera',
      desc: 'Object-oriented programming, data structures, working with APIs, and HTTP communication.',
      verifyUrl: 'https://www.linkedin.com/in/abhishek-k-56a18b422',
      date: 'Mar 2025'
    },
    {
      title: 'SQL & Database Design Masterclass',
      platform: 'Udemy Academic',
      desc: 'Designing normal forms (1NF, 2NF, 3NF), optimization, complex JOIN queries, and schema triggers.',
      verifyUrl: 'https://www.linkedin.com/in/abhishek-k-56a18b422',
      date: 'Jan 2025'
    }
  ];

  const achievements = [
    {
      title: 'AJCE Coding Championship',
      org: 'Amal Jyothi Annual Tech Fest',
      rank: '#1',
      desc: 'First place out of 50+ contestants in a speed-based computational puzzle challenge utilizing Python and Java.'
    },
    {
      title: 'National Level Hackathon',
      org: 'Smart India Hackathon (Internal)',
      rank: 'Finalist',
      desc: 'Spearheaded the development of a convolutional neural network (CNN) classifier to optimize crop health assessments.'
    },
    {
      title: 'Kaggle Real Estate Forecasting',
      org: 'Data Science Competition',
      rank: 'Top 10%',
      desc: 'Engineered advanced gradient boosting regressors (XGBoost) for predicting complex housing pricing indices.'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Accreditation</span>
          <h2 className="section-title">Certifications & wins</h2>
        </div>

        {/* Certifications Sub-grid */}
        <h3 className="timeline-column-title" style={{ marginBottom: '24px' }}>
          <ShieldCheck size={20} className="column-icon" />
          <span>Professional certifications</span>
        </h3>
        <div className="certs-grid" style={{ marginBottom: '48px' }}>
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-header">
                <div className="cert-icon">
                  <Award size={18} />
                </div>
                <span className="cert-platform">{cert.platform}</span>
              </div>
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-desc">{cert.desc}</p>
              <div className="cert-footer">
                <a href={cert.verifyUrl} className="cert-verify" target="_blank" rel="noopener noreferrer">
                  <span>Verify credential</span>
                  <ExternalLink size={12} />
                </a>
                <span className="cert-date">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Sub-grid */}
        <h3 className="timeline-column-title" style={{ marginBottom: '24px' }}>
          <Milestone size={20} className="column-icon" />
          <span>Milestones & contest wins</span>
        </h3>
        <div className="achievements-grid">
          {achievements.map((ach, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-header">
                <div className="achievement-icon">
                  <Trophy size={18} />
                </div>
                <span className="achievement-rank">{ach.rank}</span>
              </div>
              <h4 className="achievement-title">{ach.title}</h4>
              <h5 className="achievement-org">{ach.org}</h5>
              <p className="achievement-desc">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAchievements;
