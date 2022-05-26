import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardMsg, setCardMsg] = useState('');
    const [proccessing, setProccessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, price, name, email } = order;
    console.log(price, order);

    useEffect(() => {
        fetch('https://blaze-manufacturing.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardMsg(error?.message || '');
        setProccessing(true);

        //confrim card paymet intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name : name,
                        email : email
                    },
                },
            },
        );

        if(intentError){
            setCardMsg(<p className='text-error mt-3'>{intentError?.message}</p>);
            setProccessing(false);
        }
        else{
            setCardMsg(<p className='text-success mt-3'>Successfully payment made</p>)
            setTransactionId(paymentIntent?.id);
            console.log(paymentIntent);

            //storing payment info in database
            const payment = {
                tool:_id,
                transactionId:paymentIntent?.id,
            };
            
            fetch('https://blaze-manufacturing.herokuapp.com/orders/'+_id,{
                method:'PATCH',
                headers:{
                    'content-type':'application/json',
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                },
                body:JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                setProccessing(false);
                console.log(data);
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-success btn-sm mt-5' disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {cardMsg && <>{cardMsg} {transactionId}</>}
        </form>
    );
};

export default CheckoutForm;