import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import SkillCard from "../components/SkillCard";
import { 
  FaReact, FaNodeJs, FaJava, FaPython, FaDatabase, FaGitAlt 
} from "react-icons/fa";
import { 
  SiJavascript, SiCsharp, SiCplusplus, SiMysql, SiTailwindcss, 
  SiSap, SiPowerbi, SiPostman 
} from "react-icons/si";

const Habilidades = () => {
  return (
    <main className="pt-32 pb-20 bg-gray-50 dark:bg-navy-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-center text-navy-800 dark:text-cyan-400 mb-12"
        >
          Habilidades Técnicas
        </motion.h1>

        {/* Cards técnicas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <SkillCard 
            title="Backend" 
            icons={[
              <SiJavascript className="text-yellow-400" key="js" />,
              <FaPython className="text-blue-500" key="py" />,
              <FaJava className="text-red-600" key="java" />,
              <SiCsharp className="text-purple-600" key="csharp" />,
              <SiCplusplus className="text-blue-700" key="cpp" />,
              <FaNodeJs className="text-green-600" key="node" />,
              <SiPostman className="text-orange-500" key="postman" />
            ]}
          />
          <SkillCard 
            title="Frontend" 
            icons={[
              <FaReact className="text-cyan-400" key="react" />,
              <SiTailwindcss className="text-sky-400" key="tailwind" />,
              <FaGitAlt className="text-orange-600" key="git" />,
              <span className="text-lg text-gray-500" key="figma">Figma</span>
            ]}
          />
          <SkillCard 
            title="Datos" 
            icons={[
              <SiMysql className="text-blue-500" key="mysql" />,
              <FaDatabase className="text-gray-500" key="db" />,
              <SiPowerbi className="text-yellow-500" key="powerbi" />
            ]}
          />
          <SkillCard 
            title="SAP" 
            icons={[
              <SiSap className="text-blue-700" key="sap" />,
              <span className="text-lg text-gray-500" key="fiori">Fiori</span>,
              <span className="text-lg text-gray-500" key="btp">BTP</span>,
              <span className="text-lg text-gray-500" key="pa">PowerApps</span>
            ]}
          />
        </div>

        {/* Habilidades blandas */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-navy-800 dark:text-cyan-400 mb-6">
            Habilidades Blandas
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comunicación efectiva · Trabajo en equipo · Planificación y organización · Inteligencia emocional · Perseverancia
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Habilidades;