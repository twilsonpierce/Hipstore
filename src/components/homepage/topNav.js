import React from 'react'
import {Link} from 'react-router'
import {Sticky} from 'react-sticky';
import TopNavBack from './topNavBack';

const TopNav = React.createClass({
  render(){
    let titleBox = this.props.homepage ? <TopNavBack/> : null
    return (
      <div className={"topNav " + (this.props.homepage ? "homeTitle" : null)}>
        {titleBox}
        <div className="logo">
          <Sticky className="mainLogo" stickyClassName="stickyLogo" >
            <Link to="/">
              <img alt="hipstore_logo" src={require("../../images/hipstore.png")} />
            </Link>
          </Sticky>
        </div>
      </div>
    )
  }
})

export default TopNav
