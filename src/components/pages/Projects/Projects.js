import "./Projects.css";
import projectImage from "./img/project.jpg";
import { Link } from 'react-router-dom';
import projectsData from "../projectsData"

function Projects() {
    return (
        <main>
            <h1 className="header-projects">Projects</h1>
            <div className="wrapper">
                <div className="container-projects">
                    {projectsData.map(project => (
                        <div className="project" key={project.id}>
                            <Link to={`/projects/${project.id}`}>
                                <img src={projectImage} alt={project.title} className="project-image" />
                            </Link>
                            <h3 className="project-name">{project.title}</h3>
                            <p className="project-desc">Technology: {project.tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Projects;