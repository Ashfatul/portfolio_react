import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaServer } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function ProfileSelection() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontFamily: 'inherit',
    position: 'relative',
    overflow: 'hidden',
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

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
    zIndex: 1,
  };

  const nameStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    marginBottom: '0.5rem',
    background: 'var(--accent-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const taglineStyle = {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    fontWeight: '400',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.5',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    width: '100%',
    maxWidth: '850px',
    zIndex: 1,
  };

  const cardStyle = {
    padding: '3rem 2.5rem',
    borderRadius: '20px',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--glass-border)',
    boxShadow: '0 8px 32px var(--shadow-color)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
  };

  const iconContainerStyle = (color) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: `1px solid ${color}33`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    color: color,
    marginBottom: '2rem',
    boxShadow: `0 0 20px ${color}1a`,
    transition: 'transform 0.3s ease',
  });

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  };

  const cardSubtitleStyle = {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    fontWeight: '600',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
  };

  const cardDescStyle = {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    marginBottom: '2.5rem',
    flexGrow: 1,
  };

  const ctaStyle = (color) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: `1px solid var(--glass-border)`,
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease',
  });

  return (
    <div style={containerStyle}>
      <div style={backgroundGlow} />
      <div style={backgroundGlowRight} />
      
      <header style={headerStyle}>
        <h1 style={nameStyle}>A. A. M. Ashfatul Islam</h1>
        <p style={taglineStyle}>
          Welcome! Please choose a profile to tailor your portfolio and resume experience:
        </p>
      </header>

      <div style={gridStyle}>
        {/* Frontend Card */}
        <Link
          to="/frontend"
          style={cardStyle}
          className="glass-card selection-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.borderColor = '#00d4ffaa';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 212, 255, 0.15)';
            e.currentTarget.querySelector('.frontend-icon').style.transform = 'scale(1.1) rotate(15deg)';
            e.currentTarget.querySelector('.frontend-cta').style.backgroundColor = '#00d4ff';
            e.currentTarget.querySelector('.frontend-cta').style.borderColor = '#00d4ff';
            e.currentTarget.querySelector('.frontend-cta').style.color = '#0a0a0f';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.boxShadow = '0 8px 32px var(--shadow-color)';
            e.currentTarget.querySelector('.frontend-icon').style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.querySelector('.frontend-cta').style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.querySelector('.frontend-cta').style.borderColor = 'var(--glass-border)';
            e.currentTarget.querySelector('.frontend-cta').style.color = 'var(--text-primary)';
          }}
        >
          <div className="frontend-icon" style={iconContainerStyle('#00d4ff')}>
            <FaReact />
          </div>
          <h2 style={cardTitleStyle}>Frontend Developer</h2>
          <p style={cardSubtitleStyle}>React · Next.js · TypeScript</p>
          <p style={cardDescStyle}>
            Explore pixel-perfect responsive layouts, rich user experience mockups, interactive frontend components, and clean UI engineering architectures.
          </p>
          <div className="frontend-cta" style={ctaStyle('#00d4ff')}>
            <span>View Portfolio</span>
            <FiArrowRight />
          </div>
        </Link>

        {/* Full Stack Card */}
        <Link
          to="/fullstack"
          style={cardStyle}
          className="glass-card selection-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.borderColor = '#a78bfaaa';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(167, 139, 250, 0.15)';
            e.currentTarget.querySelector('.fullstack-icon').style.transform = 'scale(1.1)';
            e.currentTarget.querySelector('.fullstack-cta').style.backgroundColor = '#a78bfa';
            e.currentTarget.querySelector('.fullstack-cta').style.borderColor = '#a78bfa';
            e.currentTarget.querySelector('.fullstack-cta').style.color = '#0a0a0f';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.boxShadow = '0 8px 32px var(--shadow-color)';
            e.currentTarget.querySelector('.fullstack-icon').style.transform = 'scale(1)';
            e.currentTarget.querySelector('.fullstack-cta').style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            e.currentTarget.querySelector('.fullstack-cta').style.borderColor = 'var(--glass-border)';
            e.currentTarget.querySelector('.fullstack-cta').style.color = 'var(--text-primary)';
          }}
        >
          <div className="fullstack-icon" style={iconContainerStyle('#a78bfa')}>
            <FaServer />
          </div>
          <h2 style={cardTitleStyle}>Full Stack Developer</h2>
          <p style={cardSubtitleStyle}>Node.js · Supabase · MongoDB</p>
          <p style={cardDescStyle}>
            Explore end-to-end applications, robust API integrations, user role management, data synchronization schemas, and backend architectures.
          </p>
          <div className="fullstack-cta" style={ctaStyle('#a78bfa')}>
            <span>View Portfolio</span>
            <FiArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}
