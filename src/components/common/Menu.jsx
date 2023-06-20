import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar className="bgMenu text-bg-white" expand="lg">
        <Container>
          <Navbar.Brand  as={Link} to={'/'}>Recetas de la Abuela</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-item nav-link">
              <Nav.Link  as={Link} to={'/'} end>Inicio</Nav.Link>
              <Nav.Link  as={Link} to={'/registro'}end >Registro</Nav.Link>
              <Nav.Link as={Link} to={'/administrador'} end>Administrador</Nav.Link>
              <Nav.Link  as={Link} to={'/login'} end>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
