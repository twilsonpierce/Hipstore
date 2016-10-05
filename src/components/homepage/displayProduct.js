import React from 'react';
import {Link} from 'react-router';


const DisplayProduct = React.createClass({
  render: function(){
    console.log(this.props.price)
    var category = this.props.category === undefined ? "tech" : this.props.category
    return (
      <article className={"modal1 text-center"}>
        <Link to={"/category/" + category + "/" + this.props.itemName}>
          <img 
            onClick={this.props.closeModal} 
            alt={this.props.itemName} 
            className="modalImage" 
            src={this.props.src} />
        </Link>
        <p>{this.props.itemName}{this.props.price ? ': $' + this.props.price : ""}</p>
      </article>
    )
  }
})


export default DisplayProduct;