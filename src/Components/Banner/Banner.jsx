import React from 'react';
import { FaDownload, FaUserCheck } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='md:mb-16'>
            <div className='w-10/12 mx-auto grid md:flex items-center justify-between gap-5 text-white py-20'>
                <div>
                    <p className='text-4xl'>Hello!<br/>My name is <span className='text-orange-400'>Afroja Akther Mitu</span></p>
                    <p className='text-4xl'>I am a <span className='text-orange-400'>Jr. Web Developer</span></p>

                    <div className='my-5 flex items-center gap-5'>
                        <a className='bg-orange-500 font-bold rounded px-3 py-1 flex items-center gap-2 cursor-pointer'>Download Resume <FaDownload/> </a>

                        <a className='bg-orange-500 font-bold rounded px-3 py-1 flex items-center gap-2 cursor-pointer'>Hire Me <FaUserCheck/></a>
                    </div>

                </div>

                <div className='hidden md:block'>
                    <img className='w-96' src="https://i.ibb.co/JBHKbdD/web-development-1-1-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;