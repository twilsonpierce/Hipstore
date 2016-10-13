import React from 'react'
import DisplayProduct from '../homepage/displayProduct'

const CartModal = React.createClass({
  render() {
    let that = this;
    let item = this.props.cart
    let cartDisplay = []
    for (let i = this.props.cart.length-1; i >= this.props.cart.length - 3; i--){
      if(item[i] !== undefined){
        cartDisplay.unshift(<DisplayProduct isCartModal={true} category={item[i].category} src={item[i].image[0]} itemName={item[i].name} price={item[i].price} key={i} closeModal={that.props.closeModal}/>)
      }
    }

    return (
      <div className="cartModalCont">
        {cartDisplay}
        <div className="cartInfo">
          <p>Total: $00.00</p>
          <button className="cartButton btn btn-default">Checkout</button>
        </div>
      </div>
    )
  }
})

export default CartModal
