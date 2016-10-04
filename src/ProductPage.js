import React from 'react';
import data from './data';

var ProductPage = React.createClass({	
  render: function(){

  // 	var category = this.props.params.category;
  // 	 var product = this.props.params.product;
  // 	 var item = data[category].map(function(item){
  // 	 	if(item === product){
  // 	 		return item;
  // 	 	}
  // })
   	return (
      <div className="contentContainer">

        <img className=" image col-xs-6"src="https://img1.etsystatic.com/067/0/11131067/il_570xN.790990333_kngx.jpg" alt="idk" ></img>


        <div className="detailContainer col-xs-6">
        	<div className="detailRow itemHeading">
            <div className="itemTitle ">IDK,GOOGLE IT</div>
            <div className="itemPrice "> $14.99</div>
         </div>

          <div className="itemDescription detailRow">
            <p className="itemDetail ">Idk , google it, tumblr t-shirts, instagram slogan tees. I dont know idk, google it.Cool Google shirt.
            All our products are made to the highest quality, using top of the range vinyl cutters and professional heat presses.</p>
          </div>

          <div className="icon detailRow">
            <a href="#"  title="Twitter"><i className="fa fa-twitter"></i></a>
            <a href="#"  title="Facebook"><i className="fa fa-facebook"></i></a>
            <a href="#"  title="Tumblr"><i className="fa fa-tumblr"></i></a>
            <a href="#"  title="Pinterst"><i className="fa fa-pinterest"></i></a>
          </div>
          
            <div className="features detailRow">
            <button type="button"className=" btn btn-default">Qty:1</button>
            <button type="button"className="btn btn-default">Add To Bag</button>
          </div>
        </div>

      </div>
      )
	}
});

export default ProductPage;

