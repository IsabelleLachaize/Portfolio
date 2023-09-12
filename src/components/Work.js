import "./WorkCardStyles.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h3 className="project-heading">Projets</h3>
        <div className="project-container">
            {WorkCardData.map((val, ind) => { 
                return( 
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    btnClassName={val.btnClassName}
                    view={val.view}
                    source={val.source} />
                )
            })}
        </div>
      
    </div>
  )
}

export default Work
