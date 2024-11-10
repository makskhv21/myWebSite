const ContactMethod = ({ image, altText, username, link }) => (
    <div className="contact-method" onClick={() => window.open(link, "_blank")}>
        <img src={image} alt={altText} className="contact-img" />
        <span>{username}</span>
    </div>
);

export default ContactMethod;