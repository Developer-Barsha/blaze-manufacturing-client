import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import NewArrival from './NewArrival';
import Reviews from './Review/Reviews';
import Support from './Support';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BusinessSummury />
            <NewArrival/>
            <Reviews />
            <Support/>
        </div>
    );
};

export default Home;