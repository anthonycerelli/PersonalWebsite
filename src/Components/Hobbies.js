import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Logo from '../Images/Raptors.png';


function Hobbies() {
    return (

      <Jumbotron style={{borderRadius:"25px", border:"thick solid #000000", backgroundColor:"#8ee3ff"}}>
          <img src = { Logo } height="100px" width="100px"/>
          <p></p>
          <h2>

            HOBBIES
          </h2>
          <p>
            <br></br>
            I am a die-hard Toronto Raptors fan. I am also a big NBA advocate and have my own Instagram
            account (@Raptors_Community) with over 11,000 followers. I was a member
            of the highschool rugby team in grade 12 too. I enjoy playing tennis and hockey
            as well. I am also interested in health and fitness, and work out nearly every day.
          </p>
          <p>
              <br></br>
              <Button href = "https://www.instagram.com/raptors_community/" variant="dark" block>Instagram</Button>
          </p>
      </Jumbotron>

    );
}

export default Hobbies;
