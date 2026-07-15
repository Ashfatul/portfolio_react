import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedinIn, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { MdOutlineEmail, MdKeyboardArrowDown, MdPhone, MdLocationOn } from 'react-icons/md';
import { SiJavascript, SiMongodb, SiTypescript } from 'react-icons/si';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const FLOATING_ICONS = [FaReact, SiJavascript, FaNodeJs, SiMongodb, SiTypescript, FaHtml5];

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
    }, 70);
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
      {/* Background Graphic Blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__bg-grid" />

      {/* Floating Tech Icons */}
      <div className="hero__floating-icons">
        {FLOATING_ICONS.map((Icon, i) => (
          <span key={i} className="hero__floating-icon">
            <Icon />
          </span>
        ))}
      </div>

      <div className="hero__inner">
        <motion.div
          className="hero__grid-layout"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left Column: Intro Details */}
          <div className="hero__text-content">
            <motion.div variants={item} className="hero__status-badge">
              <span className="hero__status-pulse" />
              <span>Available for Opportunities</span>
            </motion.div>

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
              <a href={`tel:${data?.meta?.phone}`} className="hero__social-link" aria-label="Phone">
                <MdPhone />
              </a>
              <div className="hero__location" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginLeft: '1rem', fontSize: '0.9rem' }}>
                <MdLocationOn style={{ color: 'var(--accent-1)', fontSize: '1.1rem' }} />
                <span>{data?.meta?.address}</span>
              </div>
            </motion.div>

            <motion.div variants={item} className="hero__ctas">
              <a href="/frontend/resume" target="_blank" rel="noopener noreferrer" className="hero__cta hero__cta--primary">
                View Resume
              </a>
              <button onClick={() => scrollToSection('contact')} className="hero__cta hero__cta--secondary">
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Right Column: Code Window Graphic */}
          <motion.div
            variants={item}
            className="hero__graphic-content"
            whileHover={{ y: -5, rotateX: 1, rotateY: -1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
          >
            <div className="hero__code-window">
              <div className="hero__code-header">
                <div className="hero__code-dots">
                  <span className="hero__code-dot hero__code-dot--red" />
                  <span className="hero__code-dot hero__code-dot--yellow" />
                  <span className="hero__code-dot hero__code-dot--green" />
                </div>
                <span className="hero__code-tab">Developer.tsx</span>
              </div>
              <pre className="hero__code-body">
                <code>
                  <span className="code-kw">const</span> <span className="code-var">developer</span> = &#123;<br />
                  &nbsp;&nbsp;name: <span className="code-str">&apos;{name}&apos;</span>,<br />
                  &nbsp;&nbsp;role: <span className="code-str">&apos;Frontend Developer&apos;</span>,<br />
                  &nbsp;&nbsp;skills: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">&apos;React&apos;</span>, <span className="code-str">&apos;Next.js&apos;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">&apos;TypeScript&apos;</span>, <span className="code-str">&apos;SCSS&apos;</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;experience: <span className="code-num">3</span>, <span className="code-comment">// years</span><br />
                  &nbsp;&nbsp;passion: <span className="code-str">&apos;Building Wow UI/UX Interfaces&apos;</span>,<br />
                  &nbsp;&nbsp;status: <span className="code-str">&apos;Open to Work&apos;</span><br />
                  &#125;;
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator" onClick={() => scrollToSection('about')}>
        <span>Scroll</span>
        <MdKeyboardArrowDown />
      </div>
    </section>
  );
}
