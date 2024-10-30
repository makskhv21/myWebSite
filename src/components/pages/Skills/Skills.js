import "./Skills.css";

import StarItem from "../../skill/StartItem";
import PolygonItem from "../../skill/PolygonItem";

const starWords = [
    "Word 1", "Word 2", "Word 3", 
    "Word 4", "Word 5", "Word 6", 
    "Word 7"
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
                    <h2>Hard</h2>
                    <div className="one-stars">
                        {starWords.map((word, index) => (
                            <StarItem key={index} word={word} />
                        ))}
                    </div>
                    <div className="two-stars">
                        {starWords.map((word, index) => (
                            <StarItem key={index} word={word} />
                        ))}
                    </div>
                </div>
                <div className="polygon">
                    <h2>Soft</h2>
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
