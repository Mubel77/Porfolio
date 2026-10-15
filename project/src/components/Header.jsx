import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import LanguageFab from './LanguageFab';
import ThemeToggle from './ThemeToggle';

const Header = ({ content, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: content.nav[0], path: '/' },
    { label: content.nav[1], path: '/proyectos' },
    { label: content.nav[2], path: '/experiencia' },
    { label: content.nav[3], path: '/estudios' },
    { label: content.nav[4], path: '/habilidades' },
    { label: content.nav[5], path: '/contacto' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className="site-header"
      initial={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="site-header-inner">
        <Link aria-label="MAC — inicio" className="site-brand" onClick={closeMenu} to="/">
          <span className="site-brand-mark">
            <img alt="" src="/assets/logo.png" />
          </span>
          <span className="site-brand-name">MAC<span>.</span></span>
        </Link>

        <nav aria-label="Navegación principal" className="site-nav">
          {navItems.map((item) => (
            <ActiveLink key={item.path} to={item.path} onClick={closeMenu}>
              {item.label}
            </ActiveLink>
          ))}
        </nav>

        <div className="site-tools">
          <LanguageFab className="language-toggle" onLanguageChange={onLanguageChange} />
          <ThemeToggle />
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            animate={{ opacity: 1, height: 'auto' }}
            aria-label="Navegación móvil"
            className="mobile-navigation"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            key="mobile-navigation"
          >
            {navItems.map((item, index) => (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="mobile-navigation-item"
                initial={{ opacity: 0, x: -12 }}
                key={item.path}
                transition={{ delay: index * 0.04, duration: 0.2 }}
              >
                <ActiveLink to={item.path} onClick={closeMenu}>
                  {item.label}
                </ActiveLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
