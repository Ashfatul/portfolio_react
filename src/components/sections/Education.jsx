import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

export default function Education({ data }) {
  const education = data?.education;
  const certificates = data?.certificates;

  return (
    <section id="education" className="education">
      <div className="education__inner">
        <ScrollReveal>
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">Academic background and certifications</p>
        </ScrollReveal>

        <div className="education__grid">
          {education?.map((edu, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="education__card">
                <h3 className="education__degree">{edu.degree}</h3>
                <p className="education__institution">{edu.institution}</p>
                <div className="education__meta">
                  <span>{edu.duration}</span>
                  {edu.info && <span>{edu.info}</span>}
                </div>
                {edu.coursework?.length > 0 && (
                  <div className="education__coursework">
                    {edu.coursework.map((course, i) => (
                      <motion.span
                        key={course}
                        className="education__coursework-pill"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: i * 0.04, duration: 0.28, ease: 'easeOut' }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {certificates?.length > 0 && (
          <>
            <ScrollReveal>
              <h3 className="section-heading education__certs-title">Certificates</h3>
            </ScrollReveal>

            {certificates.map((cert, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="education__cert">
                  <div className="education__cert-header">
                    <div className="education__cert-title">
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.title}</a>
                      ) : (
                        <span>{cert.title}</span>
                      )}
                    </div>
                    <span className="education__cert-date">{cert.date}</span>
                  </div>
                  <p className="education__cert-issuer">{cert.issuer}</p>
                  {cert.info && <p className="education__cert-info">{cert.info}</p>}
                </div>
              </ScrollReveal>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
