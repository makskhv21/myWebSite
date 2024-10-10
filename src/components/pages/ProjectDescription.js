function ProjectDescription({ project }) {
    return (
        <div className="project-container">
            <img className="img-project" src={project.image} alt={project.title} />
            <div className="content">
                <h3 className="briefly">{project.brief}</h3>
                <p className="description">{project.description}</p>
                <h3 className="use-tech">What use?</h3>
                <p className="description">{project.technologies}</p>
                <h3 className="reference-title">Reference on GitHub</h3>
                <a className="reference" href={project.link}>Project Link</a>
            </div>
        </div>
    );
}

export default ProjectDescription;