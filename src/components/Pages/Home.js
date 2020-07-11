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
      
        title="Software Developer / Founder of Nawill"
        subtitle="USHAHEMBA SHIR."
        buttonText="Message me here!"
        link="/contact"
        showButton={true}
      />
    )
  }
}

export default Home
