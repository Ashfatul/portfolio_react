import { useEffect } from "react";
import { useState } from "react"
import SingleProject from "./SingleProject";
import "../assets/scss/projects.scss"

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const res = await fetch('/data/projects.json');
            const data = await res.json();
            setProjects(data);
        }
        fetchSkills();
    }, [])
    return (
        <div className="row justify-content-center">
            <div className="col-lg-11">
                <div className="projects_page_container">
                    <h2 className="text-center page-title">Projects</h2>
                    <p className="text-center page-sub-title">Some of my recent projects</p>

                    <div className="project_item_container mt-5">
                        <div className="row row-gap-24">
                            {projects?.map((item) => (
                                <SingleProject key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects