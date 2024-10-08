import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Rooot = () => {
    return (
        <div >
        <Navbar></Navbar>,
        <div className='w-full lg:w-[1450px] mx-auto' >
        <Outlet></Outlet>,
        </div>
        
        <Footer></Footer>
        
        </div>
    );
};

export default Rooot;