import React from 'react';
import BackgroundPhoto from '../Images/lightgrey-background.db03dca0.jpg';
import ResumeComponent_NPX from '../Components/NPX.js'
import ResumeComponent_Pepsi from '../Components/Pepsi.js'
import ResumeComponent_KPMG from '../Components/KPMG.js'


function WorkExperiencePage() {
    return (
        <div style={{width: "100%", height: "857px", backgroundImage: `url(${BackgroundPhoto})` }}>
            <h1 style= {{ fontFamily:"Arial", fontWeight:"bold" }}>
              <br></br>
              WORK EXPERIENCE
            </h1>
            <p>
              <br></br>
            </p>
            <div style = {{ width:"30%", marginLeft:"1%", float:"left" }}>
                <ResumeComponent_NPX/>
            </div>
            <div style = {{ width: "30%", float:"right", marginRight:"1%" }}>
                <ResumeComponent_KPMG/>
            </div>
            <div style = {{ width: "30%", float:"right", marginRight:"4%" }}>
                <ResumeComponent_Pepsi/>


            </div>
        </div>
    );
}

export default WorkExperiencePage;
