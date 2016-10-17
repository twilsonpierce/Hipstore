import React from 'react'
import DisplayCartItem from './components/cart/displayCartItem'


const Cart = React.createClass({
   render() {
      let itemsInCart = this.props.cart.map((item, i) =>(
        <DisplayCartItem key={i} name={item.name} price={item.price} image={item.image[0]} />
      ))
      return (
         <div className='cartPage'>
          <h1>Cart</h1>
           {itemsInCart} 
         </div>      
      );
   }
})

export default Cart