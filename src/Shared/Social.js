import React, { useEffect } from 'react';
import auth from './../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../hooks/useToken';
import Loader from './Loader';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user?.user);
    console.log(user?.user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    console.log(user?.user?.email, localStorage.getItem('accessToken'));

    useEffect(() => {
        if (token) {
            toast.success('Successfully logged in!');
            console.log('INside social login',localStorage.getItem('accessToken'));
            return navigate(from, { replace: true });
        }
        if (error) {
            toast.error(error.message);
        }
    }, [user, navigate, from, error])

    if(loading){
        return <Loader/>
    }

    return (
        <button onClick={() => signInWithGoogle()} className='w-full mt-3 text-white btn btn-info'>Continue With Google</button>
    );
};

export default Social;