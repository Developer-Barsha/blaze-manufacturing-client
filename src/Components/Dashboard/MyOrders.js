import React, { useState, useEffect } from 'react';
import OrderRow from './OrderRow';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/orders/'+user?.email, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        ).then(res => {
            if (res.status === 401 || res.status === 403) {
                navigate('/login');
            }
            return res.json();
        })
            .then(data => setOrders(data))
    }, [orders, user, navigate]);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full border rounded-xl">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders?.length>0 &&
                            orders?.map((order, index) => <OrderRow key={order?._id} index={index} order={order} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;