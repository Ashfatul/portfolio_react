import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function TimelineItem({ exp, side }) {
  const [expanded, setExpanded] = useState({});
  const isMobile = useMediaQuery('(max-width: 767px)');
  const actualSide = isMobile ? 'right' : side;

  const toggle = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.div
      className={`experience__item experience__item--${actualSide}`}
      initial={{ opacity: 0, x: actualSide === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="experience__dot" />
      <div className="experience__card">
        <div className="experience__header">
          <h3 className="experience__company">{exp.company}</h3>
          <span className="experience__duration">{exp.duration}</span>
        </div>
        <p className="experience__position">{exp.position}</p>

        {exp.impact?.length > 0 && (
          <div className="experience__section">
            <button
              className={`experience__section-title ${expanded.impact ? 'experience__section-title--expanded' : ''}`}
              onClick={() => toggle('impact')}
            >
              Key Achievements <MdKeyboardArrowDown />
            </button>
            {expanded.impact && (
              <motion.ul
                className="experience__list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {exp.impact.map((item, i) => <li key={i}>{item}</li>)}
              </motion.ul>
            )}
          </div>
        )}

        {exp.leadership?.length > 0 && (
          <div className="experience__section">
            <button
              className={`experience__section-title ${expanded.leadership ? 'experience__section-title--expanded' : ''}`}
              onClick={() => toggle('leadership')}
            >
              Leadership <MdKeyboardArrowDown />
            </button>
            {expanded.leadership && (
              <motion.ul
                className="experience__list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {exp.leadership.map((item, i) => <li key={i}>{item}</li>)}
              </motion.ul>
            )}
          </div>
        )}

        {exp.projects?.length > 0 && (
          <div className="experience__section">
            <div className="experience__section-title">Projects</div>
            <div className="experience__projects">
              {exp.projects.map((p, i) => (
                <span key={i} className="experience__project-chip" title={p.description}>
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {exp.responsibilities?.length > 0 && (
          <div className="experience__section">
            <button
              className={`experience__section-title ${expanded.resp ? 'experience__section-title--expanded' : ''}`}
              onClick={() => toggle('resp')}
            >
              Responsibilities <MdKeyboardArrowDown />
            </button>
            {expanded.resp && (
              <motion.ul
                className="experience__list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {exp.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
              </motion.ul>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience({ data }) {
  const experience = data?.experience;
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!experience?.length) return null;

  return (
    <section id="experience" className="experience">
      <ScrollReveal>
        <h2 className="section-heading">Experience</h2>
        <p className="section-subheading">My professional journey</p>
      </ScrollReveal>

      <div className="experience__timeline" ref={timelineRef}>
        <motion.div
          className="experience__line-progress"
          style={{ scaleY, height: '100%' }}
        />
        {experience.map((exp, idx) => (
          <TimelineItem key={idx} exp={exp} side={idx % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </section>
  );
}
