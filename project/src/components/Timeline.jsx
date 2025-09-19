import { motion } from 'framer-motion';
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
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-emerald-500 transform md:-translate-x-1/2" />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          variants={slideUp}
          className={`relative mb-12 ${
            index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
          } pl-12 md:w-1/2 ${
            index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-4 md:left-auto md:right-4 w-3 h-3 bg-cyan-500 rounded-full transform -translate-x-1/2 md:translate-x-1/2 shadow-magic">
            <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping" />
          </div>

          {/* Content card */}
          <motion.div
            className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-lg hover:shadow-magic-hover transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex flex-col md:items-start">
              <span className="text-sm font-medium text-cyan-500 dark:text-cyan-400 mb-1">
                {exp.date}
              </span>
              <h3 className="text-xl font-bold text-navy-800 dark:text-white mb-1">
                {exp.role}
              </h3>
              <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                {exp.company}
              </h4>
              <p className="text-navy-600 dark:text-gray-300 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Timeline;