import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Logo from '../Images/NPX_Transparent.b8a9ed96.webp';


function ResumeComponent_NPX() {
    return (

        <Jumbotron style={{borderRadius:"25px", border:"thick solid #000000", backgroundColor:"#8ee3ff"}}>
            <img src = { Logo } height="100px" width="100px"/>
            <p></p>
            <h2>
              NPX INNOVATION
            </h2>
            <h5>
                <br></br>
                Sofware Developer
            </h5>
            <p>
              <br></br>
              Skills / Tools Learned: Machine Learning, Neural Networks, Python, Keras, Tensorflow, SKLearn,
               NLP, blockchain, Solidity, Truffle, Ganache
            </p>
            <p>
                <br></br>
                <Button href = "https://www.npxinnovation.ca/" variant="dark" block>Website</Button>
            </p>
        </Jumbotron>

    );
}

export default ResumeComponent_NPX;
