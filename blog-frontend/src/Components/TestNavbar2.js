import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import loginIcon from './path-to-login-icon.png';        // Your login icon
// import savedItemsIcon from './path-to-saved-items-icon.png';  // Your saved items icon
// import searchIcon from './path-to-search-icon.png';  // Optional search icon
// import { BsBookmarkHeart, BsPersonCircle } from "react-icons/bs";

const TestNavbar2 = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className='flex-nowrap'>
      <Container fluid="xxl" className='border border-danger justify-content-between' >
      
          {/* Hamburger Menu Icon for mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" className='border border-primary'/>

          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className='me-auto me-sm-0 border border-success' >
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
              width="50"  // Adjust the width to match your logo size
              height="50"
              className="d-inline-block align-top"
              alt="Brand Logo"
            />
          </Navbar.Brand>          

        {/* Right-side icons: Search, Login, Saved Items */}
        <div className="d-flex align-items-top align-items-center order-lg-2 border border-warning">
          {/* Optional search icon */}
          <Nav.Item>
            <Nav.Link as={Link} to="/search">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmiHfL1W75k3vCuOSfQh-hL4y6M-D3__C_A&s"
                width="20"
                height="20"
                className="d-inline-block align-center"
                alt="Search"
              />
            </Nav.Link>
          </Nav.Item>

          {/* Login Icon */}
          <Nav.Item>
            <Nav.Link as={Link} to="/login">
              <img
                src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
                width="30"
                height="30"
                className="d-inline-block align-center"
                alt="Login"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {/* Saved Items Icon */}
            <Nav.Link as={Link} to="/saved-items">
              <img
                src="https://w7.pngwing.com/pngs/860/512/png-transparent-instagram-social-media-save-instagram-instagram-save-social-media-logo-icon-thumbnail.png"
                width="30"
                height="30"
                className="d-inline-block align-center"
                alt="Saved Items"
              />
            </Nav.Link>
          </Nav.Item>
        </div>

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto border border-purple">
            <Nav.Link as={Link} to="/healthy-recipes">Healthy Recipes</Nav.Link>
            <Nav.Link as={Link} to="/special-diets">Special Diets</Nav.Link>
            <Nav.Link as={Link} to="/diabetes">Diabetes</Nav.Link>
            <Nav.Link as={Link} to="/meal-plans">Meal Plans</Nav.Link>
            <Nav.Link as={Link} to="/news">News</Nav.Link>
            <Nav.Link as={Link} to="/healthy-eating">Healthy Eating</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default TestNavbar2;
