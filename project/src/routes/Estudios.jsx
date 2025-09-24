import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import StudyCard from "../components/StudyCard";

const Estudios = () => {
  return (
    <main className="pt-32 pb-20 bg-gray-50 dark:bg-navy-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-center text-navy-800 dark:text-cyan-400 mb-12"
        >
          Estudios
        </motion.h1>

        <div className="space-y-8">
          <StudyCard 
            title="Licenciatura en Análisis de Sistemas"
            institution="Universidad de Buenos Aires"
            period="2024 - 2029"
          />
          <StudyCard 
            title="Técnico Electrónico"
            institution="E.E.S.T N°9 Prof. Antonio José Rodríguez Lanús"
            period="2016 - 2022"
          />
        </div>
      </div>
    </main>
  );
};

export default Estudios;