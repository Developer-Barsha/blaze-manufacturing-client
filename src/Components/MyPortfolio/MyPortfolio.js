import React from 'react';

const MyPortfolio = () => {
    return (
        <section>
            <div className="hero lg:px-16">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src="https://bloomy-captures.netlify.app/static/media/dream.86c47298e8fea3835515.png" className="lg:w-2/5 w-full rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="lg:text-6xl text-3xl text-primary pb-5 font-bold py-2">Lamia Tabassum Barsha</h1>
                        <p className="font-bold">lamiatabassumbarsha@gmail.com</p>
                        <p className="py-2">Currently Studying : <b className='text-primary'>Class 9 (Science)</b></p>
                        <button className="btn btn-primary">Explore more</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2 p-6'>

                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">HTML</p>
                    <progress className="progress w-56 h-4" value="86" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">CSS</p>
                    <progress className="progress progress-accent w-56 h-4" value="76" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">JavaScript</p>
                    <progress className="progress progress-primary w-60 h-4" value="56" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">Express</p>
                    <progress className="progress progress-secondary w-56 h-4" value="56" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">Firebase</p>
                    <progress className="progress progress-success w-56 h-4" value="56" max="100"></progress>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-bold w-24">MongdoDB</p>
                    <progress className="progress progress-info w-56 h-4" value="36" max="100"></progress>
                </div>
            </div>
        </section>
    );
};

export default MyPortfolio;