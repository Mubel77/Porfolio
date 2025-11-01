import { motion } from "framer-motion";
import { fadeIn, slideUp } from "../utils/animations";
import ContactForm from "../components/ContactForm";

const Contacto = ({ content }) => {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-navy-900 dark:to-black min-h-screen" id="contacto">
      <div className="max-w-4xl mx-auto px-4">
        {/* Título */}
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
            {content.contact.title}
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="text-xl text-navy-600 dark:text-gray-300"
          >
            {content.contact.subtitle}
          </motion.p>
        </motion.div>

        {/* Formulario modular */}
        <ContactForm content={content} />
      </div>
    </main>
  );
};

export default Contacto;
