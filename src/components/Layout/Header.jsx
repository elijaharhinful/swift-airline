import {React, useState } from 'react';
import Nav from "./Nav";
import Hero from "../HomePage/Hero";

import swift from '../assets/logos/swift-airline.svg';
import menu from "../assets/icons/Menu.svg"

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMobileMenu(){
        setIsOpen(!isOpen);
    }


    const mobileMenuClass = isOpen ? "show__mobile__menu__nav":"hide__mobile__menu__nav";
    return (
        <div className="header">
            <div className="header__nav__mobile">
                <img className="nav__logo__mobile" src={swift} alt="swift airline" />
                <img className="open__icon" src={menu} alt="menu-icon" onClick={toggleMobileMenu} />
                {/* <div className="close__icon"> X </div> */}
            </div>

            <Nav mobileMenuClass= {mobileMenuClass}/>
            <Hero />
        </div>
    )
}

export default Header;