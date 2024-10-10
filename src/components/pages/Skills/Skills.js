import "./Skills.css"

import starImage from './img/Star.png';
import polygonImage from "./img/Polygon.png"

function Skills() {
    return(
        <main className="main-skills">
            <h1 className="header-skills">Skills</h1>
            <div className="skills">
                <h2>Hard</h2>
                <h2>Soft</h2>
            </div>
            <div className="stars-polygon">
                <div className="one-stars">
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 1</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 2</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 3</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 4</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 5</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 6</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 7</span>
                    </div>
                </div>
                <div className="two-stars">
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 1</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 2</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 3</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 4</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 5</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 6</span>
                    </div>
                    <div className="star-item">
                        <img src={starImage} alt="star" />
                        <span className="span">Word 7</span>
                    </div>
                </div>
                <div className="polygon" >
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Time management</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Communication</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Adaptability</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Problem-solving</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Teamwork</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Attention to detail</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Creativity</span>
                    </div>
                </div>
            </div>
            <a href="https://github.com/makskhv21/makskhv21/blob/main/SKILLS.md" className="GithubSkills">Software engineering skills</a>
        </main>
    )
}

export default Skills;