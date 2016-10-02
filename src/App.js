import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
require ('./App.css');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <Body />
        <Footer />
      </div>
    )
  }
})

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="navbar  navbar-fixed-top">
        <div className="container-fluid">
        <a className="navbar-brand col-xs-4">HipStore</a>
        <form className="navbar-form pull-right col-xs-2">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
        <ul className="nav navbar-nav col-xs-4 pull-right text-center">
          <li className="nav-item pull-right"><a href="#" className="nav-link">Other</a></li>
          <li className="nav-item pull-right"><a href="#" className="nav-link">Books</a></li>
          <li className="nav-item pull-right"><a href="#" className="nav-link">Tech</a></li>
          <li className="nav-item pull-right"><a href="#" className="nav-link">Food</a></li>
          <li className="nav-item pull-right"><a href="#" className="nav-link">Apparel</a></li>
          <li className="nav-item pull-right"><a href="#" className="nav-link">Home</a></li>
        </ul>
        </div>
      </nav>
    )
  }
})

var Body = React.createClass({
  render: function(){
    return (
      <div className="content container-fluid">
        <div className="col-xs-5 text-center firstCont rounded">
          <h1 className="welcome">Welcome to HipStore</h1>
        </div>
        <div className="col-xs-3 secondCont rounded">
          <h1>Featured Item</h1>
        </div>
        <div className="col-xs-3 thirdCont rounded">
          <div className="newItems rounded"><h1>Newest Item</h1></div>
          <div className="rounded callToAction">
            <h1>Sign Up</h1>
            <button type="button" className="btn btn-default btn">Join Now!</button>
          </div>
        </div>
      </div>
    )
  }
})

var Footer = React.createClass({
  render: function(){
    return (
      <div className="margin">
        <hr />
        <div className="container-fluid text-muted">
          <div className="aboutHS col-xs-7">
            <h1 className="">About HipStore</h1>
            <p>Hip Store totally brings hip apparel and accessories from Brooklyn to San Francisco.</p>
          </div>
          <div className="signUp col-xs-3 ">
            <h3 className="">Want to stay up to date?</h3>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Email" />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Sign up</button>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="container-fluid">
          <ul className="navbar-nav col-xs-4 bottomNav">
            <li className="nav-item footerLi"><a href="#" className="nav-link bottomLinks">Account</a></li>
            <li className="nav-item footerLi"><a href="#" className="nav-link bottomLinks">Our team</a></li>
            <li className="nav-item footerLi"><a href="#" className="nav-link bottomLinks">Jobs</a></li>
            <li className="nav-item footerLi"><a href="#" className="nav-link bottomLinks">Contact Us</a></li>
          </ul>
          <div className="col-xs-4 text-center">
            <a className="presented" href="http://www.c4q.nyc/" target="_blank">Sponsored by C4Q</a>
          </div>
          <div className="col-xs-1 pull-right">
          <small>HipStore &copy; 2016 </small>
          </div>
        </div>
        
      </div>
    )
  }
})

var foundError = React.createClass({
  render: function(){
    return (
      <div className="errorPage">

      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
