import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap'; 
import { PizzaCard } from './components/PizzaCard';
import { Confirmation } from './components/Confirmation'
// import pizzas from '.data';

function App() {
  return (
    <>
    <Confirmation />
    <Container>
      <Row>
        <p>Hello There</p>
      </Row>
    </Container>
    </>
  );
}

export default App;
