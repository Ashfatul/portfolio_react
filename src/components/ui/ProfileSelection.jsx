import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaServer, FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function ProfileSelection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 850);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    padding: isMobile ? '2rem 1.5rem' : '2rem 4rem',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontFamily: 'inherit',
    position: 'relative',
    overflow: isMobile ? 'auto' : 'hidden',
    gap: isMobile ? '2.5rem' : '4rem',
  };

  const backgroundGlow = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, var(--glow-color) 0%, transparent 70%)',
    top: '10%',
    left: '5%',
    zIndex: 0,
    opacity: 0.6,
    pointerEvents: 'none',
  };

  const backgroundGlowRight = {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
    bottom: '10%',
    right: '5%',
    zIndex: 0,
    opacity: 0.6,
    pointerEvents: 'none',
  };

  const leftColumnStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: isMobile ? 'center' : 'flex-start',
    textAlign: isMobile ? 'center' : 'left',
    zIndex: 1,
    maxWidth: isMobile ? '100%' : '460px',
  };

  const rightColumnStyle = {
    flex: '1.2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.25rem',
    zIndex: 1,
    width: '100%',
    maxWidth: '550px',
  };

  const nameStyle = {
    fontSize: isMobile ? '2.2rem' : '3rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    marginBottom: '0.75rem',
    background: 'var(--accent-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1.1',
  };

  const descStyle = {
    fontSize: isMobile ? '1.05rem' : '1.15rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginBottom: '0.75rem',
    lineHeight: '1.4',
  };

  const taglineStyle = {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    fontWeight: '400',
    lineHeight: '1.5',
    marginBottom: '2rem',
  };

  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobile ? 'center' : 'flex-start',
    gap: '0.75rem',
    marginTop: isMobile ? '1rem' : '2.5rem',
    zIndex: 1,
  };

  const footerLabelStyle = {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  };

  const footerLinksContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const footerLinkStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid var(--glass-border)',
    color: 'var(--text-secondary)',
    fontSize: '1.1rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1.5rem',
    borderRadius: '16px',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--glass-border)',
    boxShadow: '0 8px 32px var(--shadow-color)',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    gap: '1.25rem',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  };

  const iconContainerStyle = (color) => ({
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: `1px solid ${color}33`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.6rem',
    color: color,
    boxShadow: `0 0 15px ${color}15`,
    transition: 'transform 0.3s ease',
    flexShrink: 0,
  });

  const cardContentStyle = {
    flex: 1,
    textAlign: 'left',
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '0.25rem',
  };

  const cardSubtitleStyle = {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontWeight: '600',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  };

  const cardDescStyle = {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
    margin: 0,
  };

  const arrowContainerStyle = {
    fontSize: '1.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-muted)',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundGlow} />
      <div style={backgroundGlowRight} />
      
      {/* Left Column: Personal info & Connection details */}
      <div style={leftColumnStyle}>
        <h1 style={nameStyle}>Ashfatul Islam</h1>
        <p style={descStyle}>
          Frontend & Full Stack JavaScript Developer with 3+ years of experience building production web applications.
        </p>
        <p style={taglineStyle}>
          Choose a profile to explore my resume, projects, and skills tailored to your hiring needs.
        </p>

        <footer style={footerStyle}>
          <span style={footerLabelStyle}>Looking for something else? Let's connect:</span>
          <div style={footerLinksContainerStyle}>
            <a
              href="https://github.com/ashfatul"
              target="_blank"
              rel="noopener noreferrer"
              style={footerLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ashfatul"
              target="_blank"
              rel="noopener noreferrer"
              style={footerLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00d4ff';
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 212, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:ashfatul.islam@gmail.com"
              style={footerLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#a78bfa';
                e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(167, 139, 250, 0.05)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(167, 139, 250, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
              aria-label="Email"
            >
              <FaRegEnvelope />
            </a>
          </div>
        </footer>
      </div>

      {/* Right Column: Dynamic Role Selection Cards */}
      <div style={rightColumnStyle}>
        {/* Frontend Card */}
        <Link
          to="/frontend"
          style={cardStyle}
          className="glass-card selection-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = '#00d4ffaa';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.12)';
            e.currentTarget.querySelector('.frontend-icon').style.transform = 'scale(1.08) rotate(15deg)';
            e.currentTarget.querySelector('.frontend-arrow').style.transform = 'translateX(5px)';
            e.currentTarget.querySelector('.frontend-arrow').style.color = '#00d4ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.boxShadow = '0 8px 32px var(--shadow-color)';
            e.currentTarget.querySelector('.frontend-icon').style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.querySelector('.frontend-arrow').style.transform = 'translateX(0)';
            e.currentTarget.querySelector('.frontend-arrow').style.color = 'var(--text-muted)';
          }}
        >
          <div className="frontend-icon" style={iconContainerStyle('#00d4ff')}>
            <FaReact />
          </div>
          <div style={cardContentStyle}>
            <p style={cardSubtitleStyle}>React · Next.js · TypeScript</p>
            <h2 style={cardTitleStyle}>Frontend Developer</h2>
            <p style={cardDescStyle}>
              Explore responsive layouts, rich UX mockups, and clean UI engineering.
            </p>
          </div>
          <div className="frontend-arrow" style={arrowContainerStyle}>
            <FiArrowRight />
          </div>
        </Link>

        {/* Full Stack Card */}
        <Link
          to="/fullstack"
          style={cardStyle}
          className="glass-card selection-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = '#a78bfaaa';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(167, 139, 250, 0.12)';
            e.currentTarget.querySelector('.fullstack-icon').style.transform = 'scale(1.08)';
            e.currentTarget.querySelector('.fullstack-arrow').style.transform = 'translateX(5px)';
            e.currentTarget.querySelector('.fullstack-arrow').style.color = '#a78bfa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.boxShadow = '0 8px 32px var(--shadow-color)';
            e.currentTarget.querySelector('.fullstack-icon').style.transform = 'scale(1)';
            e.currentTarget.querySelector('.fullstack-arrow').style.transform = 'translateX(0)';
            e.currentTarget.querySelector('.fullstack-arrow').style.color = 'var(--text-muted)';
          }}
        >
          <div className="fullstack-icon" style={iconContainerStyle('#a78bfa')}>
            <FaServer />
          </div>
          <div style={cardContentStyle}>
            <p style={cardSubtitleStyle}>React · Node.js · MongoDB</p>
            <h2 style={cardTitleStyle}>Full Stack Developer</h2>
            <p style={cardDescStyle}>
              Explore backend integrations, API design, and full-stack flows.
            </p>
          </div>
          <div className="fullstack-arrow" style={arrowContainerStyle}>
            <FiArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}
