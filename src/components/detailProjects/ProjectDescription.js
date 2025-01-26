import "./Project.css";

function ProjectDescription({ project }) {
    return (
        <div className="project-container">
            <img
                onClick={() => window.open(project.link, "_blank")} 
                className="img-project" 
                src={project.imageProject} 
                alt={project.title} 
            />
            <div className="content">
                <h3 className="briefly">Briefly about the project</h3>
                <p className="description">{project.description}</p>

                <h3 className="use-tech">What use?</h3>
                <p className="description">{project.technologies}</p>

                <h3 className="reference-title">Reference on GitHub</h3>
                <a className="reference" href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>

                {project.demo && (
                    <a className="reference" href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>    
                )}
            </div>
        </div>
    );
}

export default ProjectDescription;