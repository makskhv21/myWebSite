const ContactMethod = ({ image, altText, username }) => (
    <div className="contact-method">
        <img src={image} alt={altText} className="contact-img" />
        <span>{username}</span>
    </div>
);

export default ContactMethod;