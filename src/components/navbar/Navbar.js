import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav>
                <a href="/Home" className="logo">
                <hr style={{ border: "none", borderLeft: "10px solid #98C1CF", height: "50px" }} />
                <div className="logoMy">
                    <p className="logo-MAKSKHVYTS">MAKSKHVYTS</p>
                    <p className="logo-portfolio">portfolio, 2024</p>
                </div>
                </a>

                <ul>
                    <a href="/Home"><li>Home</li></a>
                    <a href="/Projects"><li>Projects</li></a>
                    <a href="/Skills"><li>Skills</li></a>
                    <a href="/Contacts"><li>Contacts</li></a>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;