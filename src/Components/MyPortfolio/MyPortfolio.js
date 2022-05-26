import React from 'react';
import Projects from './Projects';
import Skills from './Skills';

const MyPortfolio = () => {

    return (
        <section>
            <div className="hero lg:bg-developer bg-none bg-no-repeat bg-left-top" style={{ backgroundSize: '110px', backgroundPositionY:'50px' }}>
                <div className="hero-content flex-col lg:flex-row-reverse gap-10 px-5 lg:px-20">
                    <img src="https://i.ibb.co/vZ9mDd4/young-woman-freelancer-cafe-with-cup-coffee-gift-b.png" className="lg:w-2/5 w-full rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="lg:text-6xl text-3xl text-primary pb-5 font-bold py-2">Lamia Tabassum Barsha</h1>
                        <p className="font-bold">lamiatabassumbarsha@gmail.com</p>
                        <p className="py-2">Currently Studying : <b className='text-primary'>Class 9 (Science)</b></p>
                        <button className="btn btn-primary">Explore more</button>
                    </div>
                </div>
            </div>

            <Skills/>
            <Projects/>
        </section>
    );
};

export default MyPortfolio;