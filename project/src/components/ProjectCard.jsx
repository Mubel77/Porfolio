import { motion } from 'framer-motion';
import { hoverLevitate } from '../utils/animations';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={hoverLevitate}
      initial="rest"
      whileHover="hover"
      className="bg-white dark:bg-navy-800 rounded-xl overflow-hidden shadow-lg hover:shadow-magic-hover transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-navy-700 to-navy-900 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-cyan-400">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-sm opacity-80">Project Image</p>
            <p className="text-xs opacity-60">{project.image}</p>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-800 dark:text-cyan-400 mb-2 group-hover:text-cyan-500 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-navy-600 dark:text-gray-300 mb-4 text-sm">
          {project.desc}
        </p>

        {/* Project Links */}
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
              <span>🌐</span>
              Live
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
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;