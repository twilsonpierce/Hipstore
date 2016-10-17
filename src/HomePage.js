import React from 'react'
import HomeBody from './components/homepage/HomeBody'
import BottomFeature from './components/homepage/bottomFeature'

const HomePage = React.createClass({
  render() {
    return (
      <div className="overFlowFix">
        <div className="homeShape">XXXXXX</div>
        <HomeBody />
        <BottomFeature scrollLeft={this.props.scrollLeft} scrollRight={this.props.scrollRight} data={this.props.data} bottomI={this.props.bottomFeatureI}/>
      </div>
    )
  }
})

export default HomePage