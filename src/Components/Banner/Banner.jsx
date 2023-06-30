import React from 'react';
import { FaDownload, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Banner = () => {

    const handleDownload = () => {
        const fileId = '1stOl5c0PJVaFALo-DngdWsIReQ3ACTl5';
        const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}&response-content-disposition=attachment`;
        window.location.href = downloadLink;
      };
    

    return (
        <div id='banner'>
            <div className='md:mb-16' >
            <div className='w-10/12 mx-auto grid md:flex items-center justify-between gap-5 text-white py-32'>
                <div>
                    <p className='text-5xl'>Hello!<br/>My name is <span className='text-orange-400'>Afroja Akther Mitu</span></p>
                    <p className='text-5xl'>I am a <span className='text-orange-400'>Jr. Web Developer</span></p>

                    <div className='my-5 flex items-center gap-5'>
                        <button onClick={handleDownload} className='bg-orange-500 font-bold rounded px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-transparent border-2 border-orange-500 hover:text-orange-400' style={{transition: '0.3s'}}>Download Resume <FaDownload/> </button>

                        <Link to='contact' spy={true} smooth={true} offset={-50} duration={1000} className='bg-orange-500 font-bold rounded px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-transparent border-2 border-orange-500 hover:text-orange-400' style={{transition: '0.3s'}}>Hire Me <FaUserCheck/></Link>
                    </div>

                </div>

                <div className='hidden md:block'>
                    <img className='w-96' src="https://i.ibb.co/JBHKbdD/web-development-1-1-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;