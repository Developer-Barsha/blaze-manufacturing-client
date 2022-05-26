import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [modalId, setModalId] = useState('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://blaze-manufacturing.herokuapp.com/orders/', {
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

    const handleDelete = id => {
        fetch(`https://blaze-manufacturing.herokuapp.com/orders/${id}`, {
            method: 'DELETE',
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedId) {
                    toast.success('Successfully deleted order!')
                }
            })
    }

    const handleUpdateStatus = id => {
        fetch('https://blaze-manufacturing.herokuapp.com/pay-order/' + id, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        ).then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    toast.success('Successfully updated status');
                }
            })
    }

    const modal = <>
        <input type="checkbox" id="confirm-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Delete order?</h3>
                <p className="py-4">Remember once deleted, you can get it back</p>
                <div className="modal-action">
                    <label htmlFor="confirm-modal">
                        <button onClick={() => handleDelete(modalId)} className='btn btn-error'>Delete</button>
                    </label>
                    <label htmlFor="confirm-modal" className="btn">Close</label>
                </div>
            </div>
        </div></>


    return (
        <div>
            <div className="flex justify-center">
                {modal}
                {orders.length > 0 ?
                    <table className="table pl-80 lg:pl-0">
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
                                orders?.length > 0 &&
                                orders?.map((order, index) =>
                                    <tr key={order?._id}>
                                        <th>{index + 1}</th>
                                        <td>{order?.tool}</td>
                                        <td>{order?.email}</td>
                                        <td>{order?.order}</td>
                                        <td>{order?.price}</td>
                                        <td>
                                            {
                                                (order?.price && order?.paid) ?
                                                    (
                                                        (order?.status === 'pending') ?
                                                            <button onClick={() => handleUpdateStatus(order?._id)} className='btn btn-xs btn-info'>Pending</button> :
                                                            <button className='btn btn-xs btn-success'>{order?.status}</button>
                                                    )
                                                    :
                                                    <button className='btn btn-xs btn-error'>Unpaid</button>
                                            }
                                        </td>
                                        <td>
                                            {
                                                (!order?.paid) &&
                                                // {/* <!-- The button to open modal --> */}
                                                <label htmlFor="confirm-modal" onClick={() => setModalId(order?._id)} className="btn modal-button btn-sm btn-primary"><i className="fa-solid fa-trash-can"></i></label>
                                            }
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table> : <p className='text-2xl'>No orders yet</p>
                }
            </div>
        </div >
    );
};

export default ManageOrders;