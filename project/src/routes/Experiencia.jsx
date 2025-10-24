import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import { fadeIn, slideUp } from '../utils/animations';

const Experiencia = ({ content }) => {
  return (
    <main className="pt-32 pb-20 bg-white dark:bg-navy-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
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
            Experiencia Profesional
          </motion.h1>
          <motion.p 
            variants={slideUp}
            className="text-xl text-navy-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Mi trayectoria profesional y los logros que he alcanzado
          </motion.p>
        </motion.div>

        <Timeline experiences={content.experience} />
      </div>
    </main>
  );
};

export default Experiencia;
