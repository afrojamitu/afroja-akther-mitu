import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div className='my-8 mx-10 md:w-9/12 md:mx-auto'>
            <Link to='/skills'><h1 className='text-center text-4xl font-semibold my-5'>Skill's</h1></Link>

            <div className='grid md:grid-cols-2 gap-10 my-8 items-center justify-between'>
                <div className='grid gap-2'>
                    <span className='font-bold'>HTML <progress className="progress w-full" value="95" max="100"></progress></span>
                    <span className='font-bold'>CSS <progress className="progress w-full" value="90" max="100"></progress></span>
                    <span className='font-bold'>Tailwind CSS <progress className="progress w-full" value="95" max="100"></progress></span>
                    <span className='font-bold'>Bootstrap <progress className="progress w-full" value="80" max="100"></progress></span>
                    <span className='font-bold'>Javascript <progress className="progress w-full" value="85" max="100"></progress></span>
                    <span className='font-bold'>React.js <progress className="progress w-full" value="94" max="100"></progress></span>
                    
                </div>

                <div>
                    <img className='w-full rounded-lg' src="https://i.ibb.co/6tvzFj0/skills.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills;