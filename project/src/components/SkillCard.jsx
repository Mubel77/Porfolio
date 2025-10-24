import { motion } from "framer-motion";
import { slideUp } from "../utils/animations";

const SkillCard = ({ title, icons }) => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 bg-white/60 dark:bg-navy-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 dark:border-navy-700 hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-cyan-400">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4 text-4xl">
        {icons}
      </div>
    </motion.div>
  );
};

export default SkillCard;
