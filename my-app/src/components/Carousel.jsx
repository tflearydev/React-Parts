import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Carousel from "react-bootstrap/Carousel";
import trucks from "../trucks.jpg";

function Caro() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 caro" src={trucks} alt="First slide" />

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Carousel.Caption>
            <div className="gradient">
              <p className="caro-text">
                Your Parts, Exactly When You Need Them!
              </p>
              <p className="caro-small">New & Improved Search and Shipping</p>
            </div>
          </Carousel.Caption>
        </ReactCSSTransitionGroup>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 caro" src={trucks} alt="Third slide" />

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Carousel.Caption>
            <div className="gradient">
              <p className="caro-text">
                Your Parts, Exactly When You Need Them!
              </p>
              <p className="caro-small">New & Improved Search and Shipping</p>
            </div>
          </Carousel.Caption>
        </ReactCSSTransitionGroup>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 caro" src={trucks} alt="Third slide" />

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Carousel.Caption>
            <div className="gradient">
              <p className="caro-text">
                Your Parts, Exactly When You Need Them!
              </p>
              <p className="caro-small">New & Improved Search and Shipping</p>
            </div>
          </Carousel.Caption>
        </ReactCSSTransitionGroup>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;
