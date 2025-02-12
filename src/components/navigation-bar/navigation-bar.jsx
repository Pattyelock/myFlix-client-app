import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar = ({ user, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 px-3">
      <Navbar.Brand as={Link} to="/">MyFlix</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {user && (
            <>
              
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            </>
          )}
        </Nav>
        <Nav>
          {user ? (
            <Button variant="outline-light" onClick={onLogout}>Logout</Button>
          ) : (
            <>
              <Nav.Link as={Link} to="/">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

