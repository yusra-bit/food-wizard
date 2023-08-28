import React, {useState} from "react";
import './Navbar.css';

import {Link} from "react-router-dom";

export const Navbar = () => {
    //const [menuOpen, SetMenuOpen] = useState(false)
    return (
    <nav>  

        <Link to="/" className="title">Food Wizard 🍜 🧙
        </Link>       
      
    </nav>
    );
}