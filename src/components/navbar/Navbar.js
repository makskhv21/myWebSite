import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import NavLinks from "./NavLinks";
import "./Navbar.css";

function Navbar() {
    const [opacity, setOpacity] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="navbar">
            <nav style={{ opacity: isHovered ? 1 : opacity }} 
                 onMouseEnter={handleMouseEnter} 
                 onMouseLeave={handleMouseLeave}>
                <Logo />
                <MenuToggle toggleMenu={toggleMenu} />
                <NavLinks isMenuOpen={isMenuOpen} />
            </nav>
        </div>
    );
}

export default Navbar;