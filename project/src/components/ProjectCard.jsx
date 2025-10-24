import { motion } from 'framer-motion';
import { hoverLevitate } from '../utils/animations';

const ProjectCard = ({ project }) => {
  const hasVideo = project.video && project.video.trim() !== "";

  return (
    <motion.div
      variants={hoverLevitate}
      initial="rest"
      whileHover="hover"
      className="bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-lg hover:shadow-magic-hover transition-all duration-300 group"
    >
      {/* Imagen o video */}
      <div className="relative h-52 bg-navy-900 overflow-hidden">
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
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-800 dark:text-cyan-400 mb-2 group-hover:text-cyan-500 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-navy-600 dark:text-gray-300 mb-4 text-sm">
          {project.desc}
        </p>

        {/* Links */}
        <div className="flex gap-3">
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
