import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react"; // ícono de educación
import StudyCard from "../components/StudyCard";
import { fadeIn, slideUp } from "../utils/animations";

const Estudios = ({ content }) => {
  const { estudios } = content;

  return (
    <main className="pt-32 pb-20 bg-white dark:bg-navy-900 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Título con ícono animado */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center mb-12 text-center"
        >
          <motion.div
            variants={slideUp}
            className="bg-cyan-600/20 dark:bg-cyan-400/20 p-4 rounded-full mb-4"
          >
            <GraduationCap className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
          </motion.div>
          <motion.h2
            variants={slideUp}
            className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2"
          >
            {estudios.titulo}
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Mi formación académica y cursos destacados.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 justify-items-center"
        >
          {estudios.cards.map((item, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="w-full max-w-md"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <StudyCard
                title={item.titulo}
                institution={item.institucion}
                period={item.periodo}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Estudios;
