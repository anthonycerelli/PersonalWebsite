import React from 'react';
import BackgroundPhoto from '../Images/lightgrey-background.db03dca0.jpg';
import AboutMe from '../Components/AboutMe.js';
import Volunteer from '../Components/Volunteer.js';
import Hobbies from '../Components/Hobbies.js';

function HomePage() {
    return (
      <div style={{width: "100%", height: "857px", backgroundImage: `url(${BackgroundPhoto})` }}>
          <h1 style= {{ fontFamily:"Arial", fontWeight:"bold" }}>
            <br></br>
            HOME
          </h1>
          <p>
            <br></br>
          </p>
          <div style = {{ width:"30%", marginLeft:"1%", float:"left" }}>
              <AboutMe/>
          </div>
          <div style = {{ width: "30%", float:"right", marginRight:"1%" }}>
              <Hobbies/>
          </div>
          <div style = {{ width: "30%", float:"right", marginRight:"4%" }}>
              <Volunteer/>
          </div>
      </div>
    );
}

export default HomePage;
