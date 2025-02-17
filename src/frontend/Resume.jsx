import "../assets/scss/resume.scss"
import { FaGithub, FaGlobeAmericas, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa"
import { useEffect, useState } from "react"
import { BsTelephoneOutbound } from "react-icons/bs"
import { MdChecklist, MdKeyboardDoubleArrowRight, MdPrint } from "react-icons/md"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { IoBriefcaseOutline } from "react-icons/io5"
import { PiGraduationCapLight } from "react-icons/pi"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"

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
                    <ul className="resume_header_social">
                        {resumeData?.meta?.phone && (
                            <li>
                                <a href={`tel:${resumeData?.meta?.phone}`} target="_blank">
                                    <BsTelephoneOutbound /> {resumeData?.meta?.phone}
                                </a>
                            </li>
                        )}
                        {resumeData?.meta?.email && (
                            <li>
                                <a href={`mailto:${resumeData?.meta?.email}`} target="_blank">
                                    <FaRegEnvelope /> {resumeData?.meta?.email}
                                </a>
                            </li>
                        )}
                        {resumeData?.meta?.address && (
                            <li>
                                <a href={resumeData?.meta?.address} target="_blank">
                                    <FaGlobeAmericas /> {resumeData?.meta?.address}
                                </a>
                            </li>
                        )}
                        {resumeData?.meta?.github && (
                            <li>
                                <a href={resumeData?.meta?.github} target="_blank">
                                    <FaGithub /> {resumeData?.meta?.github}
                                </a>
                            </li>
                        )}
                        {resumeData?.meta?.linkedin && (
                            <li>
                                <a href={resumeData?.meta?.linkedin} target="_blank">
                                    <FaLinkedinIn /> {resumeData?.meta?.linkedin}
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
                <h4 className="resume_inner_title"><AiOutlineInfoCircle /> About</h4>
                <p className="resume_inner_about">
                    {resumeData?.meta?.about}
                </p>

                <h4 className="resume_inner_title"><IoBriefcaseOutline /> Work Experience</h4>
                {resumeData.experience?.map((item, index) => (
                    <div className="resume_education_experience_item" key={index}>
                        <div className="d-flex align-items-center justify-content-between resume_subtitle">
                            <h5><HiOutlineBuildingOffice2 /> {item?.company}</h5>
                            <p className="resume_duration">{item?.duration}</p>
                        </div>
                        <div className="resume_education_experience_position">
                            <p>{item?.position}</p>
                        </div>
                        <p>Projects: </p>
                        <div className="projects_container">
                        {item?.projects?.map((project, idx) => (
                            <div className="project_item_container" key={idx}>
                                <div className="resume_education_experience_project">
                                    <p><MdKeyboardDoubleArrowRight /> {project?.name}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                        <p>Responsibilities: </p>
                        <ul className="resume_education_experience_responsibility">
                            {item?.responsibility?.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <h4 className="resume_inner_title"><PiGraduationCapLight /> Education</h4>
                <div className="education_grid">
                {resumeData.education?.map((item, index) => (
                    <div className="resume_education_experience_item" key={index}>
                        <div className="resume_education_experience_position">
                            <p >{item?.degree} - <span>({item?.duration})</span></p>
                        </div>
                        <h5 className="education_institution">{item?.institution}</h5>
                    </div>
                ))}
                </div>
                <h4 className="resume_inner_title"><MdChecklist /> Skills</h4>
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
