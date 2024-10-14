import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsBookmarkHeart, BsPersonCircle } from "react-icons/bs";

const TestNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Brand Logo"
          />
        </Navbar.Brand>

        {/* Navbar Toggler for responsiveness */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
            {/* <Nav.Link as={Link} to="/section3">Section 3</Nav.Link> */}
          </Nav>
          {/* Icons for login and saved items */}
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login">
              <BsPersonCircle/>
              {/* <img
                src={ BsPersonCircle }
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Login"
              /> */}
            </Nav.Link>
            <Nav.Link as={Link} to="/saved-items">
              <BsBookmarkHeart/>
              {/* <img
                src={ BsBookmarkHeart }
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Saved Items"
              /> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TestNavbar;
