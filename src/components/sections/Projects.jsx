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
          {techFilters.map(tech => (
            <button
              key={tech}
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
            </button>
          ))}
        </div>

        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div
                key={project.id}
                className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="projects__card-gradient"
                  style={{ background: project.gradient }}
                >
                  <span className="projects__card-gradient-text">{project.name}</span>
                </div>

                <div className="projects__card-body">
                  <h3 className="projects__card-name">{project.name}</h3>
                  <span className="projects__card-type">{project.type}</span>
                  <p className="projects__card-desc">{project.description}</p>
                  <div className="projects__card-tech">
                    {project.techStack?.map(tech => (
                      <span key={tech} className="projects__card-tag">{tech}</span>
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
