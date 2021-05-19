import React, { Component } from 'react';
import TeamMember from './TeamMember';

import img from "../assets/img/team/2.jpg";

const teamMembers = [
  {
    name: 'Ushahemba Shir', 
    title: 'Software Developer', 
    image: img, 
    github: '//www.github.com/ushashir', 
    linkedin: '//www.linkedin.com/in/ushashir/',
    twitter: '//www.twitter.com/usha_shir', 
    facebook: '//www.facebook.com/ushashir/', 
    stackflow: '//stackoverflow.com/users/11306350/ushahemba-shir',
    youtube: '//youtube.com/channel/UCggoM2vJLpUE2U_UOak1a7w'
    }
]
class Team extends Component {
  render() {
    return (
      <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
            <TeamMember {...teamMembers[0]} />
            <div className="col-sm-12 col-md-12 col-lg-8 bg-light">
              <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">My Resume: </span>
              <span className="btn-group ml-two"><span className="btn btn-light"> 
              <a href="https://drive.google.com/file/d/1HmxIzBwKxM21OncZXDygTmUKCVP0-M8O/view?usp=sharing"  target="_blank" rel="noopener">On Click</a> </span>  </span></p>  
              <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Skills: </span>
              <span className="btn-group ml-two"><span className="btn btn-success">HTML5</span> 
              <span className="btn btn-success">CSS3</span>  
              <span className="btn btn-success">JavaScript</span>
              <span className="btn btn-success">Git</span> 
              <span className="btn btn-success">Github</span>
              <span className="btn btn-success">Heruko</span>
              <span className="btn btn-success">React</span>
              <span className="btn btn-success">Redux</span>  
              <span className="btn btn-success">NodeJS</span>
              </span></p>  
              <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Frameworks: </span>
              <span className="btn-group ml-two"> 
              <span className="btn btn-success">Boostrap5</span>
              <span className="btn btn-success">Materialized CSS</span>
              <span className="btn btn-success">SASS</span>
              <span className="btn btn-success">Webpack</span>
              <span className="btn btn-success">Express</span>
              <span className="btn btn-success">SPFx</span>
              </span></p>  
              <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Database: </span>
              <span className="btn-group ml-two"><span className="btn btn-success">MongoDB</span>  </span></p>  
              <p className="large text-muted about-desc"><span className="btn btn-secondary about-desc-title">Interests: </span> 
              <span className="ml-two"><span className="btn-group ml-two">  
              <span className="btn btn-success">AgroTech</span>
              <span className="btn btn-success">EduTech</span> 
              <span className="btn btn-success">Public Policy</span></span></span></p>  
            </div>
        </div>
      
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading text-uppercase">WHAT DRIVES ME</h2>
            <h4>What drives me is the desire to build sustainable solutions across
             all spheres of human challenges.</h4>  
          </div>
        </div>
        
      </div>
    </section>  
    )
  }
}

export default Team
