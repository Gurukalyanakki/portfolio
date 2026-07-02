import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Client-side validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all the fields before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setStatusMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    
    // Mock network request to show interactive state
    setTimeout(() => {
      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. I will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="ambient-glow glow-teal animate-pulse-glow" style={{ top: '10%', right: '15%' }}></div>

      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Reach Out</span>
          <h2 className="section-title">Let's Connect</h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Social / Direct Contact Cards */}
          <div className="contact-info">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Let's talk about your project</h3>
            <p className="contact-text">
              Have an idea, project, or role you want to discuss? Fill out the contact form or reach out through my direct links. I am always open to exploring exciting collaborations.
            </p>

            <div className="contact-cards">
              {/* Email Card */}
              <div className="contact-card-item glass-card">
                <div className="contact-icon-box">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>gurukalyan@example.com</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-card-item glass-card">
                <div className="contact-icon-box">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper glass-card">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-control"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-control"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="form-control"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="form-control"
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              {statusMessage && (
                <div className={`form-status ${status === 'success' ? 'success' : 'error'}`}>
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'submitting'}
                style={{ width: '100%', padding: '14px 0' }}
              >
                <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
