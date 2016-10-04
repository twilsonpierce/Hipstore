import React from 'react'
import Modal from 'react-modal';
import DisplayProduct from './displayProduct';

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '20%',
    width                 : '30%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var ModalElement = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    // let category = null
    // let filteredItem = this.props.data.map(function(cate){
    //   cate.map(function(item){
    //     if(item === )
    //   })
    // })

    let itemDisplay = []
    for (let i = 0; i < 6; i++){
      itemDisplay.push(<DisplayProduct itemName={this.props.filteredList[i]} key={i}/>)
    }
    return (
      <div>
        <Modal
          isOpen={this.props.modalState}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}>

          <h2 ref="subtitle">Search Results:</h2>
          <div className="modalDirection">
          {itemDisplay}
          </div>
          <button onClick={this.closeModal}>close</button>
          <div>
          </div>
        </Modal>
      </div>
    );
  }
});

export default ModalElement