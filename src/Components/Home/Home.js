import React from 'react';
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BusinessSummury/>
            <Reviews/>
        </div>
    );
};

export default Home;