import React, { Component } from 'react'
import Header from "../Common/Header";
// import image from "../assets/img/team/1.jpg";
import "../../css/Home.css";

//Re-usable components

class Home extends Component {
  render() {
    const h = window.screen.height * 0.63
    return (
      <Header
        headerHeight={{height: `${h}px`}}
      
        title="Software Developer [ MERN Stack ]"
        subtitle="USHAHEMBA SHIR"
        buttonText="Hire me!"
        link="/contact"
        showButton={true}
      />
    )
  }
}

export default Home
