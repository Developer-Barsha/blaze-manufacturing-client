import React, { useEffect } from 'react';
import auth from './../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            toast.success('Successfully logged in!');
            return navigate(from, { replace: true });
        }
        if (error) {
            toast.error(error.message);
        }
    }, [user, navigate, from, error])

    return (
        <button onClick={() => signInWithGoogle()} className='w-full mt-3 text-white btn btn-info'>Continue With Google</button>
    );
};

export default Social;