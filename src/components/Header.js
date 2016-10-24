import React, { Component } from 'react'

class Header extends Component {
  render () {
    const details = this.props.details;
    return (
      <div className="header">
        <img src={details.logoUrl} alt="barLogo" className="img"/>
        Welcome to {details.name}!
      </div>
    );
  }
}

export default Header;
