import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hoverLevitate } from "../utils/animations";

const ProjectCard = ({ project }) => {
  const hasVideo = project.video && project.video.trim() !== "";
  const images = project.images || [project.image];
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Carrusel automático
  useEffect(() => {
    if (!paused && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [paused, images.length]);

  const togglePause = () => setPaused(!paused);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <motion.div
      variants={hoverLevitate}
      initial="rest"
      whileHover="hover"
      className="bg-white dark:bg-navy-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-magic-hover transition-all duration-300 group flex flex-col h-full"
    >
      {/* Imagen o video */}
      <div
        className="relative h-80 md:h-96 lg:h-[28rem] bg-navy-900 overflow-hidden cursor-pointer"
        onClick={togglePause}
      >
        {hasVideo ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            key={currentImage}
            src={images[currentImage]}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
        )}

        {/* Indicadores del carrusel */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImage ? "bg-cyan-400" : "bg-gray-400/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-2xl font-bold text-navy-800 dark:text-cyan-400 mb-3 group-hover:text-cyan-500 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-navy-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {expanded
              ? project.desc
              : project.desc.slice(0, 200) + (project.desc.length > 200 ? "..." : "")}
          </p>

          {project.desc.length > 200 && (
            <button
              onClick={toggleExpanded}
              className="text-cyan-500 text-sm font-semibold hover:underline mb-4"
            >
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          )}

          {/* Chips de lenguajes */}
          {project.languages && project.languages.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.links.live && (
            <motion.a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-400 transition-colors duration-200 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🌐 Live
            </motion.a>
          )}
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-navy-700 text-white rounded-lg text-sm font-medium hover:bg-navy-600 transition-colors duration-200 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💻 GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
