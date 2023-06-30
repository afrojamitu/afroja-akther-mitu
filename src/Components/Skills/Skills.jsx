import React from 'react';

const Skills = () => {
    return (
        <div >
            <div className='my-10 mx-10 md:w-10/12 md:mx-auto pt-8' id='skill'>
            <h1 className='text-center text-orange-400 text-4xl font-semibold pb-2'>My Skill's</h1>
            <hr className='w-16 mx-auto pb-3' style={{ borderColor: "orange" }}/>

            <div className='grid grid-cols-3 md:grid-cols-8 gap-5 my-8 justify-center justify-items-center items-center'>
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/WtFJ8yX/html-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/VxhC00P/css-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/41stXjM/tailwind-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/bKcCvgX/Bootstrap-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/5Fz5yB9/Java-Script-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/XW05WhL/react-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/jZp8FfW/express-js-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/JvHSQzh/node-js-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/8xGHXPc/mongodb-logo.png" alt="" />
                <img className='w-24 h-24 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/CHvKXSC/github-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/X7Szmnj/netlify-logo.png" alt="" />
                <img className='w-20 h-20 hover:scale-125' style={{transition: '0.4s'}} src="https://i.ibb.co/3WrQSvn/vercel-logo.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Skills;