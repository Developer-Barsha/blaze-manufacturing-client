import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Reviews from './Review/Reviews';
import Support from './Support';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BusinessSummury />
            <Reviews />
            <Support/>
        </div>
    );
};

export default Home;