import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Lead Frontend Architect',
      company: 'TechNova Solutions',
      duration: '2024 - Present',
      desc: 'Orchestrated the engineering layout for complex, high-performance web systems using React, Vite, and Redux. Reduced application loading time by 35% through modular routing, code splitting, and caching systems. Coordinated a team of 5 developers to create a custom internal design system.'
    },
    {
      id: 2,
      role: 'Senior Software Engineer',
      company: 'DigitalVantage Corp',
      duration: '2022 - 2024',
      desc: 'Developed scalable RESTful APIs and real-time sockets using Node.js and Express. Maintained and optimized database indexing in PostgreSQL, boosting query execution speed by 25%. Built interactive visualization dashboards with React and Chart.js.'
    },
    {
      id: 3,
      role: 'Associate Web Developer',
      company: 'WebCraft Creative Studio',
      duration: '2021 - 2022',
      desc: 'Developed beautiful, pixel-perfect, responsive websites and email campaigns using clean HTML, Sass, and JavaScript. Collaborated directly with UI/UX designers to translate Figma design specs into interactive prototypes.'
    },
    {
      id: 4,
      role: 'B.Tech in Computer Science',
      company: 'Academy of Engineering',
      duration: '2017 - 2021',
      desc: 'Completed coursework in Data Structures, Algorithms, Object-Oriented Programming, and Software Engineering. Built multiple academic projects including a secure client portal and a local weather-reporting widget.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="ambient-glow glow-indigo animate-pulse-glow" style={{ top: '20%', left: '5%' }}></div>
      <div className="ambient-glow glow-violet" style={{ bottom: '20%', right: '10%' }}></div>

      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="timeline">
          {experiences.map(item => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{item.role}</h3>
                    <div className="timeline-company">{item.company}</div>
                  </div>
                  <span className="timeline-duration">{item.duration}</span>
                </div>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
