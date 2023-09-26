import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/Gnome.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"
        src={IntroImg} alt="Gnome sauveur avec PC affichant de la programmation" />
      </div>
      <div className="content">
        <p>BONJOUR, JE SUIS ALTERNANTE</p>
        <h1>Développeuse</h1>
        <div className="btn-container">
          <Link to="/cv" className="btn btn-light" onClick={() => window.scroll(0,0)}>CV</Link>
            <Link to="/projects" className="btn" onClick={() => window.scroll(0,0)}>Projets</Link>
            <Link to="/contact" className="btn btn-light" onClick={() => window.scroll(0,0)}>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
