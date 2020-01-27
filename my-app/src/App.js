import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./App.scss";


import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import  SimpleNav  from "./components/SimpleNav";
import { PizzaCard } from "./components/PizzaCard";
import  BasicModal  from "./components/BasicModal";
import { Confirmation } from "./components/Confirmation";
import pizzas from "./data";
import trucks from "./trucks.jpg";


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
      <SimpleNav />

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 caro" src={trucks} alt="First slide" />
          <Carousel.Caption>
            <div className="gradient">
              <p className="caro-text">
                Your Parts, Exactly When You Need Them!
              </p>
              <p className="caro-small">New & Improved Search and Shipping</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 caro" src={trucks} alt="Third slide" />

          <Carousel.Caption>
            <div className="gradient">
              <p className="caro-text">
              Your Parts, Exactly When You Need Them!
              </p>
              <p className="caro-small">New & Improved Search and Shipping</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 caro" src={trucks} alt="Third slide" />

          <Carousel.Caption>
            <div className="gradient">
              <p className="caro-text">
              Your Parts, Exactly When You Need Them!
              </p>
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

      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <BasicModal />
          <small>Copyright &copy; U-Part</small>
        </div>
      </footer>
    </>
  );
}

export default App;
