import React from 'react';
import { Brain, Code, Layout, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code size={22} className="cat-icon" />,
      skills: [
        { name: 'Python', percentage: 90 },
        { name: 'Java', percentage: 80 },
        { name: 'C Language', percentage: 75 },
        { name: 'SQL', percentage: 85 }
      ]
    },
    {
      title: 'AI & Data Science',
      icon: <Brain size={22} className="cat-icon" />,
      skills: [
        { name: 'Machine Learning', percentage: 75 },
        { name: 'Data Analytics', percentage: 80 },
        { name: 'Artificial Intelligence', percentage: 70 },
        { name: 'Data Visualization', percentage: 85 }
      ]
    },
    {
      title: 'Development',
      icon: <Layout size={22} className="cat-icon" />,
      skills: [
        { name: 'Web Development', percentage: 80 },
        { name: 'UI/UX Fundamentals', percentage: 70 },
        { name: 'Git & GitHub', percentage: 85 }
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench size={22} className="cat-icon" />,
      skills: [
        { name: 'VS Code', percentage: 95 },
        { name: 'Jupyter Notebook', percentage: 90 },
        { name: 'MySQL', percentage: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical expertise</span>
          <h2 className="section-title">My skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <div className="category-header">
                <div className="category-icon-wrapper">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-track">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
