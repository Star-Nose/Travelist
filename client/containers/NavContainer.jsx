//  eslint-disable react/prop-types 
import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavContainer = (props) => {
    return (
        <Navbar bg="light">
            <Navbar.Brand><h2>Travelist</h2></Navbar.Brand>
            <h6 id="sign-out">Sign out</h6>
        </Navbar>
    )
}

export default NavContainer;