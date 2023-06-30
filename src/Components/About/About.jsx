import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div className='w-10/12 mx-auto grid md:flex gap-5 md:gap-16 justify-center items-center mb-8 mt-8' id='about'>
            <div className=''>
                <img className='shadow-2xl w-full h-full rounded hover:scale-105' style={{transition: '0.4s'}} src="https://i.ibb.co/Vxs8Jcs/afroja-akther-mitu.jpg" alt="Formal picture of Afroja AKther Mitu" />
            </div>

            <div className=''>
                <h1 className='text-4xl text-orange-400 font-semibold mb-1'>About Me</h1>
                <hr className='w-16 pb-3' style={{ borderColor: "orange" }}/>
                <p className='text-lg text-slate-300 text-justify'>Hello! <br></br>Myself <span className='font-bold text-white'>Afroja Akther Mitu</span>. Currently I'm studying Diploma in Computer Engineering. I'm a <span className='font-bold text-white'>Frontend Developer</span>. I started learning Web Design about 3 years ago. I'm a professionally trained Front-End Web Developer. Also I'm a Junior Full Stack Developer with <span className='font-bold text-white'>MERN Stack Development</span> I find web development as the opportunity to express my creativity by creating responsive & playful websites. 
                    <br></br>
                    Let me know if you have any curiousity or any kind of issue's relevent to my skill's. I'm ready to help you with that!
                </p>

                <div className='mt-3'>
                <Link to='contact' spy={true} smooth={true} offset={-50} duration={1000} className='bg-orange-500 font-bold rounded px-3 py-1 cursor-pointer hover:bg-transparent border-2 border-orange-500 hover:text-orange-400' style={{transition: '0.3s'}}>Get In Touch</Link>
                </div>
            </div>

        </div>
    );
};

export default About;