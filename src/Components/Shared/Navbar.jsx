import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navlinks = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-orange-400 rounded" : ""} ><span className='flex items-center gap-2 text-white px-3 py-1'>Home</span></NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "border-b-2 border-orange-400 rounded" : ""} ><span className='flex items-center gap-2 text-white px-3 py-1'>About</span></NavLink>

        <NavLink to="/resume" className={({ isActive }) => isActive ? "border-b-2 border-orange-400 rounded" : ""} ><span className='flex items-center gap-2 text-white px-3 py-1'>Resume</span></NavLink>

        <NavLink to="/project" className={({ isActive }) => isActive ? "border-b-2 border-orange-400 rounded" : ""} ><span className='flex items-center gap-2 text-white px-3 py-1'>Project</span></NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "border-b-2 border-orange-400 rounded" : ""} ><span className='flex items-center gap-2 text-white px-3 py-1'>Contact</span></NavLink>
    </>

    return (
        <div className='bg-black'>
            <div className="navbar md:w-10/12 md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    
                    <img className='w-10 md:w-12' src="https://i.ibb.co/QMpXLmR/logo.png" alt="" />
                    <h1 className='text-xl md:text-3xl text-white'>Afroja Mitu</h1>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu gap-3 menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Navbar;