import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, browserHistory, IndexRoute} from 'react-router';
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
  sortData(){
    var listOfNames = Object.keys(data).map(function(category){
      return data[category].map(function(item){
          return item.name
      })
    })
    console.log(...listOfNames)
  },
  render() {
    this.sortData()
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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path=":category" component={CategoryPage} />
      <Route path=":product" component={ProductPage} />
      <Route path="*" component={FoundError} />
    </Route> 
  </Router>,
  document.getElementById('root')
);
