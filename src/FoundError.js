import React from 'react'

var FoundError = React.createClass({
  render: function(){
    return (
      <div className="errorPage">
        <div className="errorPageContent">
          <h1>404</h1>
          <h2>You seem lost. Get this vintage hand-crafted compass <a href="#"><strong>here</strong></a></h2>
        </div>
      </div>
    )
  }
})

export default FoundError