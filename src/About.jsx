import { useEffect, useState } from "react";
import SingleSkill from "./SingleSkill"
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./assets/scss/about.scss"
import ExpEdu from "./ExpEdu";
import user from "../src/assets/img/user.png"


const About = () => {
    const [skills, setSkills] = useState([]);
    const [eduexp, setEduexp] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const res = await fetch('/data/skills.json');
            const data = await res.json();
            setSkills(data);
        }
        fetchSkills();
    }, [])

    useEffect(() => {
        const fetchEduExp = async () => {
            const res = await fetch('/data/exp_edu.json');
            const data = await res.json();
            setEduexp(data);
        }
        fetchEduExp();
    }, [])


    return (
        <div className="about_section">
            <div className="row justify-content-center row-gap-24">
                <div className="col-lg-5 col-xl-3">
                    <div className="about_sidebar">
                        <img src={user} className="about_img" alt="ashfatul" />
                        <small>@ashfatul</small>
                        <h4 className="about_name">Ashfatul Islam</h4>
                        <p className="mb-3 designation">Frontend Developer</p>
                        <p>Experience: <span className="highlight">2 years</span></p>
                        <p>Located: <span className="highlight">Dhaka, Bangladesh</span></p>
                        <p>Status: <span className="highlight">Open for opportunities</span></p>
                        <p>Speaks: <span className="highlight">Bangle, English, Hindi</span></p>
                        <p>Email: <span className="highlight">ashfatul.islam@gmail.com</span></p>
                        <ul className="d-flex gap-4 social">
                            <li><a href=""><IoLogoGithub /></a></li>
                            <li><a href=""><FaLinkedinIn /></a></li>
                            <li><a href=""><MdOutlineEmail /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-7 col-xl-8">
                    <div className="about_content">
                        <h4 className="about_title">About Me</h4>
                        <div>
                            <p>I am an experienced frontend developer with over two years of expertise in converting pixel-perfect designs into responsive websites using HTML, CSS, JavaScript, and jQuery. I also work with a variety of jQuery plugins and have built applications using React, Node.js, Express, and MongoDB.</p>

                            <p>My work focuses on translating design files, especially from Figma, into clean and maintainable code. I specialize in creating user-friendly and optimized websites that function seamlessly across devices and browsers. I am proficient in managing state in React, working with APIs, and handling backend tasks with Node.js, Express, and MongoDB.</p>

                            <p>As a dedicated learner, I continually improve my skills in frontend and backend development, exploring algorithms, data structures, and other areas like discrete mathematics. I am passionate about problem-solving and always strive to improve my craft.</p>

                            <p>Overall, I am a reliable and versatile developer committed to delivering high-quality work while maintaining professionalism and always seeking opportunities to expand my knowledge.</p>
                        </div>

                        <h4 className="mt-5 about_title">My Skills</h4>
                        <h5 className="about_sub_title">Frontend Technology</h5>
                        <div className="skills_container">
                            <div className="row row-gap-24">
                                {skills?.frontendTechnology?.map(item => {
                                    return <SingleSkill key={item.id} name={item.name} icon={item.icon} />;
                                })}
                            </div>
                        </div>
                        <h5 className="about_sub_title">Backend Technology</h5>
                        <div className="sills_container">
                            <div className="row row-gap-24">
                                {skills?.backendTechnology?.map(item => {
                                    return <SingleSkill key={item.id} name={item.name} icon={item.icon} />;
                                })}
                            </div>
                        </div>
                        <h5 className="about_sub_title">Familiar Tools</h5>
                        <div className="skills_container">
                            <div className="row row-gap-24">
                                {skills?.familiarTools?.map(item => {
                                    return <SingleSkill key={item.id} name={item.name} icon={item.icon} />;
                                })}
                            </div>
                        </div>


                        <h4 className="mt-5 about_title">My Journey</h4>
                        <h5 className="about_sub_title">Experience</h5>

                        <div className="journey_container">
                            <div className="row row-gap-24">
                                {eduexp?.experience?.map(item => {
                                    return <ExpEdu key={item.id} item={item} />;
                                })}
                            </div>
                        </div>
                        <h5 className="about_sub_title">Education</h5>

                        <div className="journey_container">
                            <div className="row row-gap-24">
                                {eduexp?.education?.map(item => {
                                    return <ExpEdu key={item.id} item={item} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
