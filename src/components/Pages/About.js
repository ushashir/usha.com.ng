import React, { Component } from 'react'
import Header from "../Common/Header";
// import image from "../assets/img/map-image.png";

import Team from "../Common/Team";
import Portfolio from './Work';

class About extends Component {
  render() {
    return (
      <div>
        <Header

          title="Software Developer"
          subtitle="USHAHEMBA SHIR"
          showButton={false}
          // image={image}
        />
        <Team />
        <div className="container ">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div>
              </div>
            <h1 >TOP RECENT PROJECTS</h1>
            </div>
          </div>
            
        </div>
        <Portfolio />
      </div>
    )
  }
}

export default About
