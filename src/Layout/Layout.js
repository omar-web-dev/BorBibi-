import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/ShearedPages/Footer';
import Navbar from '../Pages/ShearedPages/Navbar';

const Layout = () => {
    return (
        <>
         <Navbar/>
         <Outlet/>
         <Footer/>
        </>
    );
};

export default Layout;