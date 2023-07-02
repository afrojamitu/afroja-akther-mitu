import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8odzqxf',
            'template_idlyz1h',
            form.current, 'jykAzkj3dptbbUKmV')
            .then((result) => {
                if (result.text === 'OK') {
                    toast.success('Message Sent Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                        e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='md:w-10/12 md:mx-auto mx-10 md:mb-10 pt-10' id='contact'>
            <h1 className='text-center text-4xl pb-2 font-semibold text-purple-500'  data-aos="fade-up" data-aos-duration="2000">Contact Me</h1>
            <hr className='w-16 mx-auto pb-8' style={{ borderColor: "purple" }} data-aos="fade-up" data-aos-duration="3000" />
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center  justify-center'>
                <div className='hidden md:block' data-aos="fade-up" data-aos-duration="2000">
                    <img className='' src="https://i.ibb.co/N78h9zg/68747470733a2f2f647265736d612e61692f77702d636f6e74656e742f75706c6f6164732f323032322f30322f456e67696e.gif" alt="" />
                </div>
                <form ref={form} onSubmit={sendEmail} className='grid gap-5 w-[90%] mx-auto shadow-md p-5 rounded-md' data-aos="fade-up" data-aos-duration="2000">
                    <input type="text" name='name' placeholder="Your Name" className="border border-purple-500 shadow-md shadow-purple-500 w-full px-3 py-2 rounded-md bg-transparent" required/>

                    <input type="email" name='email' placeholder="Email" className="border border-purple-500 shadow-md shadow-purple-500 w-full px-3 py-2 rounded-md bg-transparent" required/>

                    <input type="text" name='subject' placeholder="Subject" className="border border-purple-500 shadow-md shadow-purple-500 w-full px-3 py-2 rounded-md bg-transparent" required/>

                    <textarea name="message" id="" cols="30" rows="4" className="border border-purple-500 shadow-md shadow-purple-500 w-full p-3 rounded-md bg-transparent" placeholder="Type your message here" required></textarea>

                    <button className='text-white font-bold py-2 w-full bg-purple-600  rounded-md hover:bg-transparent border-2 border-purple-600  hover:shadow-md hover:shadow-purple-500 flex items-center gap-2 justify-center' required style={{ transition: '0.3s' }}>Send Message<FaTelegramPlane/></button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Contact;