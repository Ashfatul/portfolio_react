import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedinIn, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { MdOutlineEmail, MdKeyboardArrowDown } from 'react-icons/md';
import { SiJavascript, SiMongodb } from 'react-icons/si';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const FLOATING_ICONS = [FaReact, SiJavascript, FaNodeJs, SiMongodb, FaHtml5, FaCss3Alt];

export default function Hero({ data }) {
  const [typed, setTyped] = useState('');
  const title = data?.meta?.position || 'JavaScript Engineer';

  // Typing effect
  useEffect(() => {
    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      if (i < title.length) {
        setTyped(title.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [title]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const name = useMemo(() => {
    if (!data?.meta?.name) return 'Ashfatul Islam';
    const parts = data.meta.name.split(' ');
    return parts.slice(-2).join(' ');
  }, [data]);

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />

      <div className="hero__floating-icons">
        {FLOATING_ICONS.map((Icon, i) => (
          <span key={i} className="hero__floating-icon">
            <Icon />
          </span>
        ))}
      </div>

      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="hero__greeting">
          Hello, I&apos;m
        </motion.p>

        <motion.h1 variants={item} className="hero__name">
          {name}
        </motion.h1>

        <motion.h2 variants={item} className="hero__title">
          <span className="hero__title-cursor">{typed}</span>
        </motion.h2>

        <motion.p variants={item} className="hero__about">
          {data?.meta?.heroAbout || data?.meta?.about}
        </motion.p>

        <motion.div variants={item} className="hero__social">
          <a href={data?.meta?.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
            <IoLogoGithub />
          </a>
          <a href={data?.meta?.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href={`mailto:${data?.meta?.email}`} className="hero__social-link" aria-label="Email">
            <MdOutlineEmail />
          </a>
        </motion.div>

        <motion.div variants={item} className="hero__ctas">
          <a href="/resume" target="_blank" rel="noopener noreferrer" className="hero__cta hero__cta--primary">
            View Resume
          </a>
          <button onClick={() => scrollToSection('contact')} className="hero__cta hero__cta--secondary">
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      <div className="hero__scroll-indicator" onClick={() => scrollToSection('about')}>
        <span>Scroll</span>
        <MdKeyboardArrowDown />
      </div>
    </section>
  );
}
