import { useState } from "react";

const ContactForm = ({ onSubmit, status }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, message });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
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
    );
};

export default ContactForm;