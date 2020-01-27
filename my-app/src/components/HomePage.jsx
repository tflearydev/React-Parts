import React, { useState } from "react";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Container, Row, Col } from "react-bootstrap";
import Carousel from "../components/Carousel";
import  SimpleNav  from "../components/SimpleNav";
import PizzaCard from "./PartCard";
import  Footer from "../components/Footer"
import  Confirmation  from "../components/Confirmation";
import pizzas from "../data";
import Search from "../components/Search"


function Home() {
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
  
        <Carousel />

<section>
<ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

<Search />
        </ReactCSSTransitionGroup>

        
        </section>
  
        <Container>
          {ordered && <Confirmation toggle={setOrdered} />}
          <Row>
            {pizzas.map(data => (
              <Col lg={3} className="mb-4 mt-5" key={`${data.id}`}>
                <PizzaCard data={data} setOrdered={displayConfirmation} />
              </Col>
            ))}
          </Row>
        </Container>
  
        <Footer />
      </>
    );
  }
  
  export default Home;
  