import React from 'react';
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {

    const navlinks = <>
        <Link to="banner" spy={true} smooth={true} offset={100} duration={500}  className='flex items-center gap-2 text-white px-3 py-1 cursor-pointer'>Home</Link>

        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}  className='flex items-center gap-2 text-white px-3 py-1 cursor-pointer'>About</Link>

        <Link to="skill" spy={true} smooth={true} offset={-70} duration={500}  className='flex items-center gap-2 text-white px-3 py-1 cursor-pointer'>Skill's</Link>

        <Link to="project" spy={true} smooth={true} offset={-100} duration={500}  className='flex items-center gap-2 text-white px-3 py-1 cursor-pointer'>Project</Link>

        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}  className='flex items-center gap-2 text-white px-3 py-1 cursor-pointer'>Contact</Link>
    </>

    return (
        <div className='bg-black'>
            <div className="navbar fixed z-10 mx-auto bg-black md:px-24">
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
                    <ul className="menu gap-3 menu-horizontal px-1 nav-menu">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Navbar;