import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { fadeIn, staggerContainer, slideUp } from '../utils/animations';

const Proyectos = ({ content }) => {
  return (
   <main className="pt-32 pb-10 bg-gray-50 dark:bg-navy-900 min-h-[80vh] flex flex-col justify-start">

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1 
            variants={slideUp}
            className="text-4xl md:text-5xl font-bold text-navy-800 dark:text-cyan-400 mb-4"
          >
            Mis Proyectos
          </motion.h1>
          <motion.p 
            variants={slideUp}
            className="text-xl text-navy-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Una colección de proyectos que demuestran mi experiencia en desarrollo web
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content.projects.map((project, index) => (
            <motion.div key={index} variants={slideUp}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Proyectos;