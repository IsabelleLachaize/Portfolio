import React from 'react'
import NavBar from "../components/NavBar";
import HeroImg2 from "../components/HeroImg2"
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

import cv from "../assets/photo-cv.png"
import map from "../assets/trajet-velo.png"
import velo from "../assets/velo.jpg"
import babysitting from "../assets/babysitting.png"

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="À PROPOS" text="Ce gnome débugging le sait, mais reste muet." id="gnome"/>
      <AboutContent 
        flexRow="about row"
        h2="En reconversion professionnelle" 
        p="Et très motivée d'apprendre rapidement et de participer avec enthousiasme dans des projets en entreprise avec analyse, créativité et rigueur."
        src1={cv}
      />
      <AboutContent
      flexRow="about row-reverse"
      h2="Un défi personnel"
      p="Partant seule deux semaines l'été 2022 en vélo avec le nécessaire de camping sur le porte-bagage, croisant des cyclistes sur le chemin et visitant ces régions."
      src1={map}
      src2={velo}
      />
      <Footer />
    </div>
  )
}

export default About
