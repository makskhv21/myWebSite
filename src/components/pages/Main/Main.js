import "./Main.css";
import myPhoto from "./img/myPhoto.png";
import { useState } from "react";

import Modal from "./Modal";

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
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <h2>Про мене</h2>
                        <p>Привіт! Я Максим Хвиць, молодший фронтенд-розробник, студент Київського політехнічного інституту імені Ігоря Сікорського. Поки що не маю комерційного досвіду, але сповнений бажання розвиватися та вдосконалювати свої вміння у сфері веб-розробки.</p>
                        <p>Маю навички у створенні сучасних та привабливих веб-інтерфейсів. Швидко засвоюю нову інформацію, люблю вчитися та відкритий до нових викликів. Вважаю командну роботу важливою складовою успіху та завжди готовий вносити свій внесок у спільні досягнення.</p>
                        <p>Моя мета – вдосконалювати навички, створюючи якісні цифрові продукти та зростати разом із командою. Впевнений, що мій ентузіазм, мотивація та готовність вчитися стануть цінним активом для вашої компанії.</p>

                        <h2>Зв'яжіться зі мною</h2>
                        <p>Буду радий обговорити можливість співпраці та поділитися своїм баченням щодо майбутніх проєктів!</p>
                    </Modal>
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