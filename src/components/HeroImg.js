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
        <p>BONJOUR, JE SUIS ETUDIANTE</p>
        <h1>Développeuse Web</h1>
        <div className="btn-container">
            <Link to="/projects" className="btn">Projets</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
