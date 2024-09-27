import "./Contacts.css"

import telegramImage from "./img/telegram.png"
import whatsappImage from "./img/whatsapp.png"

function Contacts() {
    
    return(
        <main>
            <div className="header-contacts">
                <h1>Contacts</h1>
                <h2>Write to me!</h2>
            </div>
            <div className="email">Email</div>
            <div className="contacts-tg-wsapp">
                <div className="tg">
                    <img src={telegramImage} alt="tg"/>
                    <span>MaksKhvyts</span>
                </div>
                <div className="whatsapp">
                    <img src={whatsappImage} alt="whatsapp"/>
                    <span>MaksKhvyts</span>
                </div>
            </div>

       </main>
    )
}

export default Contacts;