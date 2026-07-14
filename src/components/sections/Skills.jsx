import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SKILL_ICON_MAP, FALLBACK_ICON } from '../../utils/constants';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGlobe,
  FaGitAlt, FaGithub, FaFigma, FaChrome,
} from 'react-icons/fa';
import {
  SiJavascript, SiNextdotjs, SiJquery, SiExpress, SiMongodb,
  SiNpm, SiVite, SiPostman, SiTypescript, SiTailwindcss, SiBootstrap,
  SiReactquery, SiReacthookform, SiAxios, SiSupabase,
  SiPrisma, SiPostgresql, SiVercel, SiHtml5,
} from 'react-icons/si';
import {
  MdDevices, MdGroups, MdRateReview, MdWidgets, MdSpeed, MdTravelExplore,
  MdLayers, MdStorage, MdBuild, MdArchitecture, MdTranslate, MdDesignServices,
  MdAccountTree,
} from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { FiTag } from 'react-icons/fi';

const ICON_COMPONENTS = {
  // FA
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGlobe,
  FaGitAlt, FaGithub, FaFigma, FaChrome,
  // SI
  SiJavascript, SiNextdotjs, SiJquery, SiExpress, SiMongodb,
  SiNpm, SiVite, SiPostman, SiTypescript, SiTailwindcss, SiBootstrap,
  SiReactquery, SiReacthookform, SiAxios, SiSupabase,
  SiPrisma, SiPostgresql, SiVercel, SiHtml5,
  // MD
  MdDevices, MdGroups, MdRateReview, MdWidgets, MdSpeed, MdTravelExplore,
  MdLayers, MdStorage, MdBuild, MdArchitecture, MdTranslate, MdDesignServices,
  MdAccountTree,
  // TB
  TbApi,
  // VSC
  VscVscode,
  // Fallback
  FiTag,
};

// Per-category display: label, header icon, and gradient tone.
// Drives both the header chip and the card's accent stripe.
const CATEGORY_META = {
  frontend:      { label: 'Frontend',      icon: MdLayers,       tone: 'tone-1' },
  stateAndData:  { label: 'State & Data',  icon: MdStorage,      tone: 'tone-2' },
  backendBasics: { label: 'Backend',       icon: FaNodeJs,       tone: 'tone-3' },
  tools:         { label: 'Tools',         icon: MdBuild,        tone: 'tone-4' },
  practices:     { label: 'Practices',     icon: MdArchitecture, tone: 'tone-5' },
};

const DEFAULT_META = { label: '', icon: MdWidgets, tone: 'tone-1' };

function SkillIcon({ name }) {
  // Always render an icon — fall back to FiTag so no pill is iconless
  const iconName = SKILL_ICON_MAP[name] || FALLBACK_ICON;
  const IconComp = ICON_COMPONENTS[iconName] || FiTag;
  return <IconComp />;
}

export default function Skills({ data }) {
  const skills = data?.skills;
  if (!skills) return null;

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <ScrollReveal>
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subheading">Technologies and tools I work with daily</p>
        </ScrollReveal>

        <div className="skills__bento">
          {categories.map(([key, items], catIdx) => {
            const meta = CATEGORY_META[key] || { ...DEFAULT_META, label: key };
            const CategoryIcon = meta.icon;
            return (
              <ScrollReveal key={key} delay={catIdx * 0.08}>
                <motion.article
                  className={`skills__category skills__category--${meta.tone}`}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <header className="skills__category-head">
                    <span className="skills__category-icon" aria-hidden="true">
                      <CategoryIcon />
                    </span>
                    <div className="skills__category-meta">
                      <h3 className="skills__category-label">{meta.label}</h3>
                      <span className="skills__category-count">
                        {items.length} {items.length === 1 ? 'skill' : 'skills'}
                      </span>
                    </div>
                    <span className="skills__category-bar" aria-hidden="true" />
                  </header>

                  <ul className="skills__list">
                    {items.map((skill, i) => (
                      <motion.li
                        key={skill}
                        className="skills__pill"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: i * 0.04, duration: 0.28, ease: 'easeOut' }}
                      >
                        <span className="skills__pill-icon">
                          <SkillIcon name={skill} />
                        </span>
                        <span className="skills__pill-label">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
