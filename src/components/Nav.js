import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Nav = React.createClass({
  getInitialState(){
    return {
      itemName: ''
    }
  },
  handleChange(event){
    if(event.target.value.length === 0){
      this.props.closeModal();
    } else {
      this.props.openModal();
      this.setState({itemName: event.target.value})
      this.props.onChange(event.target.value)
      setTimeout(() =>{
        ReactDOM.findDOMNode(this.refs["searchInput"]).focus()
      },100)
    }

  },
  handleReset: function (event){
    if(event.key === "Backspace"){
      this.props.onReset()
    }
  },
  render: function() {
    var links = Object.keys(this.props.data).map(function(category, i){
      return (

        <li key={i} className="nav-item">
          <Link to={"/category/" + category}>{category.toUpperCase()}</Link>
        </li>
      )
    })
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid navbarCont">
          <Link to="/"><div className="mainLogo col-xs-3">
          </div></Link>
          <form className="navbar-form pull-right col-xs-2">
          <div className="form-group">
            <input 
              key="search"
              type="text" 
              className="form-control"
              ref="searchInput" 
              placeholder="Search"
              onChange={this.handleChange}
              onKeyDown={this.handleReset} />
          </div>
          </form>
        <ul className="nav navbar-nav col-xs-4 pull-right text-center topNav">
          {(this.props.username) ? <li className="nav-item"><a>{"Hi, " + this.props.username}</a></li> : null}
          {links}
          <li className="nav-item pull-right">
          <button onClick={this.props.openModal}><i className="fa fa-suitcase" aria-hidden="true"></i></button>
          </li>
        </ul>
        </div>
      </nav>
    )
  }
})

export default Nav