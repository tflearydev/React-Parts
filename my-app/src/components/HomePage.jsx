import React, {useEffect, useState, useContext, lazy, Suspense, useReducer} from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from "mdbreact";

// import Carousel from "../components/Carousel";
import SimpleNav from "../components/SimpleNav";
import PartCard from "./PartCard";
import Footer from "../components/Footer";
import Confirmation from "../components/Confirmation";
import parts from "../data";
import Search from "../components/Search";


//API
import {fetchParts} from '../api/categories-api';

//Data Context
import {CategoriesContext} from '../context/CategoriesContext';
import {fetchCategories, fetchManufacturersApi} from '../api/categories-api';

import FormSelectInput from './FormSelectInput';

//Reducers
import ManufacturersReducer from '../reducers/manufacturers/ManufacturersReducer';
//HOC
import WithLoading from '../components/WithLoading';





function Home() {
  //Establish State
  const [ordered, setOrdered] = useState(false);
  const [partsState, setPartsState] = useState([]);
  const [stateCategories, dispatchCategories] = useContext(CategoriesContext);

  const [manufacturerState, setManufacturerState] = useState({
    isFetching: false,
    data: [],
    dataLoaded: false,
    selected_id: null

  });


  

  

  //Onchange Events
  const filterCategories =  (e) => {
      let value = e.target.value; 
      dispatchCategories({type: 'UPDATE_SELECTED_ID', payload: value});

      if(isNaN(value) || value == "novalue"){
        setManufacturerState({
          isFetching: false,
          dataLoaded: true,
          data: []
        });
      }else{
        setManufacturerState({
          isFetching: true,
        });
        runFetchManufacturer(value);   
      }

          
  }

  const filterManufactuers = (e) => {
      let value = e.target.value; 
      setManufacturerState((state) =>({
        ...state,
        selected_id: value
      }));
     // dispatchManufacturer({type: 'UPDATE_SELECTED_ID', payload: value});
  }
  //End Onchange Events


  //Async Api Calls
  const runFetchManufacturer = async (value) => {
    const response = await fetchManufacturersApi(value);
    setManufacturerState({
      isFetching: false,
      dataLoaded: true,
      data: response
    });
   // dispatchManufacturer({type: 'LOAD_DATA', payload: response});

  }
  const runFetchCategories = async () => {
    const categories_data = await fetchCategories();  
    dispatchCategories({type: 'LOAD_DATA', payload: categories_data}); 
  }

  const getSearchVehicles = async () => {
    let category_id = stateCategories.selected_id;
    let manufacturer_id = manufacturerState.selected_id;

    const data = {
      category_id : category_id,
      manufacturer_id: manufacturer_id
    }

    const results = await fetchParts(data);
    setPartsState(results);
  }
  //End Async Api Calls

  //Props to pass down to  components
  const search_props ={
    stateCategories : stateCategories,
    dispatchCategories: dispatchCategories,
    manufacturerState: manufacturerState,
    //dispatchManufacturer: dispatchManufacturer,
    runFetchCategories: runFetchCategories,
    runFetchManufacturer: runFetchManufacturer,
    filterCategories: filterCategories,
    filterManufactuers: filterManufactuers
  }


  useEffect(() => {
      if(stateCategories.selected_id){
        if(stateCategories.selected_id == 'null'){
          setPartsState([]);
        }else{
          getSearchVehicles();

        }
      }


  }, [stateCategories.selected_id, manufacturerState.selected_id]);
  


  


  function displayConfirmation() {
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 6000);
  }

  return (
    <>
      <SimpleNav />

      {/* <Carousel /> */}
      <section>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Search search_props = {search_props} />
        </ReactCSSTransitionGroup>
      </section>

      <Container>
        {ordered && <Confirmation toggle={setOrdered} />}
        <Row>
          {partsState.map(data => (
            <Col lg={3} className="mb-4 mt-5" key={`${data.id}`}>
              <PartCard data={data} setOrdered={displayConfirmation} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
