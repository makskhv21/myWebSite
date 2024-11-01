import React from "react";

function SocialIcon({ link, imgSrc, altText }) {
    return (
        <a href={link}>
            <img className="photo" src={imgSrc} alt={altText} />
        </a>
    );
}

export default SocialIcon;