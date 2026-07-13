import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../utils/constants';
import { ThemeToggle } from '../ui/ThemeToggle';

export default function Navigation({ activeSection, theme, toggleTheme }) {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            className="nav"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="nav__container">
              <button className="nav__logo" onClick={() => scrollTo('hero')}>
                Ashfatul
              </button>

              <div className="nav__links">
                {NAV_ITEMS.map(({ id, label }) => (
                  <button
                    key={id}
                    className={`nav__link ${activeSection === id ? 'nav__link--active' : ''}`}
                    onClick={() => scrollTo(id)}
                  >
                    {label}
                    {activeSection === id && (
                      <motion.div
                        className="nav__underline"
                        layoutId="nav-underline"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="nav__right">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <button
                  className={`nav__hamburger ${mobileOpen ? 'nav__hamburger--open' : ''}`}
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                className={`nav__mobile-link ${activeSection === id ? 'nav__mobile-link--active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
