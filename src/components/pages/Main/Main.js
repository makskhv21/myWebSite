import "./Main.css";
import myPhoto from "./img/myPhoto.png";

function Main() {
    return(
        <main className="main-home">
            <header>
            <div className="info">
                <h1 className="info-name">Hi, my name is Maks. </h1>
                <p className="info-desription custom-font">I am a frontend developer passionate about creating intuitive and efficient interfaces.</p>
            </div>
            <button className="btn-Download">Download CV</button>
            </header>
            <div className="backgroundDiv"></div>
            <div className="box">
                <img src={myPhoto} alt="MyPhoto" className="image"/>
                <div className="container-name">
                    <h6 className="my-name">Maksym Khvyts</h6>
                </div>
            </div>
        </main>
    )
};

export default Main;