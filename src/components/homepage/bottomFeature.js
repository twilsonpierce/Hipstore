import React from 'react'
import DisplayProduct from './displayProduct';

const BottomFeature = React.createClass({
  render(){
    let itemDisplay = [];
    for (let i = this.props.bottomI; i < this.props.bottomI + 4; i++){
      let item = this.props.data.tech[i]
      console.log("item", item.name )
        itemDisplay.push(<DisplayProduct itemName={item.name} src={item.image[0]} key={i}/>)
    }
    console.log("render bottom", this.props.bottomI)
    return(
    <div>
      <button onClick={this.props.scrollLeft}>
        <i className="fa fa-chevron-left" aria-hidden="true" ></i>
      </button>
      <div className="itemDirection">
        {itemDisplay}
      </div>
      <button onClick={this.props.scrollRight}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
    )
  }
})

export default BottomFeature