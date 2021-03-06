import PropTypes from "prop-types";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="/">
      <img
        id="navbar-logo"
        alt="Insfra Logo"
        src="https://insfra.com/assets/img/logo.png"
        width="200px"
        height="50px"
        
        className="d-inline-block"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="mr-auto"
        style={{ marginLeft: "250px", fontSize: "25px" }}
      >
      
      </Nav>
      <Button href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=hello@insfra.com" variant="primary">
        Write to Insfra
      </Button>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
