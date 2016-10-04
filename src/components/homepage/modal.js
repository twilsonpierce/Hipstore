import React from 'react'
import Modal from 'react-modal';
import DisplayProduct from './displayProduct';

const customStyles = {
  content : {
    top: '10%',
    left: '5%',
    width: '90%',
    right: 'auto',
    bottom: 'auto',
    margin: 'auto'
  }
};

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
      for (let i = 0; i < 4; i++){
        let item = this.props.filteredList[i]
        if(item === undefined){
          continue;
        }
        itemDisplay.push(<DisplayProduct category={item.category} src={item.image[0]} category={item.category} itemName={item.name} key={i}/>)
      }
    }
    return (
      <div>
        <Modal
          isOpen={this.props.modalState}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <button onClick={this.props.closeModal}>close</button>
          <h2 ref="subtitle">Search Results:</h2>
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