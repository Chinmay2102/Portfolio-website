import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav') && !event.target.closest('button')) {
                setMenuOpen(false);
            }
        };

        // Close menu on escape key
        const handleEscape = (event) => {
            if (menuOpen && event.key === 'Escape') {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [menuOpen]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
            <h1>Chinmay</h1>
            
            {/* Desktop Navigation */}
            <ul className="desktop-menu">
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                </li>
            
                <li>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/projects" 
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Projects
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/add-project" 
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Add Project
                    </NavLink>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
                className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)} 
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <span className="menu-icon">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </span>
            </button>

            {/* Mobile Navigation Overlay */}
            <div 
                className={`mobile-overlay ${menuOpen ? "open" : ""}`} 
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Navigation Menu */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <button 
                    className="mobile-close-btn"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >
                    ✕
                </button>
                
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            onClick={() => setMenuOpen(false)} 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink 
                            to="/about" 
                            onClick={() => setMenuOpen(false)} 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/projects" 
                            onClick={() => setMenuOpen(false)} 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Projects
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/add-project" 
                            onClick={() => setMenuOpen(false)} 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Add Project
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;