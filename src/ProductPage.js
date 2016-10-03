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
      	<h1>Products Page</h1> 
      </div>
    )
  }
});

export default ProductPage;