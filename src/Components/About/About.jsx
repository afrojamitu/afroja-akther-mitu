import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='w-10/12 mx-auto grid md:flex gap-5 md:gap-16 justify-center items-center my-8'>
            <div className=''>
                <img className='shadow-2xl rounded' src="https://i.ibb.co/z7jpLxd/afroja-akther-mitu.jpg" alt="" />
            </div>

            <div className=''>
                <Link to='/about'><h1 className='text-4xl text-orange-400 font-semibold mb-3'>About Me</h1></Link>
                <p className='text-lg text-slate-300 text-justify'>Hello! <br></br>Myself <span className='text-orange-400 font-bold'>Afroja Akther Mitu</span>. Currently I'm studying Diploma in Computer Engineering. I started learning Web Design about 3 years ago. finally I became a <span className='font-bold'>Frontend Web Developer</span>. I find web development as the opportunity to express my creativity by creating responsive & playful websites. I'm a professionally trained Front-End Web Developer. This year my skill's got another partner, which is <span className='text-orange-400'>MERN Stack Development</span>.
                    <br></br>
                    Let me know if you have any curiousity or any kind of issue's relevent to my skill's. I'm ready to help you with that!
                </p>
            </div>

        </div>
    );
};

export default About;