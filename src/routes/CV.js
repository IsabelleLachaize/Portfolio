import React from 'react'
import NavBar from "../components/NavBar";
import "../components/CVPDFStyles.css"

import CVPDF from "../components/CVPDF"


const CV = () => {


 
  return (
    <div>
        <NavBar/>
        <div className='container-cvpdf'>
            <CVPDF />
        </div>
    </div>
  )
}

export default CV
