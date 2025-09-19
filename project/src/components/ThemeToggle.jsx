import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-navy-800 dark:bg-navy-700 border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:shadow-magic focus:outline-none focus-visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
        className="w-6 h-6"
      >
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="4" fill="currentColor"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;