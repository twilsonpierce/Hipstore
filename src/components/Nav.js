import React from 'react'
import {Link} from 'react-router'
import data from '../data'

var Nav = React.createClass({
  getInitialState(){
    return {
      itemName: ''
    }
  },
  handleChange(event){
    this.setState({itemName: event.target.value})
    this.props.onChange(this.state.itemName)
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
          <Link to={"/" + category}>{category.toUpperCase()}</Link>
        </li>
      )
    })
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
        <a className="navbar-brand col-xs-4">hipstore</a>
        <form className="navbar-form pull-right col-xs-2">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search"
              onChange={this.handleChange}
              onKeyDown={this.handleReset} />
          </div>
        </form>
        <ul className="nav navbar-nav col-xs-4 pull-right text-center">
          {links}
        </ul>
        </div>
      </nav>
    )
  }
})

export default Nav