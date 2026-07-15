import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Projects({ data }) {
  const [visibleCount, setVisibleCount] = useState(6);

  const allProjects = useMemo(() => {
    const commercial = (data?.showcase_projects || []).map(p => ({ ...p, category: 'Commercial' }));
    const personal = (data?.personalProjects || []).map(p => ({ ...p, category: 'Personal' }));
    return [...commercial, ...personal];
  }, [data]);

  const visibleProjects = allProjects.slice(0, visibleCount);
  const hasMore = allProjects.length > visibleCount;

  if (allProjects.length === 0) return null;

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <ScrollReveal>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">Products and application engineering I&apos;ve delivered</p>
        </ScrollReveal>

        <div className="projects__grid">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id || `${project.name}-${idx}`}
              className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 15,
                delay: (idx % 6) * 0.06,
              }}
            >
              <div
                className="projects__card-media"
                style={project.image ? {} : { background: project.gradient }}
              >
                <span className={`projects__card-category-badge projects__card-category-badge--${project.category.toLowerCase()}`}>
                  {project.category}
                </span>
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
                    {project.techStack?.map((tech) => (
                      <span key={tech} className="projects__card-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projects__card-overlay">
                  <p>{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-link-btn"
                    >
                      View Project &rarr;
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
        </div>

        {hasMore && (
          <div className="projects__load-more">
            <button 
              className="projects__load-more-btn"
              onClick={() => setVisibleCount(prev => prev + 6)}
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
