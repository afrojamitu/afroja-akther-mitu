import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <footer className="">
                <div className="flex gap-3">
                    <Link className='shadow-xl w-12 h-12 rounded-full' to='https://www.facebook.com/afrojaakther.mitu.733'><FaFacebook className='text-white p-3 w-12 h-12 bg-gray-700 shadow-lg rounded-full'></FaFacebook></Link>

                    <Link className='shadow-xl w-12 h-12 rounded-full' to='https://github.com/afrojamitu'><FaGithub className='text-white w-12 h-12 p-3 bg-gray-700 shadow-lg rounded-full'></FaGithub></Link>

                    <Link className='shadow-xl w-12 h-12 rounded-full' to='https://www.linkedin.com/in/afroja-mitu/'><FaLinkedin className='text-white p-3 w-12 h-12 bg-gray-700 shadow-lg rounded-full'></FaLinkedin></Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;