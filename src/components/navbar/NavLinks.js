import { useLocation, Link } from "react-router-dom";

const NavLinks = ({ isMenuOpen }) => {
    const location = useLocation();

    return (
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
                <Link 
                    to="/Home" 
                    className={location.pathname === "/myWebSite/Home" ? "active" : ""}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    to="/Projects" 
                    className={location.pathname === "/myWebSite/Projects" ? "active" : ""}
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link 
                    to="/Skills" 
                    className={location.pathname === "/myWebSite/Skills" ? "active" : ""}
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link 
                    to="/Contacts" 
                    className={location.pathname === "/myWebSite/Contacts" ? "active" : ""}
                >
                    Contacts
                </Link>
            </li>
        </ul>
    );
};

export default NavLinks;