import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ActiveLink from './ActiveLink';
import ThemeToggle from './ThemeToggle';

const Header = ({ content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: content.nav[0], path: '/' },
    { label: content.nav[1], path: '/proyectos' },
    { label: content.nav[2], path: '/experiencia' },
    { label: content.nav[3], path: '/estudios' },
    { label: content.nav[4], path: '/habilidades' },
    { label: content.nav[5], path: '/contacto' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-40 bg-white/10 dark:bg-navy-900/10 backdrop-blur-lg border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
<motion.div
  whileHover={{ scale: 1.05 }}
  className="flex items-center space-x-2"
>
  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-600 p-1 shadow-lg flex items-center justify-center">
    <img
      src="/assets/logo.png"
      alt="Logo MAC"
      className="w-12 h-12 object-contain rounded-full bg-white dark:bg-navy-800 p-1"
    />
  </div>
</motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <ActiveLink key={item.path} to={item.path}>
                {item.label}
              </ActiveLink>
            ))}
          </nav>

          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          <motion.button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 relative focus:outline-none focus-visible"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <motion.div
                className="block w-6 h-0.5 bg-navy-800 dark:bg-cyan-400"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 2 : -2,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="block w-6 h-0.5 bg-navy-800 dark:bg-cyan-400 mt-1"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="block w-6 h-0.5 bg-navy-800 dark:bg-cyan-400 mt-1"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -2 : 2,
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cyan-500/20 bg-white/95 dark:bg-navy-900/95 backdrop-blur-lg"
          >
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ActiveLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left"
                  >
                    {item.label}
                  </ActiveLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 flex justify-center"
              >
                <ThemeToggle />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
