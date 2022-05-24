import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import Loader from './Loader';
import useAdmin from '../hooks/useAdmin';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();
 
    if(loading || adminLoading){
        return <Loader/>
    }

    if(!admin || !user){
        return <Navigate to='/login' state={{from:location}} replace />
    }

    return children;
};
 
export default RequireAdmin;