import React, {useEffect, useState, useContext, lazy, Suspense, useReducer} from "react";
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

//Data Context
import { CategoriesContext } from "../context/CategoriesContext";
import { fetchCategories, fetchManufacturersApi } from "../api/categories-api";

import FormSelectInput from "./FormSelectInput";

//Reducers
import ManufacturersReducer from '../reducers/manufacturers/ManufacturersReducer';
//HOC
import WithLoading from "../components/WithLoading";

const WithLoadingCategories = WithLoading(FormSelectInput);

function Search(props) {
  const {search_props} = props;
  


  useEffect(() => {
    if(!search_props.stateCategories.dataLoaded){
      search_props.dispatchCategories({type: 'IS_FETCHING', payload: true});
      search_props.runFetchCategories();            
    }
  }, []);

  
  

  
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8">
          <Card className="search-card">
            <Card.Body>
              <Form>
                <Card.Title className="text-center">Search Parts</Card.Title>

                {
                    !search_props.stateCategories.dataLoaded ?
                      (<p>Loading Data.....</p>)
                    :
                      (
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Category</Form.Label>
                          <Form.Control as="select" onChange={search_props.filterCategories}>
                            <option key="null" value = "null">Any</option>
                            {
                              search_props.stateCategories.data.map((obj) => (<option key={obj.id} value = {obj.id}>{obj.name}</option>))
                            }


                          </Form.Control>
                        </Form.Group>
                      )

                  }


                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Manufacturer</Form.Label>

                  {




                    //Initial load
                    (search_props.manufacturerState.isFetching == false && search_props.manufacturerState.dataLoaded == false) ?

                      (
                        <Form.Control as="select">
                        <option>Any</option>
                        </Form.Control>
                      )
                      
                    :
                    //fecthing
                    (search_props.manufacturerState.isFetching == true)  ?
                        (<p>Loading Data.......</p>)

                        :
                        //Data loaded
                        <Form.Control as="select" onChange={search_props.filterManufactuers}>
                        <option value = "null" key="null">Any</option>
                        {
                           search_props.manufacturerState.data.map((obj) => (<option key={obj.id} value = {obj.id}>{obj.name}</option>))

                        }
                        </Form.Control>
 

                  }

            



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
