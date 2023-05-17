import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicroscope } from "react-icons/fa";

const Navbar = () => {
    const navLink = <>
        <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link>Home</Link></li>
        <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link>AllToy</Link></li>
        <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link>MyToy</Link></li>
        <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link>AddToy</Link></li>
        <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link>Blogs</Link></li>
    </>
    return (
        <>
            <div className="navbar max-w-7xl mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost font-bold text-2xl"><span className='text-primary flex items-center mr-2'>Bin<FaMicroscope></FaMicroscope>o</span>Toy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary text-white">Login</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;