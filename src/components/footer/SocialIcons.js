import React from "react";

import emailPhoto from "./img/email.png";
import githubPhoto from "./img/github.png";
import linkedinPhoto from "./img/linkedin.png";
import locationPhoto from "./img/location.png";
import phonePhoto from "./img/phone.png";
import SocialIcon from "./SocialIcon";

function SocialIcons() {
    return (
        <div className="footer-img">
            <SocialIcon 
                link="mailto:m.khvyts.ser@gmail.com" 
                imgSrc={emailPhoto} 
                altText="email-photo" 
            />
            <SocialIcon 
                link="https://github.com/makskhv21" 
                imgSrc={githubPhoto} 
                altText="github-photo" 
            />
            <SocialIcon 
                link="tel:+number" 
                imgSrc={phonePhoto} 
                altText="phone-photo" 
            />
            <SocialIcon 
                link="https://www.linkedin.com/in/maksim-khvyts-5833b82b5/" 
                imgSrc={linkedinPhoto} 
                altText="linkedin-photo" 
            />
            <SocialIcon 
                link="https://maps.app.goo.gl/obSCA8fJpHGQYnxL9" 
                imgSrc={locationPhoto} 
                altText="location-photo" 
            />
        </div>
    );
}

export default SocialIcons;