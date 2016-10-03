import React from 'react'
import HomeBody from './components/homepage/HomeBody'
import ModalElement from './components/homepage/modal'
import BottomFeature from './components/homepage/bottomFeature'

const HomePage = React.createClass({
  render() {
    console.log(this.props)
    return (
      <div>
      <HomeBody />
      <BottomFeature />
      <ModalElement modalState={this.props.modalIsOpen} closeModal={this.props.closeModal}/>
      </div>
    )
  }
})

export default HomePage