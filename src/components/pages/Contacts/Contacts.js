// Contacts.js
import "./Contacts.css";
import { useState } from "react";
import telegramImage from "./img/telegram.png";
import whatsappImage from "./img/whatsapp.png";

function Contacts() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                setName("");
                setEmail("");
                setMessage("");
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
            <form onSubmit={handleSubmit} className="email-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Send Email</button>
                {status && <p>{status}</p>}
            </form>
            <div className="contacts-tg-wsapp">
                <div className="tg">
                    <img src={telegramImage} alt="tg" />
                    <span>MaksKhvyts</span>
                </div>
                <div className="whatsapp">
                    <img src={whatsappImage} alt="whatsapp" />
                    <span>MaksKhvyts</span>
                </div>
            </div>
        </main>
    );
}

export default Contacts;
