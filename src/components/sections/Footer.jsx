import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Footer({ data }) {
  const profiles = data?.basics?.profiles || [];

  const getIcon = (network) => {
    switch (network?.toLowerCase()) {
      case 'github': return <FiGithub />;
      case 'linkedin': return <FiLinkedin />;
      case 'twitter': return <FiTwitter />;
      default: return <FiArrowUpRight />;
    }
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Top Call to Action */}
        <div className="footer__cta">
          <motion.h2 
            className="footer__cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let&apos;s build something <br/><span className="highlight-text">amazing</span> together.
          </motion.h2>
          <motion.a 
            href="#contact" 
            className="footer__cta-btn"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Start a Conversation <FiArrowUpRight />
          </motion.a>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="footer__bottom-bar">
          <div className="footer__brand-area">
            <h3 className="footer__logo">Ashfatul<span className="footer__logo-dot">.</span></h3>
            <span className="footer__copy">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="footer__right">
            <div className="footer__status">
              <span className="footer__status-dot"></span>
              <span className="footer__status-text">Available for work</span>
            </div>
            <div className="footer__socials-row">
              {profiles.map((profile, i) => (
                <a 
                  key={i} 
                  href={profile.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__social-icon-link"
                  aria-label={profile.network}
                >
                  {getIcon(profile.network)}
                </a>
              ))}
              {data?.basics?.email && (
                <a 
                  href={`mailto:${data.basics.email}`} 
                  className="footer__social-icon-link"
                  aria-label="Email"
                >
                  <FiMail />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
