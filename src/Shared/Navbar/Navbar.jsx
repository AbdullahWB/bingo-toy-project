import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaMicroscope } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, singOut } = useContext(AuthContext);

    const handleSingOut = () => {
        singOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    const navLink = <>
        <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link>Home</Link></li>
        <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link to='/allToys'>AllToy</Link></li>
        {
            user ? <>
                <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link to='/myToys'>MyToy</Link></li>
                <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link to='/addToy'>AddToy</Link></li>
            </> : ''
        }
        <li className='hover:text-white font-semibold hover:bg-primary rounded-lg '><Link to='/blog'>Blogs</Link></li>
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
                    <div className="w-10 rounded-full mr-5">
                        <Link to='/profile'>
                            {
                                user && <img className='w-full h-full border border-primary rounded-full' title={user.displayName} src={user?.photoURL ? user.photoURL : "https://w7.pngwing.com/pngs/753/432/png-transparent-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-people-thumbnail.png"} />
                            }
                        </Link>
                    </div>
                    {
                        user ? <Link to="/" onClick={handleSingOut} className="btn btn-primary text-white">LogOut</Link> : <Link to="/login" className="btn btn-primary text-white">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;