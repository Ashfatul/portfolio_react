import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SKILL_ICON_MAP } from '../../utils/constants';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGlobe,
  FaGitAlt, FaGithub, FaFigma, FaChrome,
} from 'react-icons/fa';
import {
  SiJavascript, SiNextdotjs, SiJquery, SiExpress, SiMongodb,
  SiNpm, SiVite, SiPostman,
} from 'react-icons/si';
import {
  MdDevices, MdGroups, MdRateReview, MdWidgets, MdSpeed, MdTravelExplore,
} from 'react-icons/md';
import { TbApi } from 'react-icons/tb';

const ICON_COMPONENTS = {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGlobe,
  FaGitAlt, FaGithub, FaFigma, FaChrome,
  SiJavascript, SiNextdotjs, SiJquery, SiExpress, SiMongodb,
  SiNpm, SiVite, SiPostman,
  MdDevices, MdGroups, MdRateReview, MdWidgets, MdSpeed, MdTravelExplore,
  TbApi,
};

const CATEGORY_LABELS = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & Platforms',
  practices: 'Practices',
};

const CATEGORY_SIZE = {
  frontend: 'skills__category--large',
  backend: '',
  tools: '',
  practices: 'skills__category--full',
};

function SkillIcon({ name }) {
  const iconName = SKILL_ICON_MAP[name];
  const IconComp = iconName ? ICON_COMPONENTS[iconName] : null;
  return IconComp ? <IconComp /> : null;
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
          {categories.map(([key, items], catIdx) => (
            <ScrollReveal key={key} delay={catIdx * 0.1}>
              <motion.div className={`skills__category ${CATEGORY_SIZE[key] || ''}`}>
                <div className="skills__category-label">{CATEGORY_LABELS[key] || key}</div>
                <div className="skills__list">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skills__pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      whileHover={{ y: -2 }}
                    >
                      <SkillIcon name={skill} />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
