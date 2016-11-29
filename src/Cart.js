import React from 'react'
import DisplayCartItem from './components/cart/displayCartItem'


const Cart = React.createClass({
   render() {
      let itemsInCart = this.props.cart.map((item, i) =>(
        <DisplayCartItem key={i} name={item.name} price={item.price} image={item.image[0]} quantity={item.quantity} />
      ))

      let cartPrice = this.props.cart.reduce((total, item) => {
        console.log(total)
        
        return total + (item.price * item.quantity)
      }, 0)

   
      return (
         <div className='cartPage'>
          <h1>Cart</h1>
           {itemsInCart} 
          <h3>Total Items : {this.props.cart.length}</h3>
          <h3>Total Price : {cartPrice}</h3>
         </div>      
      );
   }
})

export default Cart