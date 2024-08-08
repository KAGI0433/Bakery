import React from 'react'
import "./Menu.css"
import blur from "../Images/blur.jpg"
import { MdDoubleArrow } from "react-icons/md";
const Menu = () => {
    return (
        <div className='main mx-[320px] mt-[25px]'>
            
            <div className='content-section'>
            <h2>MINNIE BAKES</h2>
            <h1>FRESH BAKES</h1>
            <h3>EVERYDAY</h3>
                <div className='shop-now-btn '>
                   <button>Shop now!</button>
                   <MdDoubleArrow />
                </div>
                </div>
                
        </div>
        
    );
};

export default Menu;