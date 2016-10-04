import React from 'react'
import HomeBody from './components/homepage/HomeBody'
import ModalElement from './components/homepage/modal'
import BottomFeature from './components/homepage/bottomFeature'

const HomePage = React.createClass({
  render() {
    return (
      <div>
      <HomeBody />
      <BottomFeature scrollLeft={this.props.scrollLeft} scrollRight={this.props.scrollRight} data={this.props.data} bottomI={this.props.bottomFeatureI}/>
      <ModalElement 
        data={this.props.data} 
        filteredList={this.props.filteredList}
        modalState={this.props.modalIsOpen}
        closeModal={this.props.closeModal}/>
      </div>
    )
  }
})

export default HomePage