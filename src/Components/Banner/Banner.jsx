import React from 'react';
import { FaDownload, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-scroll';
// import './Banner.css'

const Banner = () => {

    const handleDownload = () => {
        const fileId = '1stOl5c0PJVaFALo-DngdWsIReQ3ACTl5';
        const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}&response-content-disposition=attachment`;
        window.location.href = downloadLink;
    };


    return (
        <div className='md:w-10/12 mx-10 md:mx-auto grid md:flex items-center justify-between gap-5 text-white opacity-100' id='banner'>
            <div className='md:my-40 mt-32 mb-10'>
                <p className='text-3xl md:text-5xl font-bold'>Hello!<br />My name is <span className='text-purple-500 font-bold'>Afroja Akther Mitu</span></p>
                <p className='text-3xl md:text-5xl font-bold'>I am a <span className='text-purple-500'>Jr. Web Developer</span></p>

                <div className='my-5 flex items-center gap-5'>
                    <button onClick={handleDownload} className='bg-purple-600 font-bold rounded px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-transparent border-2 border-purple-500 hover:text-purple-500' style={{ transition: '0.3s' }}>Download Resume <FaDownload /> </button>

                    <Link to='contact' spy={true} smooth={true} offset={-50} duration={1000} className='bg-purple-600 font-bold rounded px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-transparent border-2 border-purple-500 hover:text-purple-500' style={{ transition: '0.3s' }}>Hire Me <FaUserCheck /></Link>
                </div>

            </div>
            <div className='hidden md:block w-[45%] mt-10'>
                <img src="https://i.ibb.co/JtMrzMq/frontend-technology.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;