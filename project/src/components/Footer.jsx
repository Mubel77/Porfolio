import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';

const Footer = ({ content, aboutContent }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: aboutContent.contact.github,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: aboutContent.contact.linkedin,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-navy-900 dark:bg-black text-white py-12 mt-20"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        
        {/* Logo Section */}
        <motion.div variants={fadeIn} className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold text-cyan-400">MAC</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {aboutContent.summary}
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeIn} className="text-center">
          <h4 className="text-lg font-semibold text-cyan-400 mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            {content.quickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={index === 0 ? '/' : `/${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeIn} className="text-center md:text-right">
          <h4 className="text-lg font-semibold text-cyan-400 mb-4">Conecta Conmigo</h4>
          <div className="flex justify-center md:justify-end space-x-4 mb-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            <a 
              href={`mailto:${aboutContent.contact.email}`}
              className="hover:text-cyan-300 transition-colors duration-200"
            >
              {aboutContent.contact.email}
            </a>
          </p>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        variants={fadeIn}
        className="border-t border-navy-800 mt-8 pt-8 text-center"
      >
        <p className="text-gray-400 text-sm">
          {content.copyright} {new Date().getFullYear()}
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;