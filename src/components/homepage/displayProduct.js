import React from 'react';
import {Link} from 'react-router';


const DisplayProduct = React.createClass({
  render(){
    var category = this.props.category === undefined ? "tech" : this.props.category
    return (
      <article className={this.props.isCartModal ? "cartItem" : "modal1 text-center"} >
        <Link to={"/category/" + category + "/" + this.props.itemName}>
          <img 
            onClick={this.props.closeModal} 
            alt={this.props.itemName} 
            className={this.props.isCartModal ? "cartModalImage" : "modalImage" }
            src={this.props.src} />
        </Link>
        <p><span>{this.props.itemName}</span><span>{this.props.price ? ': $' + this.props.price : ""}</span></p>
        <br/>
        <p>Qty:{this.props.quantity}</p>
      </article>
    )
  }
})


export default DisplayProduct;