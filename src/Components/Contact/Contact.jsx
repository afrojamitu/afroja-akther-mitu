import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='md:w-10/12 md:mx-auto mx-10 mb-10 pt-10' id='contact'>
            <h1 className='text-center text-4xl pb-2 font-semibold text-purple-500'>Contact Me</h1>
            <hr className='w-16 mx-auto pb-8' style={{ borderColor: "purple" }}/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center  justify-center'>
                <div className='hidden md:block'>
                    <img className='' src="https://i.ibb.co/N78h9zg/68747470733a2f2f647265736d612e61692f77702d636f6e74656e742f75706c6f6164732f323032322f30322f456e67696e.gif" alt="" />
                </div>
                <form ref={form} onSubmit={sendEmail} className='grid gap-5 w-[90%] mx-auto'>
                    <input type="text" placeholder="Your Name" className="border w-full p-3 rounded bg-transparent" />
                    <input type="email" placeholder="Email" className="border w-full p-3 rounded bg-transparent" />
                    <input type="text" placeholder="Subject" className="border w-full p-3 rounded bg-transparent" />
                    <textarea name="" id="" cols="30" rows="5"  className="rounded p-3 textarea-bordered text-gray-500 text-base border bg-transparent" placeholder="Type your message here"></textarea>
                    <button className='text-white font-bold py-2 px-3 bg-purple-600  rounded hover:bg-transparent border-2 border-purple-500 hover:text-purple-500' style={{transition: '0.3s'}}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;