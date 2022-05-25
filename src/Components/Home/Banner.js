import React from 'react';

const Banner = () => {
    return (
        <div className="hero lg:px-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-11/12">
                <img src="https://images.thdstatic.com/productImages/703a3320-0533-4342-bec5-4e4a99712776/svn/tekton-claw-hammers-30303-64_1000.jpg" className="lg:w-2/5 w-5/6 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="lg:text-5xl text-2xl font-bold">Blaze Manufacturing!</h1>
                    <p className="py-6">We're proud of our ability to provide reliable and affordable metal finishing services to companies. We're one of the eco-friendly metal plating companies and trying to develop metal finishing processes that protect environment.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;