import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from './../../Shared/Loader';
import Social from '../../Shared/Social';
import useToken from '../../hooks/useToken';
import {useAuthState} from 'react-firebase-hooks/auth';

const Signup = () => {
    const [user] = useAuthState(auth);
    const [createUserWithEmailAndPassword, loogedUser, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            toast.success('Successfully registered!');
            return navigate(from, { replace: true });
        }
        if (error || updateError) {
            toast.error(error?.message || updateError?.message);
        }
    }, [loogedUser, navigate, from, error, updateError, token, user])

    if (loading || updating) {
        return <Loader />
    }

    const onSubmit = handleSubmit(async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    });

    return (
        <div className='p-3'>
            <form onSubmit={onSubmit} className='lg:w-1/2 py-8 w-full mx-auto'>
                <h1 className="text-3xl font-bold text-primary">Create Account</h1>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register("name", { required: true, minLength: 3 })} className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text-alt text-error">{errors.name?.type === 'required' && "Your name is required"} {errors.name?.type === 'minLength' && "Name is too short"}</span>
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label>
                    <input type="email" placeholder="Type here" {...register("email", { required: true, pattern: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/ })} className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text-alt text-error">{errors.email?.type === 'required' && "Your email is required"} {errors.email?.type === 'pattern' && "Invalid Email"}</span>
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">What is your password?</span>
                    </label>
                    <input type="password" placeholder="Type here" {...register("password", { required: true, minLength: 6 })} className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text-alt text-error">{errors.password?.type === 'required' && "Your password is required"} {errors.password?.type === 'minLength' && "password is too short"}</span>
                    </label>
                </div>
                <input type="submit" className="btn w-full btn-primary" value="Register" />

                <Social />

                <p className='mt-3'>Have account? <Link to={'/login'} className='text-primary'>Login Here</Link></p>
            </form>
        </div>
    );
};

export default Signup;