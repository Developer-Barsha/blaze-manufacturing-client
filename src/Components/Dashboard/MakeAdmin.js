import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const navigate = useNavigate();

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://blaze-manufacturing.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            navigate('/login');
        }
        return res.json()
    }));

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='justify-center h-screen mt-auto items-center flex overflow-auto'>
            <div className="overflow-x-auto w-full">
                <table className="table w-5/12 border overflow-scroll rounded-xl items-center my-auto">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className=''>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users?.length > 0 &&
                            users?.map((user, index) => <UserRow key={user?._id} index={index} user={user} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;