import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-618px)]'>
                <ScrollRestoration></ScrollRestoration>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;