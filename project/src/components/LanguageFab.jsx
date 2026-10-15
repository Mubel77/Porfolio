import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getStoredLanguage, setStoredLanguage, getOppositeLanguage } from '../utils/i18n';

const LanguageFab = ({ onLanguageChange, className = '' }) => {
  const [language, setLanguage] = useState(getStoredLanguage);

  useEffect(() => {
    onLanguageChange(language);
  }, [language, onLanguageChange]);

  const handleToggle = () => {
    const newLang = getOppositeLanguage(language);
    setLanguage(newLang);
    setStoredLanguage(newLang);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className={`language-toggle ${className}`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      aria-label={`Cambiar idioma a ${getOppositeLanguage(language).toUpperCase()}`}
    >
      <span className="group-hover:scale-110 transition-transform duration-200">
        {language.toUpperCase()}
      </span>
    </motion.button>
  );
};

export default LanguageFab;