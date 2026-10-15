import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, MoveUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = ({ content }) => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImage, setCurrentImage] = useState(content.images[0]);
  const currentFullText = content.typing?.[currentIndex] ?? content.title;

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentText('');
    setIsDeleting(false);
  }, [content.typing, content.title]);

  useEffect(() => {
    const isPausing = !isDeleting && currentText === currentFullText;
    const timeout = window.setTimeout(() => {
      if (isPausing) {
        setIsDeleting(true);
      } else if (isDeleting && currentText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((index) => (index + 1) % (content.typing?.length || 1));
      } else {
        const nextLength = currentText.length + (isDeleting ? -1 : 1);
        setCurrentText(currentFullText.substring(0, nextLength));
      }
    }, isPausing ? 1300 : isDeleting ? 38 : 78);

    return () => window.clearTimeout(timeout);
  }, [content.typing, currentFullText, currentText, isDeleting]);

  useEffect(() => {
    const images = content.images;
    if (images.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setCurrentImage((image) => {
        const currentPosition = images.indexOf(image);
        return images[(currentPosition + 1) % images.length];
      });
    }, 4800);

    return () => window.clearInterval(interval);
  }, [content.images]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/MauAbelCuellar.pdf';
    link.download = 'MAC-AnalistaDeSistemas.pdf';
    link.click();
  };

  return (
    <section className="hero-section">
      <div className="hero-grid page-container">
        <div className="hero-copy" data-reveal>
          <p className="hero-eyebrow">
            <span className="status-dot" />
            {content.eyebrow}
          </p>
          <h1 className="hero-title">
            <span className="hero-greeting">{content.greeting}</span>
            <span className="hero-name">{content.title}<span className="hero-period">.</span></span>
          </h1>
          <p className="hero-role">
            {currentText}
            <span className="typing-caret" aria-hidden="true" />
          </p>
          <p className="hero-summary">{content.about}</p>

          <div className="hero-actions">
            <motion.button
              className="button-primary"
              onClick={() => navigate('/contacto')}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              type="button"
            >
              {content.ctaContact}
              <ArrowUpRight aria-hidden="true" size={18} />
            </motion.button>
            <motion.button
              className="button-secondary"
              onClick={handleDownloadCV}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              type="button"
            >
              <Download aria-hidden="true" size={17} />
              {content.ctaDownload}
            </motion.button>
          </div>

          <Link className="hero-work-link" to="/proyectos">
            {content.ctaProjects}
            <MoveUpRight aria-hidden="true" size={15} />
          </Link>

          <div className="hero-stack">
            <span>{content.stackLabel}</span>
            <strong>React</strong>
            <i />
            <strong>Node.js</strong>
            <i />
            <strong>SAP</strong>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-image-frame">
            <div className="hero-image-glow" />
            <motion.img
              alt={content.imageAlt}
              animate={{ opacity: 1, scale: 1 }}
              className="hero-image"
              initial={{ opacity: 0, scale: 1.04 }}
              key={currentImage}
              src={currentImage}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            />
            <div className="hero-image-index">
              <span>01</span>
              <span className="hero-index-line" />
              <span>MAC</span>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            className="hero-floating-card"
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="floating-card-icon"><ArrowDown size={16} /></span>
            <span>{content.availability}</span>
          </motion.div>
          <span className="hero-coordinate">34°36&apos;S — 58°22&apos;W</span>
        </div>
      </div>
      <span className="hero-background-word" aria-hidden="true">PORTFOLIO</span>
    </section>
  );
};

export default Hero;
