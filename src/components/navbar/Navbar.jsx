import * as React from 'react';
import "./navbar.css";

export default function Navbar() {
  return (
    <div className='navbar-container'>

    <div className='logo'></div>
      <div className='navbar'>
        <div className='navbar-items'>Home</div>
        <div className='navbar-items'>Invite</div>
        <div className='navbar-items'>Pricing</div>
        <div className='navbar-items'>About us</div>
        <div className='navbar-items'>Contact us</div>
      </div>
      <div className='register'><span>Register</span></div>
      <div className='login'>Login</div>
    </div>
  );
}

