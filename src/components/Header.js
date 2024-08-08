import React from 'react';
import './Header.css';
import logo from "../Images/logo.png"
import { BiSearch } from "react-icons/bi";



const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo-search-cont'>
                <img src={logo} alt="" />
                </div>
                <div className='search-cont'>
                    <BiSearch className='icon'/>
                    <input type='text' placeholder=''/>
                </div>
        </div>
    );
};

export default Header;

