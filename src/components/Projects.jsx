import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'webapp', label: 'Web Apps' },
    { id: 'tool', label: 'Tools' }
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Save N serve',
      desc: 'A premium full-stack shopping platform featuring real-time inventory tracking, Stripe integrations, administrative product management, and dynamic dashboard metrics.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'webapp',
      demoUrl: '#...',
      githubUrl: '..',
      iconPath: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Aether CSS Builder',
      desc: 'An interactive developer utility for real-time creation and export of complex CSS gradients, custom glassmorphism components, and responsive grid layouts.',
      tags: ['React', 'Vite', 'HTML5', 'Vanilla CSS'],
      category: 'tool',
      demoUrl: '#',
      githubUrl: '#',
      iconPath: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a9.003 9.003 0 11-12.828 12.828A9 9 0 019.53 16.122z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.35 15.65l6.3-6.3M14 6h.01M16 8h.01M18 10h.01" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'DevFlow Hub',
      desc: 'A comprehensive developer forum featuring markdown text rendering, voting threads, algorithmic content sorting, and user profile achievement badges.',
      tags: ['React', 'MongoDB', 'Express', 'JWT'],
      category: 'webapp',
      demoUrl: '#',
      githubUrl: '#',
      iconPath: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-2.88 8.05 8.05 0 01-1.686-2.872C2.43 14.285 2.1 13.17 2.1 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Apex Kanban Board',
      desc: 'A client-side task tracking whiteboard built with smooth drag-and-drop actions, indexed DB offline caching, and instant cross-device state synchronization.',
      tags: ['React', 'HTML5', 'Service Workers'],
      category: 'tool',
      demoUrl: '#',
      githubUrl: '#',
      iconPath: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375M9 9h3.75M16.5 12h.008v.008H16.5V12zm0 3h.008v.008H16.5V15zm0-6h.008v.008H16.5V9h-.008zm-9.75-3H18.75c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125H6.75a1.125 1.125 0 01-1.125-1.125V7.125C5.625 6.504 6.129 6 6.75 6z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'CryptoPulse Terminal',
      desc: 'An analytical cryptocurrency indexer displaying live ticker price fluctuations, dynamic volume charting, and sentiment summaries of market indicators.',
      tags: ['React', 'D3.js', 'WebSockets', 'Coingecko API'],
      category: 'webapp',
      demoUrl: '#',
      githubUrl: '#',
      iconPath: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v6.75m3-9v9m3-11.25V18.75M3.75 20.25h16.5" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Aura Markdown Engine',
      desc: 'A lightning-fast, web-based parser and styling editor showing real-time HTML rendering side-by-side with custom export templates for developer documentation.',
      tags: ['React', 'Regex', 'Vite', 'Local Storage'],
      category: 'tool',
      demoUrl: '#',
      githubUrl: '#',
      iconPath: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="ambient-glow glow-teal animate-pulse-glow" style={{ bottom: '10%', left: '5%' }}></div>

      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">My Portfolio</span>
          <h2 className="section-title">Recent Projects</h2>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image">
                {project.iconPath}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoUrl} className="project-link">
                    Live Demo
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href={project.githubUrl} className="project-link">
                    Source Code
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
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
