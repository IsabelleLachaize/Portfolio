import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight : "2rem" }}/>
                    <div>
                        <p>94320 Thiais</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight : "2rem" }}/>06 95 93 51 35</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight : "2rem" }}/>isabelle_lachaize@hotmail.fr</h4>
                </div>
            </div>
        
            <div className="right">
                <h4>Merci d'avoir visité le site!</h4>
                <p>En vous souhaitant une très belle journée, <br/> <br/> Isabelle Lachaize</p>
                {/* <div className="social">
                    <FaLinkedin size={20} style={{color: "#fff", marginRight : "2rem" }} />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Footer
