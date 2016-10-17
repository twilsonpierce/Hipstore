import React from 'react'

const DisplayCartItem = React.createClass({
  render() {
    return (
      <div className='displayCartItem'>
        <div className='displayCartImage'>
          <img src={this.props.image} />
        </div>
        <p>{this.props.name}</p>
        <p>{'$' +this.props.price}</p>
      </div>
    )
  }
})

export default DisplayCartItem