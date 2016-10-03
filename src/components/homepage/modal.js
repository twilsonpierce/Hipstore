import React from 'react'
import Modal from 'react-modal';
import ModalInput from './ModalInput';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
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
    return (
      <div>
        <Modal
          isOpen={this.props.modalState}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}>

          <h2 ref="subtitle">Search Results:</h2>
          <ModalInput />
          <button onClick={this.closeModal}>close</button>
          <div>
          </div>
        </Modal>
      </div>
    );
  }
});

export default ModalElement