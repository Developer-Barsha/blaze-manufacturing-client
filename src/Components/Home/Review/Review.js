import React from 'react';

const Review = ({ review }) => {
    const { name, description, rating } = review;

    const getRatings = num => {
        const ratings = [];
        for (let i = 0; i < num; i++) {
            ratings.push(<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />);
        }
        return ratings;
    }

    const ratings = getRatings(rating);

    return (
        <div id={review?._id} className='carousel-item w-full mx-auto justify-center'>

            <div className="lg:w-1/2 p-3 shadow-lg rounded-lg w-full items-center justify-center text-center mx-3">
                <div className="avatar mx-auto">
                    <div className="w-24 mask mask-hexagon">
                        <img src='https://cpng.pikpng.com/pngl/s/417-4172348_testimonial-user-icon-color-clipart.png' alt='' />
                    </div>
                </div>
                <h1 className="text-xl font-bold">{name}</h1>
                <h1 className="">{description} </h1>

                <div className="rating">
                    {ratings.map((rating, index) => <p key={index}>{rating}</p>)}
                </div>
            </div>
        </div >
    );
};

export default Review;