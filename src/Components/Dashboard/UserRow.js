import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const handleMakeAdmin = () => {
        fetch(`https://blaze-manufacturing.herokuapp.com/users/admin/${user?.email}`, {
            method: 'PUT',
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount >0) {
                    toast.success('Successfully made admin!');
                    refetch();
                }
            })
    }

    return (

        <tr key={user?._id}>
            <th>{index + 1}</th>
            <td>{user?.name || 'Not Set' }</td>
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