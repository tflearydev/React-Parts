import React from "react";
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

function Search() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8">
          <Card className="search-card">
            <Card.Body>
              <Form>
                <Card.Title className="text-center">Search Parts</Card.Title>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select">
                    <option>Any</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Manufacturer</Form.Label>
                  <Form.Control as="select">
                    <option>Any</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Model</Form.Label>
                  <Form.Control as="select">
                    <option>Any</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>

                <div className="text-center">
                  <MDBBtn
                    gradient="aqua"
                    rounded
                    size="sm"
                    type="submit"
                    className="text-center"
                  >
                    Search
                  </MDBBtn>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
