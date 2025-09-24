import { motion } from "framer-motion";
import { slideUp } from "../utils/animations";

const SkillCard = ({ title, icons }) => {
  return (
    <motion.div 
      variants={slideUp} 
      className="p-6 bg-white dark:bg-navy-800 rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-cyan-600">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4 text-4xl">
        {icons}
      </div>
    </motion.div>
  );
};

export default SkillCard;