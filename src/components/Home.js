import React from 'react'

import Navbar from './Navbar/Navbar';
import Menu from './Menu'
import Products from './Products/Products';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Menu />
            <Products />
            
        </div>
    );
};

export default Home;