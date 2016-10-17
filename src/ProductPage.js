import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {SocialIcon} from 'react-social-icons';


const ProductPage = React.createClass({ 
  //Getting the ratings from users 
  getInitialState:function(){
    return({rating: 0,qty:0})
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
  onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
  },
  onAddClick(e){
    var qty = this.state.qty;
    qty++;
    if(qty > 5){
      qty = 5
    }
    this.setState({qty:qty})
  },
  onSubtractClick(e){
     var qty = this.state.qty;
      qty--;
      if(qty < 1){
      qty = 1
    }
    this.setState({qty:qty})
  },
  render: function(){

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
              <hr/>
                <p>Rate It!:</p>
                <StarRatingComponent 
                    name="rate1" 
                    value={this.state.rating}
                    onStarClick={this.onStarClick}
                />
              {this.state.rating ? <span>"Thank You"</span> : null}
          </div>
          <div className="icon detailRow">
            <SocialIcon url="http://facebook.com/" color="#EDD834" style={{ height: 25, width: 25 }} />
            <SocialIcon url="http://twitter.com/" color="#4CD4B0" style={{ height: 25, width: 25 }}/>
            <SocialIcon url="http://pinterest.com/" color="#7D1424" style={{ height: 25, width: 25 }}/>
            <SocialIcon url="http://instagram.com/"color="#F24D16" style={{ height: 25, width: 25 }} />
          </div>
        
            <div className="features detailRow">

            <button onClick={this.onSubtractClick}type="button" className="btn btn-default" id="subtract">-</button>
            <h4>{this.state.qty}</h4>
            <button onClick={this.onAddClick}type="button" className="btn btn-default" id="add">+</button>
            <button onClick={this.addItemToCart} type="button"className="btn btn-default" id="targbut">Add To Bag</button>
          </div>
          <hr/>
        </div>

      </div>
      )
  }
});

export default ProductPage;

