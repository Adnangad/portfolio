import { useState } from "react";
import './header.css';

function Header() {
    const [active, setActive] = useState("");

    const handleClick = (section) => {
        setActive(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="header">
            <nav className="navbar">
                <a
                    href="#about"
                    className={`nav-item ${active === "about" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("about");
                    }}
                >
                    about
                </a>
                <a
                    href="#skills"
                    className={`nav-item ${active === "skills" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("skills");
                    }}
                >
                    skills
                </a>
                <a
                    href="#experience"
                    className={`nav-item ${active === "experience" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("experience");
                    }}
                >
                    experience
                </a>
                <a
                    href="#projects"
                    className={`nav-item ${active === "projects" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("projects");
                    }}
                >
                    projects
                </a>
                <a
                    href="#contact"
                    className={`nav-item ${active === "contact" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick("contact");
                    }}
                >
                    socials
                </a>
            </nav>
        </div>
    );
}

export default Header;
