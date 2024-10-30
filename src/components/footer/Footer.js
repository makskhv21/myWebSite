import "./Footer.css"

import emailPhoto from "./img/email.png"
import githubPhoto from "./img/github.png"
import linkedinPhoto from "./img/linkedin.png"
import locationPhoto from "./img/location.png";
import phonePhoto from "./img/phone.png";

function Footer() {
    return(
        <footer>
            <div className="footer-img">
                <a href="mailto:m.khvyts.ser@gmail.com">
                    <img className="photo" src={emailPhoto} alt="email-photo"/>
                </a>
                <a href="https://github.com/makskhv21">
                    <img className="photo" src={githubPhoto} alt="github-photo"/>
                </a>
                <a href="tel:+number">
                    <img className="photo" src={phonePhoto} alt="phone-photo"/>
                </a>
                <a href="https://www.linkedin.com/in/maksim-khvyts-5833b82b5/">
                    <img className="photo" src={linkedinPhoto} alt="linkedin-photo"/>
                </a>
                <a href="https://maps.app.goo.gl/obSCA8fJpHGQYnxL9">
                    <img className="photo" src={locationPhoto} alt="location-photo"/>
                </a>
            </div>
            <p className="footer-site">© 2024 mh-front-dev.com</p>
        </footer>
    )
};

export default Footer;