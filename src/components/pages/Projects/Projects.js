import "./Projects.css"

import projectImage from "./img/project.jpg"

function Projects() {
    return(
        <main>
            <h1 className="header-projects">Projects</h1>
            
            <div className="wrapper">
                <div className="container-projects">
                    <div className="project">
                        <a href="/Projects/1"><img src={projectImage} alt="projectImage" className="project-image" /></a>
                        <h3 className="project-name">Project 1</h3>
                        <p className="project-desc">Technology: React, Node.js</p>
                    </div>
                    <div className="project">
                         <a href="/Projects/2"><img src={projectImage} alt="projectImage" className="project-image" /></a>
                         <h3 className="project-name">Project 1</h3>
                         <p className="project-desc">Technology: React, Node.js</p>
                    </div>
                    <div className="project">
                        <a href="/Projects/3"><img src={projectImage} alt="projectImage" className="project-image" /></a>
                        <h3 className="project-name">Project 1</h3>
                        <p className="project-desc">Technology: React, Node.js</p>
                    </div>
                    <div className="project">
                        <a href="/Projects/4"><img src={projectImage} alt="projectImage" className="project-image" /></a>
                        <h3 className="project-name">Project 1</h3>
                        <p className="project-desc">Technology: React, Node.js</p>
                    </div>
                    <div className="project">
                        <a href="/Projects/5"><img src={projectImage} alt="projectImage" className="project-image" /></a>
                        <h3 className="project-name">Project 1</h3>
                        <p className="project-desc">Technology: React, Node.js</p>
                    </div>
                    <div className="project">
                        <a href="/Projects/6"><img src={projectImage} alt="projectImage" className="project-image" /></a>
                        <h3 className="project-name">Project 1</h3>
                        <p className="project-desc">Technology: React, Node.js</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;