import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//components 
import Nav from './components/Nav'
import Footer from './components/Footer'
import FoundError from './FoundError'
import HomePage from './HomePage'
import CategoryPage from './CategoryPage'
import ProductPage from './ProductPage'
import data from './data'


var App = React.createClass({
  getInitialState(){
    return {data: data}
  },
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
