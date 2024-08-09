import React from 'react'
import Header from './Header';
import Navbar from './Navbar/Navbar';
import Menu from './Menu'
import Products from './Products/Products';


const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Menu />
            <Products />
            
        </div>
    );
};

export default Home;