import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECTION_IDS } from '../../utils/constants';

const LABELS = {
  hero: 'Top',
  about: 'About',
  skills: 'Skills',
  experience: 'Experience',
  projects: 'Projects',
  education: 'Education',
  contact: 'Contact',
};

export function SectionDots({ activeSection }) {
  const [hovered, setHovered] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="section-dots">
      {SECTION_IDS.map(id => (
        <div
          key={id}
          className={`section-dots__dot ${activeSection === id ? 'section-dots__dot--active' : ''}`}
          onClick={() => scrollTo(id)}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
          role="button"
          aria-label={`Go to ${LABELS[id]}`}
        >
          <AnimatePresence>
            {hovered === id && (
              <motion.span
                className="section-dots__tooltip"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.15 }}
              >
                {LABELS[id]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
