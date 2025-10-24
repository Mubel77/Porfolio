import { motion } from "framer-motion";
import { slideUp } from "../utils/animations";

const StudyCard = ({ title, institution, period }) => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-white/60 dark:bg-navy-800/80 backdrop-blur-md shadow-lg border border-gray-200 dark:border-navy-700 hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-2xl font-bold text-navy-900 dark:text-cyan-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        {institution}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {period}
      </p>
    </motion.div>
  );
};

export default StudyCard;
