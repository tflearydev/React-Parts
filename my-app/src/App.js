import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

// import 'mdbreact/dist/css/mdb.css';
import "./App.scss";
import HomePage from './components/HomePage'


//Context Providers
import CategoriesContextProvider from './context/CategoriesContext';


function App() {


  return (
    <>
      <CategoriesContextProvider>
        <Router>

        <Switch>
              <Route exact path='/' component={HomePage} />
            
            </Switch>


        </Router>
      </CategoriesContextProvider>
    </>
  );
}

export default App;
