import React from 'react';


var ProductPage = React.createClass({	
  render: function(){
    let socialMedia = ["twitter", "facebook", "tumblr", "pinterest"]
    let socialIcon = socialMedia.map(function(social,i){
      return (
        <a href="#" key={i} title={social}><i className={"fa fa-" + social}></i></a>
      )
    })
    let category = this.props.params.category;
  	let product = this.props.params.product;
  	let item = this.props.data[category].filter(function(item){
        if(item.name === product){
    	 		return item;
    	 	}
      })
   	return (
      <div className="contentContainer">

        <img className=" image col-xs-6"src={item[0].image[0]} alt={item[0].name} ></img>


        <div className="detailContainer col-xs-6">
        	<div className="detailRow itemHeading">
            <div className="itemTitle">{item[0].name}</div>
            <div className="itemPrice">{"$" + item[0].price}</div>
         </div>

          <div className="itemDescription detailRow">
            <p className="itemDetail ">{item[0].description}</p>
          </div>

          <div className="icon detailRow">
            {socialIcon}
          </div>
          
            <div className="features detailRow">
            <button type="button"className=" btn btn-default">{"Qty:" + item[0].quantity}</button>
            <button type="button"className="btn btn-default">Add To Bag</button>
          </div>
        </div>

      </div>
      )
	}
});

export default ProductPage;

