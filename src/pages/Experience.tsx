import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: 'Advance App Engineering Specialist',
      company: 'Accenture',
      duration: 'July 2023 - Present',
      description: '',
      responsibilities: [
        'Lead technical development while serving as Scrum Master and Release Train Engineer to ensure team alignment with agile processes',
        'Provide technical leadership and mentoring to junior engineers while promoting best coding practices and standards',
        'Conduct thorough code reviews and provide constructive feedback to foster a collaborative and positive team culture',
        'Collaborate with cross-functional teams including product managers, designers, and QA engineers to deliver high-quality products',
        'Implement and maintain quality assurance processes including unit testing, integration testing, and automated testing'
      ],
      technologies: ['Technical Leadership', 'Scrum Master', 'RTE', 'Code Reviews', 'Quality Assurance']
    },
    {
      id: 2,
      role: 'Software Engineer',
      company: 'Realtair Inc.',
      duration: 'June 2020 - June 2023',
      description: '',
      responsibilities: [
        'Led production deployments and managed release cycles for web applications',
        'Successfully migrated Laravel applications from version 6 to 9, enhancing security and performance',
        'Identified and patched security vulnerabilities in existing applications to prevent data breaches',
        'Transitioned frontend architecture from vanilla JS/jQuery to Vue.js and later to React.js for improved maintainability',
        'Optimized performance by reducing Largest Contentful Paint (LCP) from 3+ seconds to 1.9 seconds',
        'Implemented NewRelic integration for comprehensive monitoring and troubleshooting',
        'Reduced operating costs by implementing more efficient alternatives to third-party services like Pusher'
      ],
      technologies: ['Laravel 6-9', 'Vue.js', 'React.js', 'Security Patching', 'Performance Optimization', 'NewRelic']
    },
    {
      id: 3,
      role: 'IT Staff',
      company: 'Jericho Security Services',
      duration: 'June 2018 - Dec 2019',
      description: '',
      responsibilities: [
        'Developed Daily Time Record (DTR) system using PHP (CodeIgniter), Bootstrap and jQuery',
        'Provided technical support and processed information requests from employees',
        'Maintained database integrity and system security for company records'
      ],
      technologies: ['PHP', 'CodeIgniter', 'JavaScript', 'jQuery', 'Bootstrap']
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
                
                {experience.description && <p className="timeline-description">{experience.description}</p>}
                
                <ul className="timeline-responsibilities">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                
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