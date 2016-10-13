import React from 'react'
import ReactDOM from 'react-dom'

const TopNavBack = React.createClass({
  
  
  blinkingIcon () {
    var that = this

    setTimeout(function() {
      setInterval(() => {
        ReactDOM.findDOMNode(that.refs["navChev"]).style.opacity = 0;
      },1500)
    },750)

    setInterval(() => {
      ReactDOM.findDOMNode(this.refs["navChev"]).style.opacity = .7;
    },1500)
  
  },
  componentDidUpdate() {
    if (ReactDOM.findDOMNode(this.refs["navChev"])){
      //this.blinkingIcon()
    }
  },
  render(){
    return (
        <div className="titleCont">
          <article className="titleBox">
            <h1>bordem is for lazy people with no imagination.</h1>
          </article>
          <div className="navCircle">
            <i className="fa fa-chevron-down" ref="navChev" aria-hidden="true"></i>
          </div>
        </div>
      ) 
  }
})

export default TopNavBack
