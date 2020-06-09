import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Logo from '../Images/Dumbbell.png';


function Gym() {
    return (

      <Jumbotron style={{borderRadius:"25px", border:"thick solid #000000", backgroundColor:"#8ee3ff"}}>
          <img src = { Logo } height="100px" width="100px"/>
          <p></p>
          <h2>

            CUSTOM WORKOUT
          </h2>
          <h5>
              <br></br>
              Algorithmic Project
          </h5>
          <p>
            <br></br>
            Completely customized workout routine for individuals based on short questionnaire
          </p>
          <p>
              <br></br>
              <Button href = "" variant="dark" block>Project Results</Button>
          </p>
      </Jumbotron>

    );
}

export default Gym;
