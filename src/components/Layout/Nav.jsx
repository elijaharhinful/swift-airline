import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swift from '../assets/logos/swift-airline.svg';
import menu from "../assets/icons/Menu.svg"


function Nav (props) {


    return (
        <nav className={`${props.mobileMenuClass}`}>
            <div className="nav__logo">
                <img src={swift} alt="swift-airline" />
            </div>
            <div className="nav__links">
                <ul>
                    <li><Link  className="link active" to="/" >Home</Link></li>
                    <li><Link className="link" to="/about" >About</Link></li>
                    <li><Link className="link" to="/booking" >Bookings</Link></li>
                    <li><Link className="link" to="/services" >Services</Link></li>
                </ul>
            </div>
            <div className="nav__contact button">
                <Link className='contact__button' to="/contact">CONTACT US</Link>
            </div>
            
        </nav>
    )
}

export default Nav;