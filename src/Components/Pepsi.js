import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Logo from '../Images/PepsiCo_transparent.6cc16f89.png';


function ResumeComponent_Pepsi() {
    return (

      <Jumbotron style={{borderRadius:"25px", border:"thick solid #000000", backgroundColor:"#8ee3ff"}}>
          <img src = { Logo } height="100px" width="118px"/>
          <p></p>
          <h2>
            PEPSI CO
          </h2>
          <h5>
              <br></br>
              Robotic Process Automatic Developer
          </h5>
          <p>
            <br></br>
            Skills / Tools Learned: Robotic Process Automation, UIPath, .NET, SQL, Power BI, DAX queries, project management
          </p>
          <p>
              <br></br>
              <Button href = "https://www.pepsico.ca/" variant="dark" block>Website</Button>
          </p>
      </Jumbotron>

    );
}

export default ResumeComponent_Pepsi;
