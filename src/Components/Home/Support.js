import React from 'react';

const Support = () => {
    return (
        <div className="hero lg:px-16 py-5">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div>
                    <h1 className="text-5xl font-bold text-primary">24/7 Support</h1>
                    <p className="py-6">We're proud of our ability to provide reliable and affordable support to our customers. We have been having good reviews on it. We try our best to provide affordable support to each of our customer so that they never feel stressed about their problem.</p>
                    <button className="btn btn-primary gap-3">Contact Us <i className="fa-solid fa-angles-right"></i></button>
                </div>
                <img src="https://i.pinimg.com/originals/3f/3d/3a/3f3d3ae5efc0673fc33ef8dd145c049a.gif" className="lg:w-2/5 w-full rounded-lg shadow-2xl" alt='' />
                {/* <img src="https://cdn.dribbble.com/users/2375568/screenshots/11461350/media/4c57ccea2f1f22728f2f10f856842035.gif" className="lg:w-2/5 w-full rounded-lg shadow-2xl" alt='' /> */}
            </div>
        </div>
    );
};

export default Support;