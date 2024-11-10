import "./Contacts.css";
import { useState } from "react";
import telegramImage from "./img/telegram.png";
import whatsappImage from "./img/whatsapp.png";
import ContactForm from "./ContactForm";
import ContactMethod from "./ContactMethod";

function Contacts() {
    const [status, setStatus] = useState("");

    const handleFormSubmit = async ({ name, email, message }) => {
        setStatus("Sending...");

        try {
            const response = await fetch("http://localhost:5001/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setStatus("Email sent successfully!");
            } else {
                throw new Error("Failed to send email");
            }
        } catch (error) {
            setStatus("Error sending email: " + error.message);
        }
    };

    return (
        <main>
            <div className="header-contacts">
                <h1>Contacts</h1>
                <h2>Write to me!</h2>
            </div>
            <ContactForm onSubmit={handleFormSubmit} status={status} />
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