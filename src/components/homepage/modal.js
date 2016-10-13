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

    if(this.props.modalState){  
      for (let i = 0; i < 6; i++){
        let item = this.props.filteredList[i]
        if(item === undefined){
          continue;
        }
        itemDisplay.push(<DisplayProduct category={item.category} src={item.image[0]} itemName={item.name} key={i} closeModal={this.props.closeModal}/>)
      }
    }

    return (
      <div className="modalContent">
        <Modal
          isOpen={this.props.modalState}
          onAfterOpen={this.afterOpenModal}
          className="modalContent"
          >

          <button className="fa fa-times pull-right" onClick={this.props.closeModal}></button>
          {this.props.isCart ? null: <h2 ref="subtitle">Search Results:"</h2>}
          <div className="modalDirection">

          {itemDisplay}

          </div>

          <div>
          </div>
        </Modal>
      </div>
    );
  }
});

export default ModalElement