import "./Projects.css";
import { Link } from 'react-router-dom';
import projectsData from "../projectsData"; // імпортуємо дані з проектами

function Projects() {
    return (
        <main>
            <h1 className="header-projects">Projects</h1>
            <div className="wrapper">
                <div className="container-projects">
                    {projectsData.map(project => (
                        <div className="project" key={project.id}>
                            <Link to={`/projects/${project.id}`}>
                                <img 
                                    src={project.image}
                                    alt={project.title} 
                                    className="project-image" 
                                />
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
