import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, scaleIn } from '../utils/animations';

const Hero = ({ content }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = content.typing[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % content.typing.length);
        } else {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, content.typing]);

  // Botón descargar CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/MauricioAbelCuellarDevSap.pdf';
    link.download = 'MAC-MauricioAbelCuellarDevSap.pdf';
    link.click();
  };

  // Botón contacto
  const handleContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-cyan-50 dark:from-navy-900 dark:via-black dark:to-navy-800 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={slideUp}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-navy-800 dark:text-cyan-400 mb-4"
          >
            {content.title}
          </motion.h1>
          
          <motion.div
            variants={slideUp}
            className="text-2xl md:text-3xl lg:text-4xl text-navy-600 dark:text-cyan-300 mb-8 min-h-[4rem] flex items-center justify-center lg:justify-start"
          >
            <span className="typing-text">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.button
              onClick={handleDownloadCV}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg shadow-magic hover:shadow-magic-hover transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {content.ctaDownload}
            </motion.button>

            <motion.button
              onClick={handleContact}
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.ctaContact}
            </motion.button>
          </motion.div>

          {/* Sobre mí */}
          <motion.p
            variants={fadeIn}
            className="text-lg text-navy-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {content.about}
          </motion.p>
        </motion.div>

        {/* Avatar Hero */}
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="relative flex justify-center"
    >
      <motion.div
        className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-magic"
        animate={{ 
          boxShadow: [
            '0 0 30px rgba(6, 182, 212, 0.3)',
            '0 0 50px rgba(5, 150, 105, 0.4)',
            '0 0 30px rgba(6, 182, 212, 0.3)',
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <img 
          src="/assets/avatar.jpg" 
          alt="Avatar Anime Programador" 
          className="w-full h-full object-cover"
        />
      </motion.div>

          {/* Efectos flotantes */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
