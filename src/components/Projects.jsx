import React from 'react';
import { ExternalLink, BarChart3, Binary, ShieldAlert } from 'lucide-react';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'Brain Tumor Classification & Detection',
      description: 'A deep learning convolutional neural network (CNN) model built to analyze MRI brain scans, classification categories, and generate segmentation maps of tumor tissues.',
      tags: ['TensorFlow', 'Python', 'Keras', 'OpenCV'],
      metrics: [
        { label: 'Accuracy', value: '98.4%' },
        { label: 'Inference', value: '< 1.2s' }
      ],
      mockupText: 'BTC',
      icon: <ShieldAlert size={28} className="project-icon" />,
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      title: 'Predictive Student Analytics Engine',
      description: 'A student predictive modeling platform designed to forecast academic outcomes, analyze engagement rates, and streamline course planning parameters at AJCE.',
      tags: ['Scikit-Learn', 'Pandas', 'Flask', 'Chart.js'],
      metrics: [
        { label: 'R² Score', value: '0.92' },
        { label: 'Records checked', value: '1,200+' }
      ],
      mockupText: 'PSA',
      icon: <BarChart3 size={28} className="project-icon" />,
      github: 'https://github.com',
      demo: 'https://github.com'
    },
    {
      title: 'LSTM Traffic Flow & Signaling Forecaster',
      description: 'An intelligent time-series forecasting model using LSTM networks to estimate real-time traffic volumes and adjust routing and signal intervals in urban grids.',
      tags: ['PyTorch', 'Python', 'NumPy', 'Matplotlib'],
      metrics: [
        { label: 'Wait time cut', value: '15%' },
        { label: 'F1 Score', value: '0.95' }
      ],
      mockupText: 'TFF',
      icon: <Binary size={28} className="project-icon" />,
      github: 'https://github.com',
      demo: 'https://github.com'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Case studies</span>
          <h2 className="section-title">Selected projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-top">
                <div className="project-visual">
                  <div className="project-mockup">{project.mockupText}</div>
                  <div className="project-icon-badge">
                    {project.icon}
                  </div>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="project-tag">{tag}</span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-card-bottom">
                <div className="project-metrics">
                  {project.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="metric">
                      <span className="metric-label">{metric.label}</span>
                      <span className="metric-val">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={16} />
                    <span>View repository</span>
                  </a>
                  <a href={project.demo} className="project-link project-link-demo" target="_blank" rel="noopener noreferrer">
                    <span>Live showcase</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
