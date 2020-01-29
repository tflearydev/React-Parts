import React, {useEffect, useState, useContext, lazy, Suspense} from "react";
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

//Data Context
import {CategoriesContext} from '../context/CategoriesContext';
import {fetchCategories, fetchManufacturersApi} from '../api/categories-api';

import FormSelectInput from './FormSelectInput';

//HOC
import WithLoading from '../components/WithLoading';




const WithLoadingCategories = WithLoading(FormSelectInput); 



function Search() {
  const [stateCategories, dispatchCategories] = useContext(CategoriesContext);
  const [manufacturerState, setManufacturerState] = useState({

    isFetching: false,
    data: {},
    dataLoaded: false

  });
  useEffect(() => {
    if(!stateCategories.dataLoaded){
      dispatchCategories({type: 'IS_FETCHING', payload: true});
      runFetchCategories();            
    }


  }, []);
  

  const runFetchManufacturer = async (value) => {

        const response = await fetchManufacturersApi(value);

        return response;
  }


  const filterCategories = async (e) => {

      let value = e.target.value; 
    // alert(value)
      if (value == "") {
        return;
      }

      setManufacturerState({
        isFetching: true,
      })
       
      const response = await runFetchManufacturer(value);

      console.log(response)
      setManufacturerState({
        isFetching: false,
        data: response,
        dataLoaded: true

      })


  }


  const runFetchCategories = async () => {
    const categories_data = await fetchCategories();

    
      dispatchCategories({type: 'LOAD_DATA', payload: categories_data});

   

  
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8">
          <Card className="search-card">
            <Card.Body>
              <Form>
                <Card.Title className="text-center">Search Parts</Card.Title>

                {
                    !stateCategories.dataLoaded ?
                      (<p>Loading Data.....</p>)
                    :
                      (
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Category</Form.Label>
                          <Form.Control as="select" onChange={filterCategories}>
                            <option value = "">Any</option>
                            {
                              stateCategories.data.map((obj) => (<option key={obj.id} value = {obj.id}>{obj.name}</option>))
                            }


                          </Form.Control>
                        </Form.Group>
                      )

                  }


                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Manufacturer</Form.Label>


                  {
                    //Initial load
                    !manufacturerState.isFetching && !manufacturerState.dataLoaded ?

                      (
                        <Form.Control as="select">
                        <option>Any</option>
                        </Form.Control>
                      )
                      
                    :
                    //fecthing
                    (manufacturerState.isFetching == true)  ?
                        (<p>Loading Data.......</p>)

                        :
                        //Data loaded
                        <Form.Control as="select">
                        <option>Any</option>
                        {
                           manufacturerState.data.map((obj) => (<option key={obj.id} value = {obj.id}>{obj.name}</option>))

                        }
                        </Form.Control>


                    

                    

                  }

            



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
