import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Projects({ data }) {
  const projects = data?.showcase_projects;
  const [filter, setFilter] = useState('All');

  const techFilters = useMemo(() => {
    if (!projects) return ['All'];
    const techs = new Set();
    projects.forEach(p => p.techStack?.forEach(t => techs.add(t)));
    return ['All', ...Array.from(techs)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (!projects) return [];
    if (filter === 'All') return projects;
    return projects.filter(p => p.techStack?.includes(filter));
  }, [projects, filter]);

  if (!projects?.length) return null;

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <ScrollReveal>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">Professional work I&apos;ve delivered</p>
        </ScrollReveal>

        <div className="projects__filters">
          {techFilters.map((tech, idx) => (
            <motion.button
              key={tech}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              className={`projects__filter ${filter === tech ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
              {filter === tech && (
                <motion.div
                  className="projects__filter-bg"
                  layoutId="filter-bg"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
                layout
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 15,
                  delay: idx * 0.06,
                }}
              >
                <div
                  className="projects__card-media"
                  style={project.image ? {} : { background: project.gradient }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="projects__card-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = project.gradient;
                        const fallbackText = e.target.parentElement.querySelector('.projects__card-fallback-text');
                        if (fallbackText) fallbackText.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <span
                    className="projects__card-fallback-text"
                    style={{ display: project.image ? 'none' : 'block' }}
                  >
                    {project.name}
                  </span>
                </div>

                <div className="projects__card-body">
                  <h3 className="projects__card-name">{project.name}</h3>
                  <span className="projects__card-type">{project.type}</span>
                  <p className="projects__card-desc">{project.description}</p>
                  <div className="projects__card-tech">
                    {project.techStack?.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="projects__card-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03, duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="projects__card-overlay">
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
