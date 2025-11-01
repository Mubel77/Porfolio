import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { slideUp, staggerContainer } from '../utils/animations';

const Timeline = ({ experiences }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-emerald-500 transform md:-translate-x-1/2" />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={slideUp}
          className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-12 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
        >
          <div className="absolute left-4 md:left-auto md:right-4 w-3 h-3 bg-cyan-500 rounded-full transform -translate-x-1/2 md:translate-x-1/2 shadow-magic">
            <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping" />
          </div>

          <motion.div
            className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg hover:shadow-magic-hover transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* 🖼️ Carrusel de imágenes o video */}
            {exp.video && exp.video.trim() !== "" ? (
              <video
                src={exp.video}
                autoPlay
                loop
                muted
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            ) : (
              <ImageCarousel images={exp.imagenes || [exp.imagen]} titulo={exp.tituloOEmpresa} />
            )}

            <div className="flex flex-col md:items-start">
              <span className="text-sm font-medium text-cyan-500 dark:text-cyan-400 mb-1">
                {exp.inicio} – {exp.final}
              </span>
              <h3 className="text-xl font-bold text-navy-800 dark:text-white mb-1">
                {exp.puesto}
              </h3>
              <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                {exp.tituloOEmpresa}
              </h4>

              <Descripcion texto={exp.descripcion} />

              {/* 🧠 Chips de tecnologías */}
              {exp.lenguajes && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.lenguajes.map((lang, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// 🎞️ Carrusel de imágenes automático con pausa al clic
const ImageCarousel = ({ images, titulo }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused, images.length]);

  return (
    <div
      className="relative w-full h-64 overflow-hidden rounded-lg mb-4 cursor-pointer"
      onClick={() => setPaused(!paused)}
    >
      <motion.img
        key={index}
        src={images[index]}
        alt={titulo}
        className="absolute w-full h-full object-cover rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      {paused && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-sm font-semibold">
          Pausado
        </div>
      )}
    </div>
  );
};

// 📝 Descripción con botón Ver más / Ver menos
const Descripcion = ({ texto }) => {
  const [expandido, setExpandido] = useState(false);
  const limite = 150;

  if (texto.length <= limite) {
    return <p className="text-navy-600 dark:text-gray-300 leading-relaxed">{texto}</p>;
  }

  return (
    <div>
      <p className="text-navy-600 dark:text-gray-300 leading-relaxed">
        {expandido ? texto : texto.slice(0, limite) + '...'}
      </p>
      <button
        onClick={() => setExpandido(!expandido)}
        className="mt-2 text-sm font-medium text-cyan-500 dark:text-cyan-400 hover:underline"
      >
        {expandido ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  );
};

export default Timeline;
