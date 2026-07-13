import "../../assets/scss/pages/_resume.scss"
import { FaGithub, FaGlobeAmericas, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa"
import { BsTelephoneOutbound } from "react-icons/bs"
import { MdPrint } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import resumeData from "../../../public/data/resume_data.json"

const skillCategoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Platforms",
    practices: "Practices"
}

const Resume = () => {
    const handlePrint = () => {
        window.print()
    }

    return (
        <article className="resume_container">
            <Link to="/" className="resume_back_link">&larr; Back to Portfolio</Link>

            <header className="resume_header">
                <div className="resume_header_left">
                    <h1 className="resume_header_name">{resumeData.meta.name}</h1>
                    <p className="resume_header_position">{resumeData.meta.position}</p>
                    <address>
                        <ul className="resume_header_social">
                            {resumeData.meta.phone && (
                                <li>
                                    <a href={`tel:${resumeData.meta.phone}`}>
                                        <BsTelephoneOutbound /> {resumeData.meta.phone}
                                    </a>
                                </li>
                            )}
                            {resumeData.meta.email && (
                                <li>
                                    <a href={`mailto:${resumeData.meta.email}`}>
                                        <FaRegEnvelope /> {resumeData.meta.email}
                                    </a>
                                </li>
                            )}
                            {resumeData.meta.address && (
                                <li>
                                    <span className="resume_header_location">
                                        <IoLocationOutline /> {resumeData.meta.address}
                                    </span>
                                </li>
                            )}
                            {resumeData.meta.github && (
                                <li>
                                    <a href={resumeData.meta.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub /> {resumeData.meta.github}
                                    </a>
                                </li>
                            )}
                            {resumeData.meta.linkedin && (
                                <li>
                                    <a href={resumeData.meta.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn /> {resumeData.meta.linkedin}
                                    </a>
                                </li>
                            )}
                            {resumeData.meta.portfolio && (
                                <li>
                                    <a href={resumeData.meta.portfolio} target="_blank" rel="noopener noreferrer">
                                        <FaGlobeAmericas /> {resumeData.meta.portfolio}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </address>
                </div>
            </header>

            <main className="resume_inner">
                <section>
                    <h2 className="resume_inner_title">Professional Summary</h2>
                    <p className="resume_inner_about">{resumeData.meta.about}</p>
                </section>

                <section>
                    <h2 className="resume_inner_title">Work Experience</h2>
                    {resumeData.experience.map((item, index) => (
                        <article className="resume_education_experience_item" key={index}>
                            <div className="resume_subtitle">
                                <h3>{item.company}</h3>
                                <time className="resume_duration">{item.duration}</time>
                            </div>
                            <div className="resume_education_experience_position">
                                <p><strong>{item.position}</strong></p>
                            </div>

                            {item.impact?.length > 0 && (
                                <div className="resume_impact">
                                    <h4>Key Achievements</h4>
                                    <ul>
                                        {item.impact.map((achievement, idx) => (
                                            <li key={idx}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {item.leadership?.length > 0 && (
                                <div className="resume_leadership">
                                    <h4>Leadership & Ownership</h4>
                                    <ul>
                                        {item.leadership.map((lead, idx) => (
                                            <li key={idx}>{lead}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {item.projects?.length > 0 && (
                                <div className="resume_projects_section">
                                    <h4>Key Projects</h4>
                                    <ul className="projects_list">
                                        {item.projects.map((project, idx) => (
                                            <li className="project_item" key={idx}>
                                                <p className="project_header">
                                                    <strong>{project.name}</strong>
                                                    {project.type && (
                                                        <span className="project_type"> — {project.type}</span>
                                                    )}
                                                    {project.techStack?.length > 0 && (
                                                        <span className="project_tech"> [{project.techStack.join(", ")}]</span>
                                                    )}
                                                </p>
                                                {project.description && (
                                                    <p className="project_description">{project.description}</p>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {item.responsibilities?.length > 0 && (
                                <div className="resume_responsibilities">
                                    <h4>Responsibilities</h4>
                                    <ul className="resume_education_experience_responsibility">
                                        {item.responsibilities.map((r, idx) => (
                                            <li key={idx}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </article>
                    ))}
                </section>

                <section>
                    <h2 className="resume_inner_title">Education</h2>
                    <div className="education_grid">
                        {resumeData.education.map((item, index) => (
                            <article className="resume_education_experience_item" key={index}>
                                <div className="resume_education_experience_position">
                                    <p><strong>{item.degree}</strong></p>
                                </div>
                                <h3 className="education_institution">{item.institution}</h3>
                                <p className="resume_education_meta">
                                    <time>{item.duration}</time>
                                    {item.info && <span> · {item.info}</span>}
                                </p>
                                {item.coursework?.length > 0 && (
                                    <p className="resume_education_coursework">
                                        <strong>Relevant Coursework:</strong> {item.coursework.join(", ")}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                {resumeData.certificates?.length > 0 && (
                    <section>
                        <h2 className="resume_inner_title">Certificates & Achievements</h2>
                        <div className="certificates_grid">
                            {resumeData.certificates.map((cert, index) => (
                                <article className="resume_certificate_item" key={index}>
                                    <div className="resume_certificate_title">
                                        {cert.link ? (
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                                {cert.title}
                                            </a>
                                        ) : (
                                            <p>{cert.title}</p>
                                        )}
                                    </div>
                                    {cert.info && (
                                        <div className="resume_certificate_info">
                                            <p>{cert.info}</p>
                                        </div>
                                    )}
                                    <div className="resume_certificate_issuer">
                                        <p>{cert.issuer} — <time>({cert.date})</time></p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <h2 className="resume_inner_title">Skills</h2>
                    <dl className="resume_skills_list">
                        {Object.entries(resumeData.skills).map(([category, skillList]) => (
                            <div className="resume_skills_row" key={category}>
                                <dt>{skillCategoryLabels[category] || category}:</dt>
                                <dd>{skillList.join(", ")}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </main>

            <div className="resume_print">
                <button onClick={handlePrint} aria-label="Print resume"><MdPrint /></button>
            </div>
        </article>
    )
}

export default Resume
