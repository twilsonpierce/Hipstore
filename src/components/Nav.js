import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import data from '../data'

const Nav = React.createClass({
  getInitialState(){
    return {
      itemName: ''
    }
  },
  componentDidMount: function() {
    setTimeout(function() {
      ReactDOM.findDOMNode(this.refs["searchInput"]).focus();
    }.bind(this), 0);
  },
  handleChange(event){
    if(event.target.value.length === 0){
      this.props.closeModal();
    } else {
      this.props.openModal();
      this.setState({itemName: event.target.value})
      this.props.onChange(event.target.value)
    }
  },
  handleReset: function (event){
    if(event.key === "Backspace"){
      this.props.onReset()
    }
  },
  render: function() {
    var links = Object.keys(data).map(function(category, i){
      return (

        <li key={i} className="nav-item">
          <Link to={"/category/" + category}>{category.toUpperCase()}</Link>
        </li>
      )
    })
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid navbarCont">
          <div className="mainLogo col-xs-3">
          </div>
          <form className="navbar-form pull-right col-xs-2">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              ref="searchInput" 
              placeholder="Search"
              onChange={this.handleChange}
              onKeyDown={this.handleReset} />
          </div>
          </form>
        <ul className="nav navbar-nav col-xs-4 pull-right text-center topNav">
          {links}
          <li className="nav-item pull-right">
            <i className="fa fa-suitcase" aria-hidden="true"></i>
          </li>
        </ul>
        </div>
      </nav>
    )
  }
})

export default Nav