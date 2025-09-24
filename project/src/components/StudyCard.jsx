import { motion } from "framer-motion";
import { slideUp } from "../utils/animations";

const StudyCard = ({ title, institution, period }) => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="p-6 rounded-xl bg-white dark:bg-navy-900 shadow-md"
    >
      <h3 className="text-2xl font-semibold text-cyan-600">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{institution} · {period}</p>
    </motion.div>
  );
};

export default StudyCard;