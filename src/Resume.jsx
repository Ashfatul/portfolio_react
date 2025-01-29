import "./assets/scss/resume.scss"
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa"
import { useEffect, useState } from "react"
import { BsTelephoneOutbound } from "react-icons/bs"
import { MdPrint } from "react-icons/md"

const Resume = () => {
    const [resumeData, setResumeData] = useState({});

    useEffect(() => {
        const getResumeData = async () => {
            const res = await fetch('/data/resume_data.json');
            const data = await res.json();
            setResumeData(data);
        }

        getResumeData()
    }, [])


    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="resume_container">
            <div className="resume_header d-flex align-items-center justify-content-between">
                <div className="resume_header_left">
                    <h3 className="resume_header_name">{resumeData?.meta?.name}</h3>
                    <p className="resume_header_position">
                        {resumeData?.meta?.position}</p>
                    <p className="resume_header_location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-3 w-3">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                        <span>{resumeData?.meta?.address}</span>
                    </p>
                    <ul className="resume_header_social">
                        {resumeData?.meta?.phone && (
                            <li>
                                <a href={`tel:${resumeData?.meta?.phone}`} target="_blank">
                                    <BsTelephoneOutbound />
                                </a>
                            </li>
                        )}
                        {resumeData?.meta?.email && (
                            <li>
                                <a href={`mailto:${resumeData?.meta?.email}`} target="_blank">
                                    <FaRegEnvelope />
                                </a>
                            </li>
                        )}
                        {resumeData?.meta?.github && (
                            <li>
                                <a href={resumeData?.meta?.github} target="_blank">
                                    <FaGithub />
                                </a>
                            </li>
                        )}
                        {resumeData?.meta?.linkedin && (
                            <li>
                                <a href={resumeData?.meta?.linkedin} target="_blank">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="resume_header_right">
                    <img src={resumeData?.meta?.profilePic} className="resume_header_img" alt="ashfatul" />
                </div>
            </div>
            <div className="resume_inner">
                <h4 className="resume_inner_title">About</h4>
                <p className="resume_inner_about">
                    {resumeData?.meta?.about}
                </p>

                <h4 className="resume_inner_title">Work Experience</h4>
                {resumeData.experience?.map((item, index) => (
                    <div className="resume_education_experience_item" key={index}>
                        <div className="d-flex align-items-center justify-content-between resume_subtitle">
                            <h5>{item?.company}</h5>
                            <p className="resume_duration">{item?.duration}</p>
                        </div>
                        <div className="resume_education_experience_position">
                            <p>{item?.position}</p>
                        </div>
                        {item?.projects?.map((project, idx) => (
                            <div className="project_item_container" key={idx}>
                                <div className="resume_education_experience_project">
                                    <p> - Project: {project?.name}</p>
                                </div>
                                <div className="resume_education_experience_team_size">
                                    <p> - Team Size: {project?.teamSize}</p>
                                </div>
                                <div className="resume_education_experience_responsibilities">
                                    <p> - Responsibilities:</p>
                                    <ul>
                                        {project?.responsibilities.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="resume_tools_technology">
                                    <div className="resume_education_experience_technologies">
                                        <h6>Technologies: </h6>
                                        <ul className="resume_technologies">
                                            {project?.technologies.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="resume_education_experience_tools">
                                        <h6>Tools: </h6>
                                        <ul className="resume_tools">
                                            {project?.tools.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                <h4 className="resume_inner_title">Education</h4>
                {resumeData.education?.map((item, index) => (
                    <div className="resume_education_experience_item" key={index}>
                        <div className="d-flex align-items-center justify-content-between resume_subtitle">
                            <h5 className="fw-medium">{item?.institution}</h5>
                            <p className="resume_duration">{item?.duration}</p>
                        </div>
                        <div className="resume_education_experience_position">
                            <p >{item?.degree}</p>
                        </div>
                        <div className="resume_education_experience_team_size">
                            <p className="text-muted"> - Group: {item?.group}</p>
                        </div>
                        <div className="resume_education_experience_project">
                            <p className="text-muted"> - Result: {item?.result}</p>
                        </div>
                    </div>
                ))}

                <h4 className="resume_inner_title">Skills</h4>
                <ul className="resume_skills">
                    {resumeData.skills?.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="resume_print">
                <button onClick={() => handlePrint()}><MdPrint /></button>
            </div>
        </div>
    )
}

export default Resume
