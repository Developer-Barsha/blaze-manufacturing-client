import React from 'react';
import { NavLink } from 'react-router-dom';

const Reviews = () => {
    const reviews = [
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

    return (
        <div>
            <div className="carousel w-full py-6">
                {reviews.map(review =>
                    <div id={review?.id} key={review?.id} className="carousel-item w-full items-center justify-center text-center">
                        <div className='lg:w-1/3 p-3 shadow-lg rounded-lg w-full mx-3'>
                            <div className="avatar mx-auto">
                                <div className="w-24 mask mask-hexagon">
                                    <img src={review?.image} alt='' />
                                </div>
                            </div>
                            <h1 className="text-xl font-bold">{review?.name} </h1>
                            <h1 className="">{review?.review} </h1>
                        </div>
                    </div>)}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-sm btn-primary rounded-full">1</a>
                <a href="#item2" className="btn btn-sm btn-primary rounded-full">2</a>
                <a href="#item3" className="btn btn-sm btn-primary rounded-full">3</a>
                <a href="#item4" className="btn btn-sm btn-primary rounded-full">4</a>
            </div>
        </div>
    );
};

export default Reviews;