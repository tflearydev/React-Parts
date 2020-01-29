import React, {useEffect, useState, useContext, lazy, Suspense} from "react";
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

//Data Context
import {CategoriesContext} from '../context/CategoriesContext';
import {fetchCategories} from '../api/categories-api';

import FormSelectInput from './FormSelectInput';

//HOC
import WithLoading from '../components/WithLoading';

const WithLoadingCategories = WithLoading(FormSelectInput); 



function Search() {
  const [stateCategories, dispatchCategories] = useContext(CategoriesContext);
  
  useEffect(() => {
    if(!stateCategories.dataLoaded){
      dispatchCategories({type: 'IS_FETCHING', payload: true});
      runFetchCategories();            
    }


  }, []);
  
  const runFetchCategories = async () => {
    const categories_data = await fetchCategories();

    setTimeout(() => {
      dispatchCategories({type: 'LOAD_DATA', payload: categories_data});

    }, 2000);

  
  }

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
                    <WithLoadingCategories state = {stateCategories}  />
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
