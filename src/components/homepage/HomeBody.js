import React from 'react'

var HomeBody = React.createClass({
  render(){
    return (
      <div className="content container-fluid">
        <div className="col-xs-5 text-center firstCont rounded">
          <h1 className="welcome">Welcome to hipstore</h1>
        </div>
        <div className="col-xs-3 secondCont rounded">
          <h1>Featured Item</h1>
        </div>
        <div className="col-xs-3 thirdCont rounded">
          <div className="newItems rounded">
            <h1>Newest Item</h1>
          </div>
          <div className="rounded callToAction">
            <p>Sign up. We'll send you some guac.</p>
            <button type="button" className="btn btn-default btn">Join Now!</button>
          </div>
        </div>
      </div>
    )
  }
})

export default HomeBody