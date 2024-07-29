import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fade-in hover-effect">
          <img
            src="/images/logo.jpg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="EcoBlend logo"
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="slide-in-left">Home</Nav.Link>
            <Nav.Link href="#features" className="slide-in-left">Features</Nav.Link>
            <Nav.Link href="#testimonials" className="slide-in-left">Testimonials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
