import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageTools = () => {
    const [users, setUsers] = useState([]);
    const [modalId, setModalId] = useState('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://blaze-manufacturing.herokuapp.com/tools', {
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
            .then(data => setUsers(data))
    }, [users, user, navigate]);

    const handleDelete = id => {
        fetch(`https://blaze-manufacturing.herokuapp.com/tools/${id}`, {
            method: 'DELETE',
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedId) {
                    toast.success('Successfully deleted tool!')
                }
            })
    }

    const modal = <>
        <input type="checkbox" id="confirm-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Delete Tool?</h3>
                <p className="py-4">Are you sure to delete? Remember once deleted, you can't get it back</p>
                <div className="modal-action">
                    <label htmlFor="confirm-modal" onClick={() => handleDelete(modalId)} className='btn btn-error modal-button'>
                        Delete
                    </label>
                    <label htmlFor="confirm-modal" className="btn">Close</label>
                </div>
            </div>
        </div></>

    return (
        <div>
            <div className="flex justify-center h-screen overflow-auto mt-auto">
                {modal}
                {users.length > 0 ?
                    <table className="table border my-auto">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {
                                users?.length > 0 &&
                                users?.map(tool =>
                                    <tr key={tool?._id}>
                                        <th><img src={tool?.image} width={30} alt="" /></th>
                                        <td>{tool?.name ? tool.name : 'Not set'}</td>
                                        <td>{tool?.price}</td>
                                        <td>
                                            {
                                                (!tool?.paid) &&
                                                // {/* <!-- The button to open modal --> */}
                                                <label htmlFor="confirm-modal" onClick={() => setModalId(tool?._id)} className="btn modal-button btn-sm btn-primary"><i className="fa-solid fa-trash-can"></i></label>
                                            }
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table> : <p className='text-2xl'>No Tools</p>
                }
            </div>
        </div >
    );
};

export default ManageTools;