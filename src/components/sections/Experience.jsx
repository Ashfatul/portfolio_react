import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { MdKeyboardArrowDown, MdAutoAwesome, MdAccountTree, MdTaskAlt, MdGroups } from 'react-icons/md';

const METRICS = [
  { value: 3, suffix: ' Years', label: 'Frontend Ownership', icon: MdAutoAwesome },
  { value: 17, suffix: '+', label: 'Commercial Products', icon: MdAccountTree },
  { value: 200, suffix: '+', label: 'Figma-to-Code Screens', icon: MdTaskAlt },
  { value: 30, suffix: '+', label: 'REST APIs Integrated', icon: MdGroups },
];

export default function Experience({ data }) {
  const experience = data?.experience?.[0]; // SpondonIT is the main/only experience item
  const [expanded, setExpanded] = useState({ impact: true, leadership: false, resp: false });

  if (!experience) return null;

  const toggle = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <ScrollReveal>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="section-subheading">Creating impact through modern engineering and ownership</p>
        </ScrollReveal>

        <div className="experience__container-grid">
          {/* Left Column: Core Experience Details */}
          <ScrollReveal delay={0.1} className="experience__main-reveal">
            <div className="experience__main-card">
              <header className="experience__main-header">
                <div className="experience__main-meta">
                  <span className="experience__main-tag">Current Role</span>
                  <h3 className="experience__main-position">{experience.position}</h3>
                  <div className="experience__main-company-row">
                    <span className="experience__main-company">{experience.company}</span>
                    <span className="experience__main-dot-separator">•</span>
                    <span className="experience__main-duration">{experience.duration}</span>
                  </div>
                </div>
              </header>

              {/* Achievements Accordion */}
              <div className="experience__accordion">
                {/* Achievements */}
                {experience.impact?.length > 0 && (
                  <div className="experience__acc-item">
                    <button
                      className={`experience__acc-title ${expanded.impact ? 'experience__acc-title--expanded' : ''}`}
                      onClick={() => toggle('impact')}
                    >
                      <span className="experience__acc-title-text">Key Achievements</span>
                      <MdKeyboardArrowDown className="experience__acc-arrow" />
                    </button>
                    {expanded.impact && (
                      <motion.ul
                        className="experience__acc-list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {experience.impact.map((item, i) => <li key={i}>{item}</li>)}
                      </motion.ul>
                    )}
                  </div>
                )}

                {/* Leadership */}
                {experience.leadership?.length > 0 && (
                  <div className="experience__acc-item">
                    <button
                      className={`experience__acc-title ${expanded.leadership ? 'experience__acc-title--expanded' : ''}`}
                      onClick={() => toggle('leadership')}
                    >
                      <span className="experience__acc-title-text">Leadership & Collaboration</span>
                      <MdKeyboardArrowDown className="experience__acc-arrow" />
                    </button>
                    {expanded.leadership && (
                      <motion.ul
                        className="experience__acc-list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {experience.leadership.map((item, i) => <li key={i}>{item}</li>)}
                      </motion.ul>
                    )}
                  </div>
                )}

                {/* Responsibilities */}
                {experience.responsibilities?.length > 0 && (
                  <div className="experience__acc-item">
                    <button
                      className={`experience__acc-title ${expanded.resp ? 'experience__acc-title--expanded' : ''}`}
                      onClick={() => toggle('resp')}
                    >
                      <span className="experience__acc-title-text">Core Responsibilities</span>
                      <MdKeyboardArrowDown className="experience__acc-arrow" />
                    </button>
                    {expanded.resp && (
                      <motion.ul
                        className="experience__acc-list"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {experience.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                      </motion.ul>
                    )}
                  </div>
                )}
              </div>

              {/* Projects Section */}
              {experience.projects?.length > 0 && (
                <div className="experience__main-projects">
                  <h4 className="experience__projects-label">Shipped Products</h4>
                  <div className="experience__projects-chips">
                    {experience.projects.map((p, i) => (
                      <motion.span
                        key={i}
                        className="experience__project-chip"
                        title={p.description}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                      >
                        {p.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right Column: Performance Stats */}
          <div className="experience__stats-sidebar">
            {METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <ScrollReveal key={idx} delay={0.15 + idx * 0.08}>
                  <motion.div
                    className="experience__stat-card"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="experience__stat-icon-wrapper">
                      <Icon className="experience__stat-icon" />
                    </div>
                    <div className="experience__stat-details">
                      <h4 className="experience__stat-number">
                        <AnimatedCounter value={metric.value} />
                        <span className="experience__stat-suffix">{metric.suffix}</span>
                      </h4>
                      <p className="experience__stat-label">{metric.label}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
