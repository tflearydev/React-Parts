import React from 'react';
import { Card, Form, Container, Row, Col } from 'react-bootstrap'

function Search() {
    return (

        <Container>
            <Card className="search-card">
                <Card.Body>
        <Form>
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
</Form>
</Card.Body>
</Card>
</Container>
    )
}

export default Search;