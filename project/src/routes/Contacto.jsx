import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "../utils/animations";
import ContactForm from "../components/ContactForm";

const Contacto = ({ content }) => {
  const { email, github, linkedin } = content.about.contact;

  return (
    <main className="page-section contact-page" id="contacto">
      <div className="page-container">
        <motion.div
          className="page-heading contact-heading"
          data-page-title
          initial="hidden"
          variants={fadeIn}
          animate="visible"
        >
          <motion.p variants={slideUp} className="section-kicker">
            {content.contact.eyebrow}
          </motion.p>
          <motion.h1 variants={slideUp}>{content.contact.title}</motion.h1>
          <motion.p variants={slideUp} className="page-heading-copy">
            {content.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="contact-layout">
          <aside className="contact-aside" data-reveal>
            <p className="section-kicker">{content.contact.asideKicker}</p>
            <h2>{content.contact.asideTitle}</h2>
            <p className="contact-aside-copy">{content.contact.asideText}</p>

            <a className="contact-email-card" href={`mailto:${email}`}>
              <span className="contact-email-icon"><Mail size={19} /></span>
              <span>
                <small>{content.contact.emailLabel}</small>
                <strong>{email}</strong>
              </span>
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>

            <div className="contact-socials">
              <a aria-label="GitHub" href={github} rel="noreferrer" target="_blank">
                <Github size={19} />
                <span>GitHub</span>
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
              <a aria-label="LinkedIn" href={linkedin} rel="noreferrer" target="_blank">
                <Linkedin size={19} />
                <span>LinkedIn</span>
                <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </aside>

          <ContactForm content={content} recipient={email} />
        </div>
      </div>
    </main>
  );
};

export default Contacto;
