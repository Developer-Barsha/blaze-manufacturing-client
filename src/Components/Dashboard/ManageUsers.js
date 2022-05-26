import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [modalId, setModalId] = useState('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://blaze-manufacturing.herokuapp.com/users', {
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
        fetch(`https://blaze-manufacturing.herokuapp.com/users/${id}`, {
            method: 'DELETE',
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.upsertedId) {
                    toast.success('Successfully cancelled order!')
                }
            })
    }
    // console.log(orders);
    const modal = <>
        {/* <!-- Put this part before </body> tag-- > */}
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
                {users.length>0 ?
                    <table className="table ml-40 lg:ml-0">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='lg:pl-0 pl-80'>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users?.length > 0 &&
                            users?.map((user, index) => 
                            <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td className='lg:pl-0 pl-80'>{user?.name ? user.name : 'Not set'}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role ? user.role : 'user'}</td>
                                <td>
                                    {
                                        (!user?.paid) &&
                                        // {/* <!-- The button to open modal --> */}
                                        <label htmlFor="confirm-modal" onClick={()=>setModalId(user?._id)} className="btn modal-button btn-sm btn-primary"><i className="fa-solid fa-trash-can"></i></label>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table> : <p className='text-2xl'>No Users</p>
                }
            </div>
        </div >
    );
};

export default ManageUsers;