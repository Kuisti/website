import React from 'react';
import logo from '../../kuisti.png'
import './style.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img alt="logo" src={logo} />
    </div>
  )
}

export default Logo

