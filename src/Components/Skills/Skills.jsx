import React from 'react';

const Skills = () => {
    return (
        <div className='my-10 mx-10 md:w-10/12 md:mx-auto pt-8' id='skill'>
            <h1 className='text-center text-purple-500 text-4xl font-semibold pb-2' data-aos="fade-up" data-aos-duration="2000">My Skill's</h1>
            <hr className='w-16 mx-auto pb-3' style={{ borderColor: "purple" }} data-aos="fade-up" data-aos-duration="3000" />

            <div className='grid grid-cols-4 md:grid-cols-8 gap-5 my-8 justify-center justify-items-center items-center'>

                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/WtFJ8yX/html-logo.png" alt="" />
                    <p className='text-sm'>HTML5</p>
                </div>

                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/VxhC00P/css-logo.png" alt="" />
                    <p className='text-sm'>CSS3</p>
                </div>

                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/41stXjM/tailwind-logo.png" alt="" />
                    <p className='text-sm'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/bKcCvgX/Bootstrap-logo.png" alt="" />
                    <p className='text-sm'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/5Fz5yB9/Java-Script-logo.png" alt="" />
                    <p className='text-sm'>Javascript</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/XW05WhL/react-logo.png" alt="" />
                    <p className='text-sm'>React.js</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/jZp8FfW/express-js-logo.png" alt="" />
                    <p className='text-sm'>Express.js</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/JvHSQzh/node-js-logo.png" alt="" />
                    <p className='text-sm'>Node.js</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/8xGHXPc/mongodb-logo.png" alt="" />
                    <p className='text-sm'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/CHvKXSC/github-logo.png" alt="" />
                    <p className='text-sm'>GitHub</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/X7Szmnj/netlify-logo.png" alt="" />
                    <p className='text-sm'>Netlify</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/3WrQSvn/vercel-logo.png" alt="" />
                    <p className='text-sm'>Vercel</p>
                </div>
                <div className='shadow-md shadow-purple-300 p-2 bg-slate-950 rounded text-center space-y-2' data-aos="fade-up" data-aos-duration="2000">
                    <img className='w-16 h-16' src="https://i.ibb.co/R9QzFJ3/196925526-b6f89f3e-0abb-4ea2-842b-371487196463.png" alt="" />
                    <p className='text-sm'>Firebase</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;