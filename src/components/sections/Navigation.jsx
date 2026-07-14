import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../utils/constants';
import { ThemeToggle } from '../ui/ThemeToggle';

export default function Navigation({ activeSection, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
      <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
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
      </nav>

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
