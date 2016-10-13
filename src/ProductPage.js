import React from 'react';
// import StarRatingComponent from 'react-star-rating-component';
import ReactStars from 'react-stars';


var ProductPage = React.createClass({	
  //Getting the ratings from users 
  getInitialState:function(){
    return({rating: 0})
  },
  handleChange:function(newRating){
    this.setState({rating:newRating});
  },
  findItem(){
    //find the image to display base off the params
    let category = this.props.params.category;
    let product = this.props.params.product;
    let item = this.props.data[category].filter((item) => {
        if(item.name === product){
          return item;
        }
    })
    
    return item
  },
  addItemToCart(event){
    let item = this.findItem()
    this.props.addToCart(item, event)
  },
  render: function(){
    console.log(this.state, 'this is the state');
    console.log(this.handleChange, 'this is the onClick function')

    // display social media icons
    let socialMedia = ["twitter", "facebook", "tumblr", "pinterest"]
    let socialIcon = socialMedia.map((social,i) =>
      <a href="#" key={i} title={social}><i className={"fa fa-" + social}></i></a>
    )

    let item = this.findItem()
   	return (
      <div className="contentContainer">

        <img className=" image col-xs-6"src={item[0].image[0]} alt={item[0].name} ></img>


        <div className="detailContainer col-xs-6">

        	<div className="detailRow itemHeading">
            <div className="itemTitle">{item[0].name}</div>
            <div className="itemPrice">{"$" + item[0].price}</div>
          </div>

          <br/>

          <div className="itemDescription detailRow">
        
            <p className="itemDetail ">{item[0].description}</p>
          </div>


          <div className="rating">
            <ReactStars count={5}
             onChange={this.handleChange}
              size={24}
              color2={'#ffd700'}
              />
          </div>



          <div className="icon detailRow">
            {socialIcon}
          </div>
        
            <div className="features detailRow">
            <button type="button"className="btn btn-default">{"Qty:" + item[0].quantity}</button>
            <button onClick={this.addItemToCart} type="button"className="btn btn-default" id="targbut">Add To Bag</button>

          </div>
        </div>

      </div>
      )
	}
});

export default ProductPage;

