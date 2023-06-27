import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='md:w-9/12 md:mx-auto mx-10 mb-10'>
            <Link to='/contact'><h1 className='text-center text-4xl font-semibold my-5'>Contact Me</h1></Link>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                <div className='border-2 rounded-lg'>
                    <img className='rounded-lg' src="https://i.ibb.co/cvXxK82/contact-img.jpg" alt="" />
                </div>
                <div className='grid gap-5'>
                    <input type="text" placeholder="Your Name" className="border w-full p-3 rounded-lg" />
                    <input type="email" placeholder="Email" className="border w-full p-3 rounded-lg" />
                    <textarea className="textarea textarea-bordered" placeholder="Type your message here"></textarea>
                    <button className='text-white font-bold py-2 px-3 bg-red-600 hover:scale-105 rounded-lg' style={{transition: '.5s'}}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;