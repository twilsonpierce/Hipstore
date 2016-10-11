import React from 'react'
import Modal from 'react-modal';
import DisplayProduct from './displayProduct';

var ModalElement = React.createClass({


  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  findCategory(filteredItem){

    for(let i = 0; i < this.props.filteredList.length; i++){
    
        var item = this.props.filteredList[i]
        if(item.name === filteredItem){
          return item;
        }
      
    }
  },

  render() {
    let itemDisplay = []
    let cartDisplay = null


    if(this.props.modalState && !this.props.isCart){  
      for (let i = 0; i < 6; i++){
        let item = this.props.filteredList[i]
        if(item === undefined){
          continue;
        }
        itemDisplay.push(<DisplayProduct category={item.category} src={item.image[0]} itemName={item.name} key={i} closeModal={this.props.closeModal}/>)
      }
    } else if(this.props.modalState && this.props.isCart){
      let that = this;
      cartDisplay = this.props.cart.map(function(item,i){
        console.log(item)
        return <DisplayProduct category={item.category} src={item.item.image[0]} itemName={item.item.name} price={item.item.price}key={i} closeModal={that.props.closeModal}/>
      })
    }
    return (
      <div className="content">
        <Modal
          isOpen={this.props.modalState}
          onAfterOpen={this.afterOpenModal}
          className={this.props.isCart ? "cart" : "content"}
          >

          <button className="fa fa-times pull-right" onClick={this.props.closeModal}></button>
          <h2 ref="subtitle">{this.props.isCart ? "Items In Cart:" : "Search Results:"}</h2>
          <div className="modalDirection">

          {cartDisplay ? cartDisplay : itemDisplay}
          </div>

          <div>
          </div>
        </Modal>
      </div>
    );
  }
});

export default ModalElement