import "./WorkCardStyles.css"

import React from 'react'

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (

            <div className="project-card">
                <img src={props.imgsrc} alt="" />
                <h4 className="project-title">{props.title}</h4>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className={props.btnClassName}>
                        <NavLink to={props.view}
                        className="btn">View</NavLink>
                        <NavLink to={props.source}
                        className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard
