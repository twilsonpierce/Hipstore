import React from 'react';


const DisplayProduct = React.createClass({
  render: function(){

    return (
      <article className="modal1">
        <img className="modalImage" src={this.props.src}    />
        <p>{this.props.itemName}</p>
      </article>
    )
  }
})


export default DisplayProduct;