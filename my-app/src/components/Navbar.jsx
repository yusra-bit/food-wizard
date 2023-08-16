import React, {useState} from "react";
import './Navbar.css';

import {Link, NavLink} from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, SetMenuOpen] = useState(false)
    return (
    <nav>  

        <Link to="/" className="title">Food Wizard 🍜 🧙
        </Link>
        <div className="menu" 
        onClick={() => {
            SetMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : "" }>
        <li><NavLink to="/liked">Saved Recipes!</NavLink> </li>
        <li><NavLink to="/about">About</NavLink> </li>
        </ul>
    </nav>
    );
}