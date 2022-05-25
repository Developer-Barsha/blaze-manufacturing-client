import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderRow = ({ order, index, setModalId }) => {
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


    return (

        <tr>
            <th>{index + 1}</th>
            <td>{order?.tool}</td>
            <td>{order?.email}</td>
            <td>{order?.order}</td>
            <td>{order?.price}</td>
            <td>{
                (order?.price && order?.paid) ?
                    <button className='btn btn-xs btn-success'>Paid</button>
                    :
                    <Link to={`/dashboard/payment/${order?._id}`} className='btn btn-xs btn-primary'>Pay</Link>
            }</td>
            <td>
                {
                    (!order?.paid) &&
                    // {/* <!-- The button to open modal --> */}
                    <label htmlFor="confirm-modal" onClick={setModalId(order?._id)} className="btn modal-button btn-sm btn-primary"><i className="fa-solid fa-trash-can"></i></label>
                }
            </td>
        </tr>
    );
};

export default OrderRow;