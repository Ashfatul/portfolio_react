import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsFlying(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    setIsFlying(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleScrollToTop}
          className={`back-to-top ${isFlying ? 'back-to-top--flying' : ''}`}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{
            opacity: isFlying ? 0 : 1,
            scale: isFlying ? 0.5 : 1,
            y: isFlying ? -200 : 0
          }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={isFlying ? {} : { scale: 1.1 }}
          whileTap={isFlying ? {} : { scale: 0.9 }}
          transition={{
            duration: isFlying ? 0.6 : 0.3,
            ease: isFlying ? [0.4, 0, 0.2, 1] : 'easeInOut'
          }}
          style={{ pointerEvents: isFlying ? 'none' : 'auto' }}
          aria-label="Back to top"
        >
          <FaRocket className="back-to-top__icon" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
