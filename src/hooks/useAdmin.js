import { useState, useEffect } from 'react';
import Loader from '../Shared/Loader';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    if(adminLoading){
        <Loader/>
    }

    useEffect(() => {
        const email = user?.email;
        
        if (email) {
            fetch(`https://blaze-manufacturing.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data?.admin);
                    setAdminLoading(false);
                });
        }
    }, [user]);
    return [admin, adminLoading];
};

export default useAdmin;