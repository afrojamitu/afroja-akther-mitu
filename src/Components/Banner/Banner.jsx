import React from 'react';
import { FaDownload, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Banner = () => {

    const handleDownload = () => {
        const fileId = '1stOl5c0PJVaFALo-DngdWsIReQ3ACTl5';
        const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}&response-content-disposition=attachment`;
        window.location.href = downloadLink;
    };

    const [text] = useTypewriter({
        words: ['Jr. Frontend Developer', 'Jr. Web Developer', 'Jr. MERN Stack Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 100
        // onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })

    return (
        <div className='md:w-10/12 mx-10 md:mx-auto grid md:flex items-center justify-between gap-5 text-white opacity-100' id='banner'>
            <div className='md:my-40 mt-32 mb-10 w-full space-y-3'  data-aos="fade-right" data-aos-duration="2000"> 
                <h1 className='text-3xl md:text-5xl font-semibold'><span className='text-3xl '>Hello!</span><br />My name is <span className='text-purple-500 font-semibold'>Afroja Akther Mitu</span></h1>
                <h1 className='text-3xl md:text-4xl font-semibold'>I am a 
                 <span className='text-purple-500 ps-3'>
                {text}
                </span>
                <span className='text-purple-500'><Cursor/></span>
                </h1>
                <h4 className="text-base text-slate-300 pb-1">Let me know if you have any curiousity or any kind of issue's relevent to my skill's. I'm ready to help you with that.</h4>

                <div className='my-5 flex items-center gap-3 md:gap-5' data-aos="fade-up" data-aos-duration="3000">
                    <button onClick={handleDownload} className='bg-purple-600 font-bold rounded px-2 md:px-3 md:py-1 flex items-center md:gap-2 cursor-pointer hover:bg-transparent border-2 border-purple-600 hover:shadow-md hover:shadow-purple-500' style={{ transition: '0.3s' }}>Download Resume <FaDownload /> </button>

                    <Link to='contact' spy={true} smooth={true} offset={-50} duration={1000} className='bg-purple-600 font-bold rounded px-2 md:px-3 md:py-1 flex items-center md:gap-2 cursor-pointer hover:bg-transparent border-2 border-purple-600 hover:shadow-md hover:shadow-purple-500' style={{ transition: '0.3s' }}>Hire Me <FaUserCheck /></Link>
                </div>

            </div>
            <div className='hidden md:block w-[60%] mt-10' data-aos="fade-left" data-aos-duration="2000">
                <img src="https://i.ibb.co/JtMrzMq/frontend-technology.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;