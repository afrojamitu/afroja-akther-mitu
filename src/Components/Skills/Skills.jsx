import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div className='my-8 mx-10 md:w-10/12 md:mx-auto'>
            <Link to='/skills'><h1 className='text-center text-4xl font-semibold my-5'>Skill's</h1></Link>

            <div className='grid grid-cols-3 md:grid-cols-8 mx-auto gap-5 my-8 justify-center justify-items-center items-center'>
                <img className='w-20 h-20' src="https://i.ibb.co/WtFJ8yX/html-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/VxhC00P/css-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/41stXjM/tailwind-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/bKcCvgX/Bootstrap-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/5Fz5yB9/Java-Script-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/XW05WhL/react-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/jZp8FfW/express-js-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/JvHSQzh/node-js-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/8xGHXPc/mongodb-logo.png" alt="" />
                <img className='w-24 h-24' src="https://i.ibb.co/CHvKXSC/github-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/X7Szmnj/netlify-logo.png" alt="" />
                <img className='w-20 h-20' src="https://i.ibb.co/3WrQSvn/vercel-logo.png" alt="" />
            </div>
        </div>
    );
};

export default Skills;