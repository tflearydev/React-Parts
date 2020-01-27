import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown
  } from "react-bootstrap";
  import trucklogo from "../trucklogo.png";

  class SimpleNav extends Component {

  render() {


      return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={trucklogo}
            width="30"
            height="30"
            className="d-inline-block align-middle"
          />{" "}
          <span className="nav-text">U-Part</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Parts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hood</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Windshields
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fenders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      )
      };
    }

    export default SimpleNav;