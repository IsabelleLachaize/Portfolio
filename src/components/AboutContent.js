import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import react1 from "../assets/react1.png"
// import react2 from "../assets/react2.png"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h2>En reconversion professionnelle</h2>
        <p>Et très motivée d'apprendre rapidement et de participer avec enthousiasme dans des projets en entreprise avec analyse, créativité et rigueur.
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={react1} className="img" alt=""/>
            </div>
            {/* <div className="img-stack bottom">
                <img src={react2} className="img" alt=""/>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default AboutContent
