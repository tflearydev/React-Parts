import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown
  } from "react-bootstrap";
  import trucklogo from "../trucklogo.png";
  import  Drop  from '../components/Drop';
  

  const navStyle = {
    backgroundColor: "#72747A"
  }

  function SimpleNav() {


      return (
        <Navbar collapseOnSelect expand="lg" style={navStyle}>
        <Navbar.Brand href="#home">
          
        <img
            alt=""
            src={trucklogo}
            width="30"
            height="30"
            className="d-inline-block align-middle"
          />{" "}

          
          <span className="app-title">U-PART</span></Navbar.Brand>
        
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            
          </Nav>
          <Drop />

        

         
      
      </Navbar>
      )
      };
    

    export default SimpleNav;