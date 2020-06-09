import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Logo from '../Images/KPMG_fit.99f9f6b5.png';


function ResumeComponent_KPMG() {
    return (

      <Jumbotron style={{borderRadius:"25px", border:"thick solid #000000", backgroundColor:"#8ee3ff"}}>
          <img src = { Logo } height="100px" width="150px"/>
          <p></p>
          <h2>

            KPMG LLP
          </h2>
          <h5>
              <br></br>
              SR&ED Tax Incentive Consultant
          </h5>
          <p>
            <br></br>
            Skills / Tools Learned: Python, Selenium, Pandas, Search Engine Optimization, Engineer report writing,
             consulting, networking
          </p>
          <p>
              <br></br>
              <Button href = "https://home.kpmg/ca/en/home.html" variant="dark" block>Website</Button>
          </p>
      </Jumbotron>

    );
}

export default ResumeComponent_KPMG;
