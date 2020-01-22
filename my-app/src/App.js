import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap'; 
import Carousel from 'react-bootstrap/Carousel'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { PizzaCard } from './components/PizzaCard';
import { Confirmation } from './components/Confirmation';
import pizzas from './data';
import trucks from './trucks.jpg'

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
<Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 caro"
      src={trucks}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="caro-text">Your Parts, Exactly <br></br>When You Need Them!</h3>
      <p>New & Improved Search and Shipping</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caro"
      src={trucks}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className="caro-text">Your Parts, Exactly <br></br>When You Need Them!</h3>
      <p>New & Improved Search and Shipping</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caro"
      src={trucks}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className="caro-text">Your Parts, Exactly <br></br>When You Need Them!</h3>
      <p className="caro-small">New & Improved Search and Shipping</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    
    <Container>
      {ordered && <Confirmation toggle= {setOrdered} />}
      <Row>
        {pizzas.map(data => (
          <Col lg={3} className="mb-4 mt-3" key={`${data.id}`}>
            <PizzaCard data={data} setOrdered={displayConfirmation} />
          </Col>
        ))}
        
      </Row>
    </Container>

    </>
 
    
  );
}

export default App;
