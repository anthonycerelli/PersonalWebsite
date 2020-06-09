import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Logo from '../Images/volunteer.png';


function Volunteer() {
    return (

      <Jumbotron style={{borderRadius:"25px", border:"thick solid #000000", backgroundColor:"#8ee3ff"}}>
          <img src = { Logo } height="100px" width="100px"/>
          <p></p>
          <h2>

            VOLUNTEER
          </h2>

          <p>
            <br></br>
            In grade 12, I volunteered
            to be a tutor at Licenced to Learn in my highschool and helped a student increase his
            math grade by over 10% over the year. I also helped with a local breast cancer fundraiser
            in my home town. We went door to door collecting used LCBO bottles from local households
            and sold them to the LCBO and raised over 1000 dollars for breast cancer research.
          </p>
          <p>
              <br></br>
              <Button href = "https://www.insidehalton.com/community-story/6410664-bottles-for-boobs-fundraiser-supports-cancer-centre/" variant="dark" block>Volunteer Page</Button>
          </p>
      </Jumbotron>

    );
}

export default Volunteer;
