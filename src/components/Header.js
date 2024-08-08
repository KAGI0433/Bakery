import React from 'react';
import './Header.css';
import logo from "../Images/logo.png"
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo-search-cont'>
                <img src={logo} alt="" />
                </div>
                <div className='search-cont'>
                    <BiSearchAlt className='icon'/>
                    <input type='text' placeholder='Search cakes'/>
                </div>
                
                <div className='social-icon-cont'>
                    <div className='headerIcon'>
                        <BiCart className='heardeIcon-size'/>
                    </div>
                    <div className='headerIcon'>
                    <BiUser className='heardeIcon-size' />
                    </div>
                    <div className='headerIcon'>
                        <BiHeart className='heardeIcon-size' />
                        </div>

                </div>
               
        </div>
    );
};

export default Header;



