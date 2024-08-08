import React from 'react'
import Header from './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    return (
        <div className='navbar-container'>

          <div className='navbar-sub-container'>

            <div className='burger-menu'>
            <GiHamburgerMenu className='burger-menu-icon'/>
                <p>Department</p>
            </div>

            <div className='navbar'>
                <ul className='anim-nav'>
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Menu</a></li>


                </ul>
            </div>
          </div>
        </div>
    );
};

export default Navbar;