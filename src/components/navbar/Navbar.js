import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import "./Navbar.css";

function Navbar() {
    const [opacity, setOpacity] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation(); 

    useEffect(() => {
        const handleScroll = () => {
            if (!isHovered) {
                const scrollTop = window.scrollY;
                const newOpacity = Math.max(1 - scrollTop / 300, 0.7);
                setOpacity(newOpacity);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isHovered]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div>
            <nav 
                style={{ opacity: isHovered ? 1 : opacity }} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                <a href="/Home" className="logo">
                    <hr style={{ border: "none", borderLeft: "10px solid #98C1CF", height: "50px" }} />
                    <div className="logoMy">
                        <p className="logo-MAKSKHVYTS">MAKSKHVYTS</p>
                        <p className="logo-portfolio">portfolio, 2024</p>
                    </div>
                </a>

                <ul>
                    <a href="/Home" className={location.pathname === "/Home" ? "active" : ""}><li>Home</li></a>
                    <a href="/Projects" className={location.pathname === "/Projects" ? "active" : ""}><li>Projects</li></a>
                    <a href="/Skills" className={location.pathname === "/Skills" ? "active" : ""}><li>Skills</li></a>
                    <a href="/Contacts" className={location.pathname === "/Contacts" ? "active" : ""}><li>Contacts</li></a>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;