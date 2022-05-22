import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query'
import Banner from './Banner';
import BusinessSummury from './BusinessSummury';
import Reviews from './Review/Reviews';
import Tools from './Tools';

const Home = () => {
    const queryClient = new QueryClient();

    return (
        <div>
            <Banner />
            <Tools />
            <BusinessSummury />
            <QueryClientProvider client={queryClient}>
                <Reviews />
            </QueryClientProvider>
        </div>
    );
};

export default Home;