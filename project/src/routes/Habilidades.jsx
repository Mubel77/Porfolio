import { motion } from "framer-motion";
import { fadeIn, slideUp } from "../utils/animations";
import { Database, Code, Layers, Cpu } from "lucide-react";

const Habilidades = ({ content }) => {
  const habilidades_tecnicas = content?.habilidades_tecnicas || [];
  const habilidades_blandas = content?.habilidades_blandas || [];

  // Íconos por categoría
  const iconCategoryMap = {
    Backend: <Code className="w-6 h-6 text-cyan-500" />,
    Frontend: <Layers className="w-6 h-6 text-green-400" />,
    Datos: <Database className="w-6 h-6 text-orange-400" />,
    SAP: <Cpu className="w-6 h-6 text-blue-400" />,
  };

  // Colores personalizados por categoría
  const colorMap = {
    Backend: "from-cyan-500/20 to-cyan-700/10",
    Frontend: "from-green-500/20 to-green-700/10",
    Datos: "from-orange-500/20 to-orange-700/10",
    SAP: "from-blue-500/20 to-blue-700/10",
  };

  return (
    <main className="pt-32 pb-20 bg-white dark:bg-navy-900 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Título principal */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-3">
            Habilidades Técnicas
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tecnologías y áreas en las que tengo experiencia práctica.
          </p>
        </motion.div>

        {/* Habilidades Técnicas */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        >
          {habilidades_tecnicas.map((cat, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`w-full max-w-sm p-5 rounded-2xl bg-gradient-to-br ${colorMap[cat.titulo] || "from-cyan-500/10 to-cyan-800/5"} border border-gray-200 dark:border-navy-700 shadow-md`}
            >
              {/* Encabezado */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/10 dark:bg-navy-800/40">
                  {iconCategoryMap[cat.titulo] || (
                    <Code className="w-6 h-6 text-cyan-400" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 dark:text-cyan-300">
                  {cat.titulo}
                </h3>
              </div>

              {/* Lista de habilidades */}
              <ul className="space-y-2">
                {cat.iconos.map((skill, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 rounded-lg bg-white/10 dark:bg-navy-800/60 text-gray-700 dark:text-gray-200 border border-gray-200/20 dark:border-navy-700 text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Habilidades Blandas */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold text-cyan-500 dark:text-cyan-400 mb-6">
            Habilidades Blandas
          </h2>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300">
            {habilidades_blandas.map((habilidad, index) => (
              <motion.li
                key={index}
                variants={slideUp}
                className="px-4 py-2 bg-gray-100 dark:bg-navy-800 rounded-full border border-gray-200 dark:border-navy-700 hover:scale-105 transition-transform duration-200"
              >
                {habilidad}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default Habilidades;
