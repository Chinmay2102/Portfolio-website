import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
        <h1>Chinmay</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
            ☰
        </button>


        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                </NavLink>
            </li>
        
            <li>
                <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
                    About
                </NavLink>
            </li>

            <li>
                <NavLink to="/projects" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
                    Projects
                </NavLink>
            </li>
        </ul>

    </nav>
  );
}

export default Navbar;
