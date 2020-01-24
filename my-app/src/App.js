import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";
import { PizzaCard } from "./components/PizzaCard";
import { Confirmation } from "./components/Confirmation";
import pizzas from "./data";
import trucks from "./trucks.jpg";
import trucklogo from "./trucklogo.png";

function App() {
  const [ordered, setOrdered] = useState(false);

  function displayConfirmation() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 6000);
  }

  return (
    <>
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

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 caro" src={trucks} alt="First slide" />
          <Carousel.Caption>
            <div className="gradient">
              <h3 className="caro-text">
                Your Parts, Exactly <br></br>When You Need Them!
              </h3>
              <p className="caro-small">New & Improved Search and Shipping</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 caro" src={trucks} alt="Third slide" />

          <Carousel.Caption>
            <div className="gradient">
              <h3 className="caro-text">
                Your Parts, Exactly <br></br>When You Need Them!
              </h3>
              <p className="caro-small">New & Improved Search and Shipping</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 caro" src={trucks} alt="Third slide" />

          <Carousel.Caption>
            <div className="gradient">
              <h3 className="caro-text">
                Your Parts, Exactly <br></br>When You Need Them!
              </h3>
              <p className="caro-small">New & Improved Search and Shipping</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        {ordered && <Confirmation toggle={setOrdered} />}
        <Row>
          {pizzas.map(data => (
            <Col lg={3} className="mb-4 mt-3" key={`${data.id}`}>
              <PizzaCard data={data} setOrdered={displayConfirmation} />
            </Col>
          ))}
        </Row>
      </Container>

      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; U-Part</small>
        </div>
      </footer>
    </>
  );
}

export default App;
