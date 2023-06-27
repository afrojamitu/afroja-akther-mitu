import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='md:w-10/12 md:mx-auto mx-5 md:py-10 py-5'>
                <footer className="footer p-5 text-white">
                    <div>
                        <img className='w-8 md:w-12' src="https://i.ibb.co/QMpXLmR/logo.png" alt="" />
                        <h1 className='text-3xl text-white'>Afroja Akther Mitu</h1>
                        <h3 className='text-orange-400'>Jr. Frontend Developer</h3>
                    </div>
                    <div>
                        <span className="footer-title">Quick Links</span>
                        <Link to='/about' className="link link-hover">About</Link>
                        <Link to='/resume' className="link link-hover">Resume</Link>
                        <Link to='/projects' className="link link-hover">Projects</Link>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="flex gap-3 items-center justify-center">
                            <Link className='shadow-xl w-12 h-12 rounded-full' to='https://www.facebook.com/afrojaakther.mitu.733'><FaFacebook className='text-white p-3 w-12 h-12 bg-gray-800 shadow-xl rounded-full'></FaFacebook></Link>

                            <Link className='shadow-xl w-12 h-12 rounded-full' to='https://github.com/afrojamitu'><FaGithub className='text-white w-12 h-12 p-3 bg-gray-800 shadow-xl rounded-full'></FaGithub></Link>

                            <Link className='shadow-xl w-12 h-12 rounded-full' to='https://www.linkedin.com/in/afroja-mitu/'><FaLinkedin className='text-white p-3 w-12 h-12 bg-gray-800 shadow-xl rounded-full'></FaLinkedin></Link>
                        </div>
                    </div>
                </footer>
                <p className='text-center text-slate-300 text-lg pt-5'>Copyright © Afroja Akther Mitu</p>
            </div>
        </div>
    );
};

export default Footer;