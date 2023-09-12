import "./StaticCardStyles.css";

import React from 'react'
import { Link } from "react-router-dom"

const StaticCard = () => {
  return (
    <div className="experience">
        <h3>Les Soft Skills acquis du passé</h3>
        <div className="card-container">
            <div className="card">
                <h4>Serveuse</h4>
                <span className="bar"></span>
                <p className="bigSkill">Dynamisme</p>
                <p>Esprit d'équipe</p>
                <p>Gestion du stress</p>
                <Link to="/contact" className="btn">Contact</Link>
            </div>

            <div className="card">
                <h4>Barmaid</h4>
                <span className="bar"></span>
                <p className="bigSkill">Organisation</p>
                <p>Patience</p>
                <p>Relation client</p>
                <Link to="/contact" className="btn">Contact</Link>
            </div>

            <div className="card">
                <h4>Auxiliaire de vie</h4>
                <span className="bar"></span>
                <p className="bigSkill">Créativité</p>
                <p>Ecoute</p>
                <p>Sens du besoin</p>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
        </div>
      
    </div>
  )
}

export default StaticCard
