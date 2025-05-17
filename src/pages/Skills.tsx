import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Certifications</h2>
        <p className="section-subtitle">
          My technical skills, certifications, and achievements.
        </p>
        
        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="section-subtitle">Skills Summary</h3>
          <ul className="skills-list">
            <li>
              <span className="skill-bullet">•</span> 
              Laravel PHP Node.js
            </li>
            <li>
              <span className="skill-bullet">•</span> 
              Vue.js, React.js, TypeScript
            </li>
            <li>
              <span className="skill-bullet">•</span> 
              MySQL, MSSQL, PostgreSQL
            </li>
            <li>
              <span className="skill-bullet">•</span> 
              Github, Gitlab, Azure DevOps
            </li>
            <li>
              <span className="skill-bullet">•</span> 
              AWS RDS, EC2, S3, Lambda, Cloudfront
            </li>
          </ul>
        </div>
        
        {/* Certifications Section */}
        <div className="certifications-section">
          <h3 className="section-subtitle">Certifications</h3>
          <div className="certification-item">
            <div className="certification-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="certification-content">
              <h4>AWS Certified Cloud Practitioner</h4>
            </div>
          </div>
        </div>
        
        {/* Awards Section */}
        <div className="awards-section">
          <h3 className="section-subtitle">Awards Received</h3>
          <div className="award-item">
            <div className="award-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="award-content">
              <h4>Trailblazer of the quarter</h4>
              <p>(Realtair Inc. Apr-Jun 2021)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 