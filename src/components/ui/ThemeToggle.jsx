import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';

export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex' }}
          >
            <MdOutlineWbSunny />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex' }}
          >
            <IoMdMoon />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
