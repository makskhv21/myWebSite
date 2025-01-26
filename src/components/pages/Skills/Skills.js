import "./Skills.css";

import StarItem from "../../skill/StartItem";
import PolygonItem from "../../skill/PolygonItem";

const starWords = [
    "JavaScript", "HTML/CSS", "ReactJS", "Redux", "TypeScript", "jQuery", 
    "Jest", "Node.js", "SASS/SCSS", "LESS/Stylus", "TailwindCSS", "WordPress", 
    "Figma", "Firebase", "Responsive Design", "Git & GitHub"
];

const polygonWords = [
    "Time management", "Communication", 
    "Adaptability", "Problem-solving", 
    "Teamwork", "Attention to detail", 
    "Creativity"
];

function Skills() {
    return (
        <main className="main-skills">
            <h1 className="header-skills">Skills</h1>
            <div className="stars-polygon">
                <div className="stars">
                    <h2>Hard Skills</h2>
                    <div className="skills-list">
                        {starWords.map((word, index) => (
                            <StarItem key={index} word={word} />
                        ))}
                    </div>
                </div>
                <div className="polygon">
                    <h2>Soft Skills</h2>
                    {polygonWords.map((word, index) => (
                        <PolygonItem key={index} word={word} />
                    ))}
                </div>
            </div>
            <a target="_blank" rel="noreferrer" href="https://github.com/makskhv21/makskhv21/blob/main/SKILLS.md" className="GithubSkills">Software engineering skills</a>
        </main>
    );
}

export default Skills;
