import "./Project.css"

import imagePhoto from "./Projects/img/project.jpg"

function Project() {

    return(
        <main>
            <h1 className="header-name">My Personal Portfolio</h1>
            <div className="project-container">
                <img className="img-project" src={imagePhoto} alt="Project" />
                <div className="content">
                    <h3 className="briefly">Briefly about the project</h3>
                    <p className="description">
                        This project showcases my skills and projects as a frontend developer. It includes sections for my bio, skills, and a gallery of my work. The portfolio is designed to be responsive and user-friendly, ensuring a great experience on both desktop and mobile devices.
                    </p>
                    <h3 className="use-tech">What use?</h3>
                    <p className="description">
                        The portfolio was built using React for dynamic rendering, CSS for styling, and integrated with GitHub Pages for easy deployment. I also utilized React Router for navigation between different sections and created custom components for a modular architecture.
                    </p>
                    <h3 className="reference-title">Reference on GitHub</h3>
                    <a className="reference" href="https://github.com/your-username/personal-portfolio">Project Link</a>
                </div>
            </div>
        </main>
    )
}

export default Project;