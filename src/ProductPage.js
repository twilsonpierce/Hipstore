import React from 'react';
import data from './data';

const ProductPage = React.createClass({
	getInitalState:function(){
		return{data:null}
	},
	componentDidMount:function(){
		this.setState({data:data.getApparel()})
		console.log(data, 'this is the data object');
	},
  render:function(){
    return (
      <div>
      	<button >Add To Cart</button> 
      </div>
    )
  }
});

export default ProductPage;