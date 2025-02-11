import React from "react"

export default function About(){
    return(
      <div className="about-container">
        <img className="about-img" src="http://localhost:3000/bg-images/image55.png"></img>

        <div className="about-text">
          <h1>Don’t squeeze in a sedan when you could relax in a van</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
          <br/>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        

        <div className="about-cta">
          <h1>Your destination is waiting. <br/>Your van is ready.</h1>
          <button className="about-cta-btn">Explore our vans</button>
        </div>
      </div>
    )
  }