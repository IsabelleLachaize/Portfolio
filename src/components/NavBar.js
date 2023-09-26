import "./NavBarStyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" onClick={() => window.scroll(0,0)}>
        <h1 className="big-screen">Portfolio  ||  Isabelle Lachaize</h1>
        <h1 className="small-screen">Portfolio</h1>
      </Link>
      <ul className={click? "nav-menu active" : "nav-menu"} >
        <li>
            <Link to="/" onClick={() => window.scroll(0,0)}>Accueil</Link>
        </li>
        <li>
            <Link to="/cv" onClick={() => window.scroll(0,0)}>CV</Link>
        </li>
        <li>
            <Link to="/projects" onClick={() => window.scroll(0,0)}>Projets</Link>
        </li>
        <li>
            <Link to="/about" onClick={() => window.scroll(0,0)}>À Propos</Link>
        </li>
        <li>
            <Link to="/contact" onClick={() => window.scroll(0,0)}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>  
      {click ? (
      <FaTimes size={20} style={{ color: "#fff" }} />
      ) : (
      <FaBars size={20} style={{ color: "#fff" }} /> 
      )}
      </div>
    </div>
  )
}

export default NavBar
