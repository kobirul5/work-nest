import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import LogoutBtn from '../../../components/LogoutBtn';
import './navbar.css'
import { FaPeopleArrows } from 'react-icons/fa';

const Navbar = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className="navbar bg-gray-950 text-white backdrop-blur-lg fixed z-10 bg-opacity-30 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 gap-2 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink className="" to="/">Home</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl pl-0 uppercase">Work Nest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user ? <>
                     <NavLink to="/auth/login" >Login</NavLink>
                     <NavLink to="/auth/signUp" className="ml-4" >Sign Up</NavLink>
                    </>:
                     <div className="dropdown dropdown-end">
                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                         <div className="w-10 rounded-full">
                             <img
                                 alt={user?.name}
                                 src={user?.photoURL}/>
                         </div>
                     </div>
                     <ul
                         tabIndex={0}
                         className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                         <li><LogoutBtn></LogoutBtn></li>
                     </ul>
                 </div>

                }
               
                {/* logged in */}
               
            </div>
        </div>
    );
};

export default Navbar;