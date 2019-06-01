import React from 'react';
import {BrowserRouter, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import Buttons from './components/buttons'
import DropDownTest from './components/DropDownTest'

const App = (props) => {
  return (
    <BrowserRouter>
        <div className="container">
        <h1>Counter - {props.count}</h1>
        <Buttons />
        <Link to="/dropdowntest">Drop down test here</Link>
        <Route path="/dropdowntest" component={DropDownTest} exact={true}/>
        </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return ({
    count : state
  })
}

export default connect(mapStateToProps)(App);
