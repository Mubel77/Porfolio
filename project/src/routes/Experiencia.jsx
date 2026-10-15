import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import { fadeIn, slideUp } from '../utils/animations';

const Experiencia = ({ content }) => {
  return (
    <main className="page-section min-h-screen">
      <div className="page-container max-w-6xl">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="page-heading"
          data-page-title
        >
          <motion.p variants={slideUp} className="section-kicker">
            {content.experienceEyebrow}
          </motion.p>
          <motion.h1
            variants={slideUp}
          >
            {content.header.nav[2]}
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="page-heading-copy"
          >
            {content.experienceIntro}
          </motion.p>
        </motion.div>

        <Timeline experiences={content.experience} />
      </div>
    </main>
  );
};

export default Experiencia;
