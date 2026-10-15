import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { fadeIn, staggerContainer, slideUp } from '../utils/animations';

const Proyectos = ({ content }) => {
  return (
   <main className="page-section min-h-[80vh] flex flex-col justify-start">

      <div className="page-container">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="page-heading"
          data-page-title
        >
          <motion.p variants={slideUp} className="section-kicker">
            {content.projectsEyebrow}
          </motion.p>
          <motion.h1
            variants={slideUp}
          >
            {content.header.nav[1]}
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="page-heading-copy"
          >
            {content.projectsIntro}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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