import React from 'react'
import DisplayProduct from '../homepage/displayProduct'
import {Link} from 'react-router'

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
    console.log(this.props.cart)
    let cartPrice = this.props.cart.reduce((total, item) => {
      console.log(total)
      return total + item.price
    }, 0)
    console.log(cartPrice)

    return (
      <div className="cartModalCont">
        {cartDisplay}
        <div className="cartInfo">
          <p>Total: ${cartPrice}</p>
          <Link to='/checkout/cart'><button className="cartButton btn btn-default">Checkout</button></Link>
        </div>
      </div>
    )
  }
})

export default CartModal
