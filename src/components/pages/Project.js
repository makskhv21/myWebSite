import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './projectsData'; // Assuming you store the project data in a separate file
import ProjectDescription from './ProjectDescription';

function Project() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <main>
            <h1 className="header-name">My Personal Portfolio</h1>
            <ProjectDescription project={project} />
        </main>
    );
}

export default Project;