import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      duration: 'Jan 2022 - Present',
      description: 'Leading a team of developers in creating enterprise-grade web applications using React, Node.js, and AWS. Implemented CI/CD pipelines that reduced deployment time by 40%.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker']
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      duration: 'Mar 2019 - Dec 2021',
      description: 'Developed responsive web applications with modern JavaScript frameworks. Collaborated with UI/UX designers to implement pixel-perfect designs and improve user experience.',
      technologies: ['JavaScript', 'React', 'Redux', 'SASS', 'Webpack']
    },
    {
      id: 3,
      role: 'Junior Web Developer',
      company: 'WebCraft Studios',
      duration: 'Jun 2017 - Feb 2019',
      description: 'Built and maintained client websites using HTML, CSS, and JavaScript. Worked with WordPress and custom PHP solutions to create dynamic web experiences.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress']
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey in software development across various companies and projects.
        </p>
        
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title">
                    <h3>{experience.role}</h3>
                    <p className="company">{experience.company}</p>
                  </div>
                  <span className="timeline-date">{experience.duration}</span>
                </div>
                
                <p className="timeline-description">{experience.description}</p>
                
                <div className="timeline-skills">
                  {experience.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 