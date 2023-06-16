import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
    return (
        <div>
            <Navbar  className='bgMenu text-bg-white' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Recetas de la Abuela</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Administrador</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
        
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Menu;