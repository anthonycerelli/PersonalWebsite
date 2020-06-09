import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Logo from '../Images/AnthonyCover.JPG';


function AboutMe() {
    return (

        <Jumbotron style={{borderRadius:"25px", border:"thick solid #000000", backgroundColor:"#8ee3ff"}}>
            <img src = { Logo } height="100px" width="100px" style= {{ borderRadius: "50px" }} />
            <p></p>
            <h2>
              ABOUT ME
            </h2>




            <p>
            <br></br>
            With experience at large enterprises PepsiCo and KPMG and startup NPX Innovation,
             I have developed a range of soft skills, including time management, communication and project management,
              leading several projects to completion. Additionally, I have polished technical skills with practical
              experience in machine learning, blockchain, and UI design.
            </p>
            <p>
                <br></br>
                <Button href = "https://www.linkedin.com/in/anthony-cerelli-6a68a6153/" variant="dark" block>LinkedIn</Button>
            </p>
        </Jumbotron>

    );
}

export default AboutMe;
