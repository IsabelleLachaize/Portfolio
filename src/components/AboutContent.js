import "./AboutContentStyles.css";

import React, { Component } from 'react'
import { Link } from "react-router-dom";


class AboutContent extends Component {
  render() {
  return (
    <div className={this.props.flexRow}>
      <div className="left">
        <h2>{this.props.h2}</h2>
        <p>{this.props.p}</p>
        {/* <Link to="/contact">
            <button className="btn">Contact</button>
        </Link> */}
      </div>

      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={this.props.src1} className="img" alt=""/>
            </div>
            <div className="img-stack bottom">
                <img src={this.props.src2} className="img" alt=""/>
            </div>
        </div>
      </div>
    </div>
  )}
}

export default AboutContent
