import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, slideUp, scaleIn } from "../utils/animations";

const Hero = ({ content }) => {
  const navigate = useNavigate();

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImage, setCurrentImage] = useState(content.images[0]);

  // --- Efecto typing ---
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
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % content.typing.length);
        } else {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, content.typing]);

  // --- Cambio automático de imagen cada 3 segundos ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === content.images[0] ? content.images[1] : content.images[0]
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [content.images]);

  // --- Botones ---
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/MauricioAbelCuellarDevSap.pdf";
    link.download = "MAC-MauricioAbelCuellarDevSap.pdf";
    link.click();
  };

  const handleContact = () => {
    navigate("/contacto"); // ✅ redirección rápida a la ruta /contacto
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-cyan-50 dark:from-navy-900 dark:via-black dark:to-navy-800 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* --- Texto principal --- */}
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

          <motion.p
            variants={fadeIn}
            className="text-lg text-navy-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {content.about}
          </motion.p>
        </motion.div>

        {/* --- Imagen principal --- */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center"
        >
          <motion.div
            key={currentImage}
            className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-magic"
            initial={{ opacity: 0, scale: 0.95, rotateY: 0, filter: "blur(6px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 360,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <img
              src={currentImage}
              alt="Avatar Hero"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* --- Efectos decorativos --- */}
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
