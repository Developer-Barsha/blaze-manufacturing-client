import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    const handleMakeAdmin = () => {
        fetch(`https://blaze-manufacturing.herokuapp.com/users/admin/${user?.email}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data?.upsertedId) {
                    toast.success('Successfully made admin!')
                }
            })
    }

    return (

        <tr key={user?._id}>
            <th>{index + 1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{
                user?.role === 'admin' ?
                    <button className='btn btn-xs btn-success'>Admin</button>
                    :
                    <button onClick={handleMakeAdmin} className='btn btn-xs btn-primary'>Make Admin</button>
            }</td>
        </tr>
    );
};

export default UserRow;