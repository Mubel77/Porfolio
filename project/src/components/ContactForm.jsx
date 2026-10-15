import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";

const ContactForm = ({ content, recipient }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [mailAppOpened, setMailAppOpened] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `${content.contact.emailSubjectPrefix}: ${formData.subject}`;
    const body = [
      `${content.contact.form.name}: ${formData.name}`,
      `${content.contact.form.email}: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setMailAppOpened(true);
  };

  return (
    <div className="contact-form-card">
      <div className="contact-form-heading">
        <div>
          <p className="section-kicker">{content.contact.formKicker}</p>
          <h2>{content.contact.formTitle}</h2>
        </div>
        <span className="contact-form-icon" aria-hidden="true">
          <Mail size={22} />
        </span>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-grid">
          <div className="contact-field">
            <label htmlFor="contact-name">{content.contact.form.name}</label>
            <input
              autoComplete="name"
              id="contact-name"
              name="name"
              onChange={handleChange}
              placeholder={content.contact.placeholders.name}
              required
              value={formData.name}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">{content.contact.form.email}</label>
            <input
              autoComplete="email"
              id="contact-email"
              name="email"
              onChange={handleChange}
              placeholder={content.contact.placeholders.email}
              required
              type="email"
              value={formData.email}
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="contact-subject">{content.contact.form.subject}</label>
          <select
            id="contact-subject"
            name="subject"
            onChange={handleChange}
            required
            value={formData.subject}
          >
            <option value="">{content.contact.options.default}</option>
            <option value={content.contact.options.job}>{content.contact.options.job}</option>
            <option value={content.contact.options.freelance}>{content.contact.options.freelance}</option>
            <option value={content.contact.options.collaboration}>{content.contact.options.collaboration}</option>
            <option value={content.contact.options.general}>{content.contact.options.general}</option>
          </select>
        </div>

        <div className="contact-field">
          <label htmlFor="contact-message">{content.contact.form.message}</label>
          <textarea
            id="contact-message"
            name="message"
            onChange={handleChange}
            placeholder={content.contact.placeholders.message}
            required
            rows={5}
            value={formData.message}
          />
        </div>

        <button className="contact-submit" type="submit">
          <span>{content.contact.buttons.send}</span>
          <Send aria-hidden="true" size={17} />
        </button>

        <p className="contact-form-note" aria-live="polite">
          {mailAppOpened ? content.contact.mailtoOpened : content.contact.mailtoHint}
        </p>
      </form>

      <a className="contact-direct-link" href={`mailto:${recipient}`}>
        {recipient}
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </div>
  );
};

export default ContactForm;
