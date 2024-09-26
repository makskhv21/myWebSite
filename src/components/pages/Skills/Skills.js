import "./Skills.css"

import starImage from './img/Star.png';
import polygonImage from "./img/Polygon.png"

function Skills() {
    return(
        <main className="">
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
                        <span className="span">Word 1</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Word 2</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Word 3</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Word 4</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Word 5</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Word 6</span>
                    </div>
                    <div className="polygon-item">
                        <img src={polygonImage} alt="star" />
                        <span className="span">Word 7</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Skills;