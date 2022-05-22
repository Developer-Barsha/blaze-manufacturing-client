import React from 'react';
import { useQuery, QueryClientProvider, useQueryClient } from 'react-query'
import Review from './Review';

const Reviews = () => {
    const queryClient = useQueryClient();

    const reviewws = [
        {
            id: 'item1',
            name: 'Alex',
            image: "https://api.lorem.space/image/face?hash=55350",
            review: 'Very happy to be a part of here. Would definitely recommend this company.'
        },
        {
            id: 'item2',
            name: 'Annie',
            image: "https://api.lorem.space/image/face?hash=55350",
            review: 'Very happy to be a part of here. Would definitely recommend this company.'
        },
        {
            id: 'item3',
            name: 'Brooklyn',
            image: "https://api.lorem.space/image/face?hash=55350",
            review: 'Very happy to be a part of here. Would definitely recommend this company.'
        },
        {
            id: 'item4',
            name: 'Dalton',
            image: "https://api.lorem.space/image/face?hash=55350",
            review: 'Very happy to be a part of here. Would definitely recommend this company.'
        },
    ]
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://blaze-manufacturing.herokuapp.com/reviews').then(res => res.json()));

    // if(isLoading){
    //     return <Loader />
    // }

    return (
        <div>
            <h1 className="text-3xl text-center p-8 font-bold">What our clients say</h1>
            <div className="carousel w-full py-6">
                {reviews?.length > 0 && reviews?.map(review => <Review key={review?._id} review={review} />)}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {reviews?.length > 0 && reviews.map((review, index) => <a key={review?._id} href={`#${review?._id}`} className="btn btn-sm btn-primary rounded-full">{index + 1}</a>)}
            </div>
        </div>
    );
};

export default Reviews;