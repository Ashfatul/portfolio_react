import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineEmail, MdLocationOn } from 'react-icons/md';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { ScrollReveal } from '../ui/ScrollReveal';
import emailjs from '@emailjs/browser';

const CONTACT_INFO = [
  { icon: MdLocationOn, label: 'Location', value: 'Shewrapara, Mirpur, Dhaka, Bangladesh' },
  { icon: MdOutlineEmail, label: 'Email', value: 'ashfatul.islam@gmail.com', href: 'mailto:ashfatul.islam@gmail.com' },
  { icon: IoLogoGithub, label: 'GitHub', value: '@ashfatul', href: 'https://github.com/ashfatul' },
  { icon: FaLinkedinIn, label: 'LinkedIn', value: '@ashfatul', href: 'https://linkedin.com/in/ashfatul' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_USER_ID
    )
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__grid">
          <ScrollReveal>
            <div className="contact__info">
              <h2 className="section-heading">Let&apos;s Work Together</h2>
              <p>
                Have a project in mind or just want to say hi? Feel free to reach out.
                I&apos;m always open to discussing new ideas and opportunities.
              </p>

              <div className="contact__info-cards">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }, idx) => (
                  <motion.a
                    key={label}
                    href={href || '#'}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact__info-card"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                  >
                    <div className="contact__info-card-icon">
                      <Icon />
                    </div>
                    <div className="contact__info-card-content">
                      <p>{label}</p>
                      <p>{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="contact__form-wrapper">
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__field">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="contact__field-input"
                    placeholder=" "
                  />
                  <label className="contact__field-label">Your Name</label>
                </div>

                <div className="contact__field">
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="contact__field-input"
                    placeholder=" "
                  />
                  <label className="contact__field-label">Your Email</label>
                </div>

                <div className="contact__field">
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="contact__field-textarea"
                    placeholder=" "
                    rows={5}
                  />
                  <label className="contact__field-label">Your Message</label>
                </div>

                <motion.button
                  type="submit"
                  className="contact__submit"
                  disabled={status === 'loading'}
                  whileTap={{ scale: 0.97 }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </motion.button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      className="contact__feedback contact__feedback--success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      className="contact__feedback contact__feedback--error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Failed to send message. Please try again or email directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
