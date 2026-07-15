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
  MdAccountTree
} from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { FiTag } from 'react-icons/fi';

const ICON_COMPONENTS = {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGlobe,
  FaGitAlt, FaGithub, FaFigma, FaChrome,
  SiJavascript, SiNextdotjs, SiJquery, SiExpress, SiMongodb,
  SiNpm, SiVite, SiPostman, SiTypescript, SiTailwindcss, SiBootstrap,
  SiReactquery, SiReacthookform, SiAxios, SiSupabase,
  SiPrisma, SiPostgresql, SiVercel, SiHtml5,
  MdDevices, MdGroups, MdRateReview, MdWidgets, MdSpeed, MdTravelExplore,
  MdLayers, MdStorage, MdBuild, MdArchitecture, MdTranslate, MdDesignServices,
  MdAccountTree,
  TbApi,
  VscVscode,
  FiTag,
};

function SkillIcon({ name }) {
  const iconName = SKILL_ICON_MAP[name] || FALLBACK_ICON;
  const IconComp = ICON_COMPONENTS[iconName] || FiTag;
  return <IconComp />;
}

const STAT_CONFIG = [
  { key: 'yearsExperience', label: 'Years Exp' },
  { key: 'figmaDesigns', label: 'Figma Designs' },
  { key: 'productsShipped', label: 'Products' },
  { key: 'componentsBuilt', label: 'Components' },
];

export default function AboutFrontend({ data }) {
  const meta = data?.meta;
  const stats = data?.stats;
  
  const skillsObj = data?.skills || {};
  const frontendSkills = skillsObj.frontend || [];
  const tools = skillsObj.tools || [];
  const topSkills = [...frontendSkills.slice(0, 10), ...tools.slice(0, 5)];

  return (
    <section id="about" className="about-frontend">
      <div className="about-frontend__inner">


        <div className="about-frontend__bento">
          
          {/* Bento Box 1: The Impact Image */}
          <ScrollReveal delay={0.1} className="bento-box bento-box--image">
            <img src="/user.png" alt="Profile" className="bento-image" />
            <div className="bento-image-overlay">
               <h3 className="bento-image-title">Ashfatul Islam</h3>
               <p className="bento-image-subtitle">Frontend Engineer</p>
            </div>
          </ScrollReveal>

          {/* Bento Box 2: The Bio */}
          <ScrollReveal delay={0.2} className="bento-box bento-box--bio">
            <h3 className="bento-bio-headline">Building the web, one pixel at a time.</h3>
            <p className="bento-bio-text">
              {meta?.about || "Frontend Developer with 3 years of experience building web products using React, Next.js, and TypeScript. Converted 200+ Figma designs into responsive interfaces and shipped 17+ commercial applications. Passionate about clean code, modern architectures, and delivering exceptional user experiences."}
            </p>
          </ScrollReveal>

          {/* Bento Box 3: The Stats */}
          <ScrollReveal delay={0.3} className="bento-box bento-box--stats">
             {STAT_CONFIG.map(({ key, label }, idx) => (
                <div key={key} className="bento-stat-item">
                   <div className="bento-stat-value">{stats?.[key] || '0'}</div>
                   <div className="bento-stat-label">{label}</div>
                </div>
             ))}
          </ScrollReveal>

          {/* Bento Box 4: The Skills Marquee / Grid */}
          <ScrollReveal delay={0.4} className="bento-box bento-box--skills">
            <h3 className="bento-skills-title">Core Technologies</h3>
            <div className="bento-skills-wrapper">
              {topSkills.map((skill, i) => (
                <motion.div 
                  key={skill} 
                  className="bento-skill-pill"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, type: 'spring' }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <span className="skill-icon"><SkillIcon name={skill} /></span>
                  <span className="skill-name">{skill}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
}
