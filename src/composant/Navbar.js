import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
const NavigationBar = () => {
  return (
    <Navbar bg="secondary" variant="dark" expand="md">
      <Navbar.Brand href="#home">CC1 REACT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Api">PAGINATION</Nav.Link>
          <Nav.Link as={Link} to="/context/Langcontext">MULTILANGUAGE</Nav.Link>

          <Nav.Link as={Link} to="/Imgslide">SLIDER</Nav.Link>
          <Nav.Link as={Link} to="/TP1">CALCULATRICE</Nav.Link>
          <Nav.Link as={Link} to="/FormeTasks">TO DO LIST</Nav.Link>
          <Nav.Link as={Link} to="*">AUTRE</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;