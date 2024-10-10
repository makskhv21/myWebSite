import "./Projects.css";

import projectImage from "./img/project.jpg";

const projectsData = [
    { id: 1, title: "Project 1", tech: "React, Node.js" },
    { id: 2, title: "Project 2", tech: "React, Node.js" },
    { id: 3, title: "Project 3", tech: "React, Node.js" },
    { id: 4, title: "Project 4", tech: "React, Node.js" },
    { id: 5, title: "Project 5", tech: "React, Node.js" },
    { id: 6, title: "Project 6", tech: "React, Node.js" },
];

function Projects() {
    return (
        <main>
            <h1 className="header-projects">Projects</h1>
            <div className="wrapper">
                <div className="container-projects">
                    {projectsData.map(project => (
                        <div className="project" key={project.id}>
                            <a href={`/Projects/${project.id}`}>
                                <img src={projectImage} alt={project.title} className="project-image" />
                            </a>
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