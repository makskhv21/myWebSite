import "./Contacts.css";
import telegramImage from "./img/telegram.png";
import whatsappImage from "./img/whatsapp.png";
import ContactMethod from "./ContactMethod";

function Contacts() {
    return (
        <main>
            <div className="header-contacts">
                <h1>Contacts</h1>
                <h2>Write to me!</h2>
            </div>
            <div className="email-container">
                <a href="mailto:m.khvyts.ser@gmail.com" className="email-p">
                    m.khvyts.ser@gmail.com
                </a>
            </div>
            <div className="contacts-tg-wsapp">
                <ContactMethod 
                    image={telegramImage} 
                    altText="Telegram" 
                    username="MaksKhvyts" 
                    link="https://t.me/MaksKhvyts"
                />
                <ContactMethod 
                    image={whatsappImage} 
                    altText="WhatsApp" 
                    username="MaksKhvyts" 
                    link="https://wa.me/MaksKhvyts" 
                />
            </div>
        </main>
    );
}

export default Contacts;
