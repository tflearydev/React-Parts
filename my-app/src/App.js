import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap'; 
import Carousel from 'react-bootstrap/Carousel'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { PizzaCard } from './components/PizzaCard';
import { Confirmation } from './components/Confirmation';
import pizzas from './data';

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
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
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
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 caro"
      src="https://hankeringforhistory.com/wp-content/uploads/18-wheeler.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caro"
      src="https://hankeringforhistory.com/wp-content/uploads/18-wheeler.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caro"
      src="https://hankeringforhistory.com/wp-content/uploads/18-wheeler.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
