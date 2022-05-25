import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loader from './../../Shared/Loader';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1OENEltALjRpnEVtkASdFYFBCLnVtJMgLqocDqywWhxtfQGa5mxPWJGWtgnhtiU2eeB0t2kmeQs6MW692q3ZRY00TOmB2VPx');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () =>
        fetch(url,
            { headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` } })
            .then(res => res.json()))

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className='py-5'>
            <div className="card w-96 bg-base-100 max-w-sm shadow-xl my-10">
                <div className="card-body">
                    <h2 className="font-bold text-primary">Hello there, {order?.name}!</h2>
                    <h2 className="card-title">Pay for : {order?.tool}</h2>
                    <p>Total Cost: $ {order?.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;