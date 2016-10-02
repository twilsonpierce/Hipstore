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
        <Footer />
      </div>
    )
  }
})

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
        <a className="navbar-brand col-xs-4">HipStore</a>
        <form className="navbar-form pull-right col-xs-2">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
        <ul className="nav navbar-nav col-xs-4 pull-right">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Apparel</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Food</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Tech</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Books</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Other</a></li>
        </ul>
        </div>
      </nav>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
