import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Logo from '../Images/NBA.png';


function NBA() {
    return (

        <Jumbotron style={{borderRadius:"25px", border:"thick solid #000000", backgroundColor:"#8ee3ff"}}>
            <img src = { Logo } height="100px" width= "90px"/>
            <p></p>
            <h2>
              NBA PREDICTION
            </h2>
            <h5>
                <br></br>
                Machine Learning Project
            </h5>
            <p>
              <br></br>
              Designed a classical regression model to predict an NBA player's statistical output based on historical data
            </p>
            <p>
                <br></br>
                <Button href = "https://drive.google.com/drive/folders/1Nsx-kCHHoRYZv6wUHD1pAGk0-8Sm9cnN?usp=sharing" variant="dark" block>Project Results</Button>
            </p>
        </Jumbotron>

    );
}

export default NBA;
