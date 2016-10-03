import React from 'react'

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
          <li className="nav-item pull-right"><a href="#" className="nav-link">Art</a></li>
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

export default Nav