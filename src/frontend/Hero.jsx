import { IoLogoGithub } from "react-icons/io"
import "../assets/scss/hero.scss"
import {FaLinkedinIn } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import user from "../../src/assets/img/user.png"
import { Link } from "react-router-dom"
import { useEffect } from "react"
function Hero() {

    useEffect(() => {
        const interval = setInterval(() => {
            const techTags = document.querySelectorAll(".tech_tag");
            if (!techTags.length) return;

            const activeTag = document.querySelector(".tech_tag.active");
            let nextIndex = 0;

            if (activeTag) {
                const currentIndex = Array.from(techTags).indexOf(activeTag);
                activeTag.classList.remove("active");
                nextIndex = currentIndex + 1;
            }

            if (nextIndex >= techTags.length) nextIndex = 0;

            techTags[nextIndex].classList.add("active");
        }, 1000)

        return () => clearInterval(interval)
    },[])

    return (
        <div className="hero_section">
            <div className="row">
                <div className="col-lg-7 order-2 order-lg-1">
                    <h4>Hello there!</h4>
                    <h2>I&apos;m <span className="highlight">Ashfatul Islam,</span></h2>
                    <h1>JavaScript Engineer</h1>
                    <p>
                        With over 2 years of experience in responsive, pixel-perfect web design, I excel in HTML, CSS, JavaScript, React, and the MERN stack, delivering scalable and high-quality solutions. Recognized for my honesty, punctuality, and clear communication, I am currently pursuing freelancing opportunities while expanding my expertise in Java and algorithms.
                    </p>

                    <ul className="d-flex gap-4 social">
                        <li><a href="https://github.com/Ashfatul"><IoLogoGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/ashfatul/"><FaLinkedinIn /></a></li>
                        <li><a href="mainto:ashfatul.islam@gmail.com"><MdOutlineEmail /></a></li>
                    </ul>

                    <ul className="links d-flex align-items-center gap-4 flex-wrap">
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                    </ul>                    
                </div>

                <div className="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                    <img src={user} className="hero_img" alt="ashfatul" />

                    <div className="tech_picks mt-4">
                        <div className="tech_tags d-flex gap-2 flex-wrap justify-content-center">
                            <span className="tech_tag active">HTML</span>
                            <span className="tech_tag">CSS</span>
                            <span className="tech_tag">JavaScript</span>
                            <span className="tech_tag">React.js</span>
                            <span className="tech_tag">Next.js</span>
                            <span className="tech_tag">Node.js</span>
                            <span className="tech_tag">MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
