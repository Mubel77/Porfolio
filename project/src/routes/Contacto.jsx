import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, scaleIn } from '../utils/animations';

const Contacto = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="contacto" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-navy-900 dark:to-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
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

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-magic"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={slideUp}>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 dark:text-cyan-400 mb-2">
                  {content.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-800 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors duration-200"
                />
              </motion.div>

              <motion.div variants={slideUp}>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 dark:text-cyan-400 mb-2">
                  {content.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-800 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors duration-200"
                />
              </motion.div>
            </div>

            <motion.div variants={slideUp}>
              <label htmlFor="message" className="block text-sm font-medium text-navy-700 dark:text-cyan-400 mb-2">
                {content.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-800 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors duration-200 resize-none"
              ></textarea>
            </motion.div>

            <motion.div variants={scaleIn}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg shadow-magic hover:shadow-magic-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : content.contact.form.send}
              </button>
            </motion.div>
          </form>

          {/* Status Messages */}
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-lg text-center ${
                submitStatus === 'success'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}
            >
              {submitStatus === 'success' ? content.contact.success : content.contact.error}
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default Contacto;