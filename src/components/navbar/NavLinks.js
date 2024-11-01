import { useLocation } from "react-router-dom";

const NavLinks = ({ isMenuOpen }) => {
    const location = useLocation();

    return (
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><a href="/Home" className={location.pathname === "/Home" ? "active" : ""}>Home</a></li>
            <li><a href="/Projects" className={location.pathname === "/Projects" ? "active" : ""}>Projects</a></li>
            <li><a href="/Skills" className={location.pathname === "/Skills" ? "active" : ""}>Skills</a></li>
            <li><a href="/Contacts" className={location.pathname === "/Contacts" ? "active" : ""}>Contacts</a></li>
        </ul>
    );
};

export default NavLinks;