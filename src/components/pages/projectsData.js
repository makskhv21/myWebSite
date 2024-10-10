import projectImage1 from "./img/project.jpg";
import projectImage2 from "./img/project.jpg";
import projectImage3 from "./img/project.jpg";

const projectsData = [
    {
        id: 1,
        title: "Personal Portfolio",
        image: projectImage1,
        brief: "Briefly about the project",
        description: "This project showcases my skills and projects as a frontend developer. It includes sections for my bio, skills, and a gallery of my work.",
        technologies: "Built using React, CSS, and integrated with GitHub Pages.",
        link: ""
    },
    {
        id: 2,
        title: "Another Project",
        image: projectImage2,
        brief: "Briefly about another project",
        description: "This is a description of another project, showcasing different skills and technologies.",
        technologies: "Technologies used: React, Node.js, Express.",
        link: ""
    },
    {
        id: 3,
        title: "Yet Another Project",
        image: projectImage3,
        brief: "Briefly about yet another project",
        description: "This project highlights my ability to create responsive web applications.",
        technologies: "Technologies used: HTML, CSS, JavaScript.",
        link: ""
    }
];

export default projectsData;