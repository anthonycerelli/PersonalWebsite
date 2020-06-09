import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

// pull to right: <Navbar.Toggle aria-controls="basic-navbar-nav" /> /n <Navbar.Collapse id="basic-navbar-nav" />

export class NavBar extends Component {
    render() {
        return (

            <Navbar bg="dark" expand="lg">

                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to='/'>Home</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to='/WorkExperience'>Work Experience</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to='/Projects'>Projects</NavLink>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                <SocialIcon url="https://www.linkedin.com/in/anthony-cerelli-6a68a6153/" style={{ height: 35, width: 35 }} />
            </Navbar>

        );
    }

}


export default NavBar;
