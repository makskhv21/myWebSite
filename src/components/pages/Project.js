import "./Project.css";

import projectsData from "./projectsData";
import ProjectDescription from "./ProjectDescription"

function Project() {
    return (
        <main>
            <h1 className="header-name">My Personal Portfolio</h1>
            {projectsData.map(project => (
                <ProjectDescription key={project.id} project={project} />
            ))}
        </main>
    );
}

export default Project;