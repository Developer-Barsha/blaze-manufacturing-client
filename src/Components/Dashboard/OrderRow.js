import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ order, index }) => {
    // const handlePay = () => {
    //     fetch(`https://blaze-manufacturing.herokuapp.com/orders/admin/${order?.email}`, {
    //         method: 'PUT',
    //         headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data?.upsertedId) {
    //                 toast.success('Successfully made admin!')
    //             }
    //         })
    // }

    const handleDelete = () => {
        fetch(`https://blaze-manufacturing.herokuapp.com/orders/admin/${order?._id}`, {
            method: 'PUT',
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.upsertedId) {
                    toast.success('Successfully made admin!')
                }
            })
    }

    return (

        <tr key={order?._id}>
            <th>{index + 1}</th>
            <td>{order?.tool}</td>
            <td>{order?.email}</td>
            <td>{order?.order}</td>
            <td>{order?.price}</td>
            <td>{
                order?.paid ?
                    <button className='btn btn-xs btn-success'>Paid</button>
                    :
                    <button className='btn btn-xs btn-primary'>Pay</button>
            }</td>
            <td><button onClick={handleDelete} className='text-xl'><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
    );
};

export default OrderRow;