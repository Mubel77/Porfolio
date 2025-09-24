// src/components/ContactForm.jsx
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, TriangleAlert } from "lucide-react";

const ContactForm = ({ content }) => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  // Prevención spam: 24hs
  useEffect(() => {
    const lastSent = localStorage.getItem("lastEmailSent");
    if (lastSent) {
      const diff = Date.now() - parseInt(lastSent, 10);
      const msLeft = 24 * 60 * 60 * 1000 - diff;

      if (diff < 24 * 60 * 60 * 1000) {
        setIsSubmitted(true);
      }
      if (msLeft > 0) setTimeLeft(msLeft);
    }
  }, []);

  useEffect(() => {
    let interval;
    if (timeLeft !== null) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev && prev > 1000) return prev - 1000;
          clearInterval(interval);
          return null;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceID = "service_bzba2v3"; // 🔑 tu service ID de EmailJS
      const templateID = "template_m8app5c"; // 🔑 tu template ID
      const publicKey = "gSZ01IZJKBdv2RKiQ"; // 🔑 tu public key

      if (form.current) {
        await emailjs.sendForm(serviceID, templateID, form.current, publicKey);

        setIsSubmitting(false);
        setIsSubmitted(true);
        localStorage.setItem("lastEmailSent", Date.now().toString());
      }
    } catch (err) {
      alert(content.contact.error);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-magic">
      {/* Ya envió correo en las últimas 24hs */}
      {timeLeft !== null ? (
        <div className="text-center py-12">
          <TriangleAlert className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {content.contact.alreadySent.title} {formatTime(timeLeft)}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            {content.contact.alreadySent.text}
          </p>
        </div>
      ) : isSubmitted ? (
        <div className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {content.contact.success}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">
            {content.contact.subtitle}
          </p>
        </div>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy-700 dark:text-cyan-400 mb-2"
              >
                {content.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={content.contact.placeholders.name}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-800 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy-700 dark:text-cyan-400 mb-2"
              >
                {content.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={content.contact.placeholders.email}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-800 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors duration-200"
              />
            </div>
          </div>

          {/* Asunto */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-navy-700 dark:text-cyan-400 mb-2"
            >
              {content.contact.form.subject}
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-800 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors duration-200"
            >
              <option value="">{content.contact.options.default}</option>
              <option value="job">{content.contact.options.job}</option>
              <option value="freelance">{content.contact.options.freelance}</option>
              <option value="collaboration">{content.contact.options.collaboration}</option>
              <option value="general">{content.contact.options.general}</option>
            </select>
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-navy-700 dark:text-cyan-400 mb-2"
            >
              {content.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder={content.contact.placeholders.message}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-800 dark:text-white focus:border-cyan-500 focus:outline-none transition-colors duration-200 resize-none"
            />
          </div>

          {/* Botón enviar */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg shadow-magic hover:shadow-magic-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{content.contact.buttons.sending}</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>{content.contact.buttons.send}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
