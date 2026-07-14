import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiAlertTriangle } from 'react-icons/fi';

export default function NotFound() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    textAlign: 'center',
    fontFamily: 'inherit',
  };

  const cardStyle = {
    maxWidth: '480px',
    width: '100%',
    padding: '3rem 2rem',
    borderRadius: '16px',
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--glass-border)',
    boxShadow: '0 8px 32px var(--shadow-color)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };

  const iconStyle = {
    fontSize: '4rem',
    color: 'var(--error)',
    marginBottom: '1.5rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    background: 'var(--accent-gradient)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
    lineHeight: '1.6',
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    background: 'var(--accent-gradient)',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'transform 0.2s ease, opacity 0.2s ease',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} className="glass-card">
        <FiAlertTriangle style={iconStyle} />
        <h1 style={titleStyle}>404 - Page Not Found</h1>
        <p style={subtitleStyle}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
          <FiHome />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
