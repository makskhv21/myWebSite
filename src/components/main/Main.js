import "./Main.css";
import myPhoto from "./img/myPhoto.png";

function Main() {
    return(
        <main>
            <header>
            <div className="info">
                <h1 className="info-name">Hi, my name is Maks. </h1>
                <p className="info-desription custom-font">I am a frontend developer passionate about creating intuitive and efficient interfaces.</p>
            </div>
            <button className="btn-Download">Download CV</button>
            </header>
            <div className="photo"></div>
            <div className="box">
                <img src={myPhoto} alt="MyPhoto" className="image"/>
            </div>
        </main>
    )
};

export default Main;