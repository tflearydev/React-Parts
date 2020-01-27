import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./App.scss";
import HomePage from './components/HomePage'





function App() {


  return (
    <>
      <Router>

      <Switch>
            <Route exact path='/' component={HomePage} />
          
          </Switch>


      </Router>
    </>
  );
}

export default App;
