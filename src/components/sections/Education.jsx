import { FaAward } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
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
          <div className="education__certs-section">
            <ScrollReveal>
              <h3 className="section-heading education__certs-title">Featured Achievement</h3>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="education__featured-cert">
                {/* Left Side: Badge, Details, Recommendation & Topics */}
                <div className="education__cert-main">
                  <span className="education__cert-badge-tag">Rock Star Performer</span>
                  <h4 className="education__cert-featured-title">Reactive Accelerator - Batch 4</h4>
                  <p className="education__cert-featured-issuer">Issued by Learn with Sumit • April 2026</p>
                  
                  <blockquote className="education__cert-feedback">
                    &ldquo;Performed exceptionally well... one of the First Top 10 Students of the course. Completed all modules, quizzes &amp; assignments with excellent results. Scored 95% marks in the Final Exam.&rdquo;
                  </blockquote>

                  <div className="education__cert-topics">
                    <span className="education__topics-label">Topics Mastered:</span>
                    <div className="education__topics-list">
                      {[
                        'Next.js 15', 'React 19', 'React Redux', 'TypeScript', 'Tailwind CSS',
                        'GraphQL', 'Prisma', 'Socket.io', 'Docker + AWS', 'TanStack Query', 'Testing'
                      ].map(topic => (
                        <span key={topic} className="education__topic-tag">{topic}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Performance Stats & Verification */}
                <div className="education__cert-sidebar">
                  <h5 className="education__sidebar-title">Course Performance</h5>
                  <div className="education__cert-stats">
                    <div className="education__cert-stat">
                      <span className="education__cert-stat-num">93.56%</span>
                      <span className="education__cert-stat-lbl">Overall GPA (A+)</span>
                    </div>
                    <div className="education__cert-stat">
                      <span className="education__cert-stat-num">15/15</span>
                      <span className="education__cert-stat-lbl">Modules Completed</span>
                    </div>
                    <div className="education__cert-stat">
                      <span className="education__cert-stat-num">9/9</span>
                      <span className="education__cert-stat-lbl">Projects Completed</span>
                    </div>
                  </div>

                  <div className="education__cert-actions">
                    <a
                      href="https://learnwithsumit.com/certificates/verify/LWSCTXN-140N30B1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education__cert-verify-btn"
                    >
                      <span>Verify Certificate</span>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
}
