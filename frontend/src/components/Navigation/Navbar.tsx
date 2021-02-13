import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='navbar-title'>Home</div>
            <div className='navbar-title'>About</div>
            <div className='navbar-title'>Shop</div>
            <div className='navbar-title'>Search</div>
            <div className='navbar-title'>Sales</div>
            <div className='navbar-title'>Blog</div>
            <div className='logo-row'>
            <img src={logo} className='navbar-logo'/>
            </div>
        </div>
    );
};

export default Navbar;
