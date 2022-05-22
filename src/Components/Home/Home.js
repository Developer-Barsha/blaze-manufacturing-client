import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <BusinessSummury/>
            <Reviews/>
        </div>
    );
};

export default Home;