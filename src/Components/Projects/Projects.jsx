import React from "react";
import { Link } from 'react-router-dom';
import './Project.css'

const Projects = () => {
    return (
        <div className='md:w-10/12 md:mx-auto mx-10' id='project'>
            <h1 className='text-center text-4xl pb-2 font-semibold text-orange-400'>Project's</h1>
            <hr className='w-16 mx-auto pb-3' style={{ borderColor: "orange" }} />

            <div className='grid md:grid-cols-2 gap-16 my-5'>
                {/* project-1 */}
                <div className="space-y-2" style={{ overflow: 'hidden' }}>
                    <div className="image-wrap">
                        <img src="https://i.ibb.co/M1szq70/toy-land.png" alt="" />
                    </div>
                    <h1 className='text-3xl font-semibold'>Toy Land</h1>
                    <h3 className="text-xl font-semibold">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, Tailwind CSS, Firebase Authentication, Express.js, MongoDb</span></h3>

                    <h3 className="text-xl font-semibold">Features:</h3>
                    <span className='text-slate-200 font-normal'>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>This is a full stack website. In this website a user can sign up for an account with email-password or google</p>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>After logging in user will be able to access some private routes</p>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Users can save their favorite recipe by the “Add to Favorite” button which is in the chef’s detail page.</p>
                    </span>
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://toy-land-e65d0.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl text-orange-400'>»</span>
                        <Link to='https://github.com/afrojamitu/toy-land' className='text-blue-400 hover:underline'>Client Site</Link>
                        <span className='text-2xl text-orange-400'>»</span>
                        <Link to='https://github.com/afrojamitu/toy-land-server' className='text-blue-400 hover:underline'>Server Site</Link>
                    </span>
                </div>
                {/* project-2 */}
                <div className='space-y-2'>
                    <div className="image-wrap">
                        <img src="https://i.ibb.co/nQZpWrh/flavor-fiesta.png" alt="" />
                    </div>
                    <h1 className='text-3xl font-semibold'>Flavor Fiesta</h1>
                    <h3 className="text-xl font-semibold">Technology: <span className='text-base font-normal text-slate-200'> React.js, Tailwind CSS, Firebase Authentication, Express.js, Node.js, MongoDb</span></h3>

                    <h3 className="text-xl font-semibold">Features:</h3>
                    <span className='text-slate-200 font-normal'>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Users can sign up for an account with email-password or google.</p>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Before logging in a user is unable to see chef's details, if they try they will be redirected to the login page.</p>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Users can save their favorite recipe by the “Add to Favorite” button which is in the chef’s detail page</p>
                    </span>
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://flavor-fiesta.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl text-orange-400'>»</span>
                        <Link to='https://github.com/afrojamitu/flavor-fiesta' className='text-blue-400 hover:underline'>Client Site</Link>
                        <span className='text-2xl text-orange-400'>»</span>
                        <Link to='https://github.com/afrojamitu/flavor-fiesta-server' className='text-blue-400 hover:underline'>Server Site</Link>
                    </span>
                </div>
                {/* project-3 */}
                <div className='space-y-2'>
                    <div className="image-wrap">
                        <img src="https://i.ibb.co/JtLv85p/job-nexus.png" alt="" />
                    </div>
                    <h1 className='text-3xl font-semibold'>Job Nexus</h1>
                    <h3 className="text-xl font-semibold">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, Tailwind CSS, daisyUI, Localstorage</span></h3>

                    <h3 className="text-xl font-semibold">Features:</h3>
                    <span className='text-slate-200 font-normal'>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Job Nexus is a Job searching Website designed with React.js</p>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Users can apply for any job just once. If someone tries to apply again they will see a toast</p>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Applied Jobs will be stored in localhost so that a user gets their applied jobs even if they close and reopen the browser</p>
                    </span>
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://job-nexus-b2fdf.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl text-orange-400'>»</span>
                        <Link to='https://github.com/afrojamitu/job-nexus' className='text-blue-400 hover:underline'>GitHub Repository</Link>
                    </span>
                </div>
                {/* project-4 */}
                <div className='space-y-2'>
                    <div className="image-wrap">
                        <img src="https://i.ibb.co/yqFVLs9/coffee-shop.png" alt="" />
                    </div>
                    <h1 className='text-3xl font-semibold'>Espresso Emporium</h1>
                    <h3 className="text-xl font-semibold">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, Tailwind CSS, daisyUI, Localstorage</span></h3>

                    <h3 className="text-xl font-semibold">Features:</h3>
                    <span className='text-slate-200 font-normal'>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Job Nexus is a Job searching Website designed with React.js</p>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Users can apply for any job just once. If someone tries to apply again they will see a toast</p>
                        <p className='flex gap-3'><span className='text-orange-400'>•</span>Applied Jobs will be stored in localhost so that a user gets their applied jobs even if they close and reopen the browser</p>
                    </span>
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://flavor-fiesta.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl text-orange-400'>»</span>
                        <Link to='https://github.com/afrojamitu/flavor-fiesta' className='text-blue-400 hover:underline'>Client Site</Link>
                        <span className='text-2xl text-orange-400'>»</span>
                        <Link to='https://github.com/afrojamitu/flavor-fiesta-server' className='text-blue-400 hover:underline'>Server Site</Link>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Projects;