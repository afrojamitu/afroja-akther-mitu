import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='md:w-10/12 md:mx-auto mx-10 mb-10 pt-10' id='contact'>
            <h1 className='text-center text-4xl pb-2 font-semibold text-orange-400'>Contact Me</h1>
            <hr className='w-16 mx-auto pb-3' style={{ borderColor: "orange" }}/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center  justify-center'>
                <div className=''>
                    <img className='' src="https://i.ibb.co/4Z9N4d6/Contact-Us-animation.gif" alt="" />
                </div>
                <div className='grid gap-5 w-[90%]'>
                    <input type="text" placeholder="Your Name" className="border w-full p-3 rounded bg-transparent" />
                    <input type="email" placeholder="Email" className="border w-full p-3 rounded bg-transparent" />
                    <input type="text" placeholder="Subject" className="border w-full p-3 rounded bg-transparent" />
                    <textarea name="" id="" cols="30" rows="5"  className="rounded p-3 textarea-bordered text-gray-500 text-base border bg-transparent" placeholder="Type your message here"></textarea>
                    <button className='text-white font-bold py-2 px-3 bg-orange-400  rounded hover:bg-transparent border-2 border-orange-500 hover:text-orange-400' style={{transition: '0.3s'}}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;