import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from './../../firebase.init';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://blaze-manufacturing.herokuapp.com/users',
        {headers:{authorization:`Bearer ${localStorage.getItem('accessToken')}`}}
        ).then(res => res.json()).then(data => setUsers(data))
    }, [users]);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full border rounded-xl">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user, index) => <UserRow key={user?._id} index={index} user={user} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;