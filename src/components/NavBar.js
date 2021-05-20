import React from 'react'
import Logo from '../images/Logo@2x.png'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav__navbar">
            <div className="nav__logo">
                <img alt="logo" src={Logo}></img>
                
            </div>
            <div className="nav__linkcontainer">
                <ul className="nav__navlinks">
                    <li className="ml-5 nav__link pointer">Home</li>
                    <li className="ml-5 nav__link pointer">About me</li>
                    <li className="ml-5 nav__link pointer">Portfolio</li>
                    <li className="ml-5 nav__link pointer">Contact</li>
                </ul>
            </div>
            
        </nav>
    )
}

export default NavBar
