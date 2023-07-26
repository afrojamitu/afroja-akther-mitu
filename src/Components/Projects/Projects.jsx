import React from "react";
import { Link } from 'react-router-dom';
import './Project.css'

const Projects = () => {
    return (
        <div className='md:w-10/12 md:mx-auto mx-10 md:py-10' id='project'>
            <h1 className='text-center text-4xl pb-2 font-semibold text-purple-500' data-aos="fade-up" data-aos-duration="2000">Project's</h1>
            <hr className='w-16 mx-auto pb-3' style={{ borderColor: "purple" }} data-aos="fade-up" data-aos-duration="3000" />

            <div className='grid md:grid-cols-3 gap-10 my-5'>
                {/* project-1 */}
                <div className="space-y-3" data-aos="fade-up" data-aos-duration="2000">
                    <div className="image-wrap h-[150px] md:h-[170px]">
                        <img src="https://i.ibb.co/M1szq70/toy-land.png" alt="" />
                    </div>
                    <h1 className='text-2xl'>Toy Land | <span className="text-lg text-slate-300 font-normal">Full Stack Project</span></h1>
                    <h3 className="text-xl">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, Tailwind CSS, Firebase Authentication, Express.js, MongoDb</span></h3>

                    
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://toy-land-e65d0.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl'>»</span>
                        <Link to='https://github.com/afrojamitu/toy-land' className='text-blue-400 hover:underline'>Source Code</Link>
                    </span>
                </div>
                {/* project-2 */}
                <div className="space-y-3" data-aos="fade-up" data-aos-duration="2000">
                    <div className="image-wrap h-[150px] md:h-[170px]">
                        <img src="https://i.ibb.co/ZHGgVCR/Academix-homepage.png" alt="" />
                    </div>
                    <h1 className='text-2xl'>Academix | <span className="text-lg text-slate-300 font-normal">Full Stack Project</span></h1>
                    <h3 className="text-lg">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, Tailwind CSS, Firebase Authentication, Express.js, MongoDb, AOS Animation</span></h3>

                    
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://academix-ebb0d.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl '>»</span>
                        <Link to='https://github.com/afrojamitu/academix' className='text-blue-400 hover:underline'>Source-code</Link>
                        
                    </span>
                </div>
                {/* project-3 */}
                <div className='space-y-3' data-aos="fade-up" data-aos-duration="2000">
                    <div className="image-wrap h-[150px] md:h-[170px]">
                        <img src="https://i.ibb.co/yqFVLs9/coffee-shop.png" alt="" />
                    </div>
                    <h1 className='text-2xl'>Coffee Shop | <span className="text-lg text-slate-300 font-normal">Full Stack Project</span></h1>
                    <h3 className="text-lg">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, Tailwind CSS, daisyUI, Firebase Authentication, MongoDB</span></h3>

                    
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://espresso-coffee-shop.netlify.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl'>»</span>
                        <Link to='https://github.com/afrojamitu/coffee-shop-client' className='text-blue-400 hover:underline'>Source Code</Link>
                    </span>
                </div>
                {/* project-4 */}
                <div className='space-y-3' data-aos="fade-up" data-aos-duration="2000">
                    <div className="image-wrap h-[150px] md:h-[170px]">
                        <img src="https://i.ibb.co/nQZpWrh/flavor-fiesta.png" alt="" />
                    </div>
                    <h1 className='text-2xl'>Flavor Fiesta | <span className="text-lg text-slate-300 font-normal">Full Stack Project</span></h1>
                    <h3 className="text-lg">Technology: <span className='text-base font-normal text-slate-200'> React.js, Tailwind CSS, Firebase Authentication, Express.js, Node.js, MongoDb</span></h3>

                    
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://flavor-fiesta.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl '>»</span>
                        <Link to='https://github.com/afrojamitu/flavor-fiesta' className='text-blue-400 hover:underline'>Source Code</Link>
                    </span>
                </div>
                
                {/* project-5 */}
                <div className='space-y-3' data-aos="fade-up" data-aos-duration="2000">
                    <div className="image-wrap h-[150px] md:h-[170px]">
                        <img src="https://i.ibb.co/JtLv85p/job-nexus.png" alt="" />
                    </div>
                    <h1 className='text-2xl'>Job Nexus | <span className="text-lg text-slate-300 font-normal">Frontend Project</span></h1>
                    <h3 className="text-lg">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, React Toastify, Tailwind CSS, daisyUI, Localstorage, API, Rechart</span></h3>
                    
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://job-nexus-b2fdf.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl'>»</span>
                        <Link to='https://github.com/afrojamitu/job-nexus' className='text-blue-400 hover:underline'>Source Code</Link>
                    </span>
                </div>
                
            </div>

        </div>
    );
};

export default Projects;