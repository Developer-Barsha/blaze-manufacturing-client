import React from 'react';

const Skills = () => {
    return (
        <div className='grid text-white bg-[#10253F] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-12 px-5 my-10'>

            <div className='flex flex-col gap-2 p-6 text-white'>
                <h4 className='text-2xl pb-2 font-bold text-secondary'>Front-End</h4>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">HTML</p>
                    <progress className="progress bg-white w-56 h-4" value="86" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">CSS</p>
                    <progress className="progress progress-accent bg-white w-56 h-4" value="76" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">JavaScript</p>
                    <progress className="progress bg-white progress-primary w-56 h-4" value="72" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">React</p>
                    <progress className="progress bg-white progress-secondary w-56 h-4" value="80" max="100"></progress>
                </div>
            </div>


            <div className='flex text-white flex-col gap-2 p-6'>
                <h4 className='text-2xl pb-2 font-bold text-secondary'>Backend</h4>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">JavaScript</p>
                    <progress className="progress bg-white progress-primary w-56 h-4" value="60" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">MongdoDB</p>
                    <progress className="progress progress-error bg-white w-56 h-4" value="70" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">Firebase</p>
                    <progress className="progress progress-info bg-white w-56 h-4" value="60" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">Node.js</p>
                    <progress className="progress bg-white progress-secondary w-56 h-4" value="40" max="100"></progress>
                </div>
            </div>


            <div className='flex flex-col gap-2 p-6 text-white'>
                <h4 className='text-2xl pb-2 font-bold text-secondary'>Frameworks</h4>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">Bootstrap</p>
                    <progress className="progress bg-white w-56 h-4" value="86" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">Tailwind</p>
                    <progress className="progress progress-accent bg-white w-56 h-4" value="76" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">Daisyui</p>
                    <progress className="progress bg-white progress-primary w-56 h-4" value="72" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">Express</p>
                    <progress className="progress bg-white progress-secondary w-56 h-4" value="66" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;