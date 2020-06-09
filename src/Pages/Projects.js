import React from 'react';
import BackgroundPhoto from '../Images/lightgrey-background.db03dca0.jpg';
import Gym from '../Components/GYM.js';
import NBA from '../Components/NBA.js';
import IEOM from '../Components/IEOM.js';

function ProjectPage() {
    return (
        <div style={{width: "100%", height: "857px", backgroundImage: `url(${BackgroundPhoto})` }}>
            <h1 style= {{ fontFamily:"Arial", fontWeight:"bold" }}>
            <br></br>
            PROJECTS
            </h1>
            <p>
              <br></br>
            </p>
            <div style = {{ width:"30%", marginLeft:"1%", float:"left" }}>
                <NBA/>
            </div>
            <div style = {{ width: "30%", float:"right", marginRight:"1%" }}>
                <IEOM/>
            </div>
            <div style = {{ width: "30%", float:"right", marginRight:"4%" }}>
                <Gym/>
            </div>
        </div>
    );
}

export default ProjectPage;
