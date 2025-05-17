import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product catalog, shopping cart, and payment processing capabilities.',
      image: 'https://i.imgur.com/0ACPgAu.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
      image: 'https://i.imgur.com/xGZfEVG.jpg',
      technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather forecast dashboard that displays current and future weather conditions based on location.',
      image: 'https://i.imgur.com/KRzFnrR.jpg',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'SCSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'A dashboard for social media managers to track engagement metrics and audience demographics.',
      image: 'https://i.imgur.com/vYs4qEt.jpg',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A mobile-first web application to track fitness activities, set goals, and visualize progress over time.',
      image: 'https://i.imgur.com/VyRvwY4.jpg',
      technologies: ['React Native', 'GraphQL', 'Apollo', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'A web application that helps users find recipes based on available ingredients and dietary preferences.',
      image: 'https://i.imgur.com/AHJNKZ1.jpg',
      technologies: ['Vue.js', 'Vuex', 'Edamam API', 'CSS Grid'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A showcase of my projects and applications built with various technologies.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
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