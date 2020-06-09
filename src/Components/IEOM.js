import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Logo from '../Images/IEOM_Photo.png';


function IEOM() {
    return (

      <Jumbotron style={{borderRadius:"25px", border:"thick solid #000000", backgroundColor:"#8ee3ff"}}>
          <img src = { Logo } height="100px" width="140px"/>
          <p></p>
          <h2>

            IEOM WEBSITE
          </h2>
          <h5>
              <br></br>
              Front End Project
          </h5>
          <p>
            <br></br>
            Built a website for University of Waterloo IEOM team using React JS and Bootstrap
          </p>
          <p>
              <br></br>
              <Button href = "" variant="dark" block>Project Results</Button>
          </p>
      </Jumbotron>

    );
}

export default IEOM;
