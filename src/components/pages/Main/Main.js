import "./Main.css";
import myPhoto from "./img/myPhoto.png";
import { useState } from "react";

import Modal from "../../Modal/Modal";


function Main() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return(
        <main className="main-home">
            <header>
                <div className="info">
                    <h1 className="info-name">Hi, my name is Maks.</h1>
                    <p className="info-desription custom-font">I am a frontend developer passionate about creating intuitive and efficient interfaces.</p>
                </div>
                <div className="button-container">
                    <button className="btn-Download">Download CV</button>
                    <button onClick={openModal} className="btn-About">About Me</button>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
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