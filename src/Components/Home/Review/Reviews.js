import React from 'react';
import { useQuery } from 'react-query'
import Loader from '../../../Shared/Loader';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://blaze-manufacturing.herokuapp.com/reviews').then(res => res.json()));

    if(isLoading){
        return <Loader />
    }

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