import React from "react";
import { Link } from 'react-router-dom';
import './Project.css'

const Projects = () => {
    return (
        <div className='md:w-10/12 md:mx-auto mx-10' id='project'>
            <h1 className='text-center text-4xl pb-2 font-semibold text-purple-500'>Project's</h1>
            <hr className='w-16 mx-auto pb-3' style={{ borderColor: "purple" }} />

            <div className='grid md:grid-cols-2 gap-16 my-5'>
                {/* project-1 */}
                <div className="space-y-2">
                    <div className="image-wrap h-[200px] md:h-[270px]">
                        <img src="https://i.ibb.co/M1szq70/toy-land.png" alt="" />
                    </div>
                    <h1 className='text-3xl'>Toy Land | <span className="text-xl text-slate-300 font-normal">Full Stack Project</span></h1>
                    <h3 className="text-xl">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, Tailwind CSS, Firebase Authentication, Express.js, MongoDb</span></h3>

                    <h3 className="text-xl">Features:</h3>
                    <span className='text-slate-200 font-normal'>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>This is a full stack website. In this website a user can sign up for an account with email-password or google</p>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>After logging in user will be able to access some private routes</p>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>Users can save their favorite recipe by the “Add to Favorite” button which is in the chef’s detail page.</p>
                    </span>
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://toy-land-e65d0.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl'>»</span>
                        <Link to='https://github.com/afrojamitu/toy-land' className='text-blue-400 hover:underline'>Client Site</Link>
                        <span className='text-2xl'>»</span>
                        <Link to='https://github.com/afrojamitu/toy-land-server' className='text-blue-400 hover:underline'>Server Site</Link>
                    </span>
                </div>
                {/* project-2 */}
                <div className='space-y-2'>
                    <div className="image-wrap h-[200px] md:h-[270px]">
                        <img src="https://i.ibb.co/nQZpWrh/flavor-fiesta.png" alt="" />
                    </div>
                    <h1 className='text-3xl'>Flavor Fiesta | <span className="text-xl text-slate-300 font-normal">Full Stack Project</span></h1>
                    <h3 className="text-xl">Technology: <span className='text-base font-normal text-slate-200'> React.js, Tailwind CSS, Firebase Authentication, Express.js, Node.js, MongoDb</span></h3>

                    <h3 className="text-xl">Features:</h3>
                    <span className='text-slate-200 font-normal'>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>Users can sign up for an account with email-password or google.</p>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>Before logging in a user is unable to see chef's details, if they try they will be redirected to the login page.</p>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>Users can save their favorite recipe by the “Add to Favorite” button which is in the chef’s detail page</p>
                    </span>
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://flavor-fiesta.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl '>»</span>
                        <Link to='https://github.com/afrojamitu/flavor-fiesta' className='text-blue-400 hover:underline'>Client Site</Link>
                        <span className='text-2xl '>»</span>
                        <Link to='https://github.com/afrojamitu/flavor-fiesta-server' className='text-blue-400 hover:underline'>Server Site</Link>
                    </span>
                </div>
                {/* project-3 */}
                <div className='space-y-2'>
                    <div className="image-wrap h-[200px] md:h-[270px]">
                        <img src="https://i.ibb.co/JtLv85p/job-nexus.png" alt="" />
                    </div>
                    <h1 className='text-3xl'>Job Nexus | <span className="text-xl text-slate-300 font-normal">Frontend Project</span></h1>
                    <h3 className="text-xl">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, Tailwind CSS, daisyUI, Localstorage, API, Rechart</span></h3>

                    <h3 className="text-xl">Features:</h3>
                    <span className='text-slate-200 font-normal'>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>Job Nexus is a Job searching Website designed with React.js</p>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>Users can apply for any job just once. If someone tries to apply again they will see a toast</p>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>Applied Jobs will be stored in localhost so that a user gets their applied jobs even if they close and reopen the browser</p>
                    </span>
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://job-nexus-b2fdf.web.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl'>»</span>
                        <Link to='https://github.com/afrojamitu/job-nexus' className='text-blue-400 hover:underline'>GitHub Repository</Link>
                    </span>
                </div>
                {/* project-4 */}
                <div className='space-y-2'>
                    <div className="image-wrap h-[200px] md:h-[270px]">
                        <img src="https://i.ibb.co/yqFVLs9/coffee-shop.png" alt="" />
                    </div>
                    <h1 className='text-3xl'>Espresso Emporium | <span className="text-xl text-slate-300 font-normal">Full Stack Project</span></h1>
                    <h3 className="text-xl">Technology: <span className='text-base font-normal text-slate-200'>React.js, React-Router, Tailwind CSS, daisyUI, Firebase Authentication, MongoDB</span></h3>

                    <h3 className="text-xl">Features:</h3>
                    <span className='text-slate-200 font-normal'>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>Espresso Emporium is a website designed with React.js and coffee data collects from a database.</p>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>Users can add their coffee to the website to sell them.</p>
                        <p className='flex gap-3'><span className='text-purple-500'>•</span>To add new coffee user have to go through the Add-Coffee page. After adding coffee, they can remove or update it its needed.</p>
                    </span>
                    <span className='flex gap-3 items-center text-lg'>
                        <Link to='https://espresso-coffee-shop.netlify.app/' className='text-blue-400 hover:underline'>Live Preview</Link>
                        <span className='text-2xl'>»</span>
                        <Link to='https://github.com/afrojamitu/coffee-shop-client' className='text-blue-400 hover:underline'>Client Site</Link>
                        <span className='text-2xl'>»</span>
                        <Link to='https://github.com/afrojamitu/coffee-shop-server' className='text-blue-400 hover:underline'>Server Site</Link>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Projects;