import { motion } from 'framer-motion';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail, MdLocationOn, MdLanguage, MdWorkOutline } from 'react-icons/md';
import { ScrollReveal } from '../ui/ScrollReveal';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const STAT_CONFIG = [
  { key: 'yearsExperience', label: 'Years Exp' },
  { key: 'figmaDesigns', label: 'Figma Designs' },
  { key: 'productsShipped', label: 'Products' },
  { key: 'componentsBuilt', label: 'Components' },
];

export default function About({ data }) {
  const meta = data?.meta;
  const stats = data?.stats;

  return (
    <section id="about" className="about">
      <div className="about__grid">
        <ScrollReveal>
          <motion.div
            className="about__card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src="/user.png" alt={meta?.name} className="about__avatar" />
            <h3 className="about__name">{meta?.name?.split(' ').slice(-2).join(' ')}</h3>
            <p className="about__position">{meta?.position}</p>

            <div className="about__info">
              <div className="about__info-item">
                <MdLocationOn />
                <span>{meta?.address}</span>
              </div>
              <div className="about__info-item">
                <MdWorkOutline />
                <span>{meta?.status}</span>
              </div>
              <div className="about__info-item">
                <MdLanguage />
                <span>{meta?.languages?.join(', ')}</span>
              </div>
              <div className="about__info-item">
                <MdOutlineEmail />
                <span>{meta?.email}</span>
              </div>
            </div>

            <div className="about__social">
              <a href={meta?.github} target="_blank" rel="noopener noreferrer" className="about__social-link" aria-label="GitHub">
                <IoLogoGithub />
              </a>
              <a href={meta?.linkedin} target="_blank" rel="noopener noreferrer" className="about__social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href={`mailto:${meta?.email}`} className="about__social-link" aria-label="Email">
                <MdOutlineEmail />
              </a>
            </div>
          </motion.div>
        </ScrollReveal>

        <div className="about__content">
          <ScrollReveal>
            <h2 className="section-heading">About Me</h2>
            <p className="about__bio">{meta?.about}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="about__stats">
              {STAT_CONFIG.map(({ key, label }) => (
                <div key={key} className="about__stat">
                  <div className="about__stat-number">
                    <AnimatedCounter value={stats?.[key] || '0'} />
                  </div>
                  <div className="about__stat-label">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
