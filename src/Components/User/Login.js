import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import auth from './../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from './../../Shared/Loader';
import Social from '../../Shared/Social';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user?.user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            toast.success('Successfully logged in!');
            return navigate(from, { replace: true });
        }
        if (error) {
            toast.error(error.message);
        }
    }, [user, navigate, from, error, token]);

    if (loading) {
        return <Loader />
    }

    const onSubmit = handleSubmit(async data => {
        const email = data.email;
        const password = data.password;
        await signInWithEmailAndPassword(email, password);
    });


    return (
        <div className='p-3 my-10'>
            <form onSubmit={onSubmit} className='lg:w-1/2 w-full mx-auto'>
                <h1 className="text-3xl font-bold pb-3 text-primary">Please Login</h1>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input type="email" placeholder="Your Email" {...register("email", { required: true, pattern: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/ })} className="input input-bordered w-full" />

                    <label className="label">
                        <span className="label-text-alt text-error">{errors.email?.type === 'required' && "Email is required"} {errors.email?.type === 'pattern' && "Invalid Email"}</span>
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <input type="password" placeholder="Your Password" {...register("password", { required: true, minLength: 6 })} className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text-alt text-error">{errors.password?.type === 'required' && "Password is required"} {errors.password?.type === 'minLength' && "Password is too short"}</span>
                    </label>
                    {<p className='text-error py-2'>{error?.message}</p>}
                </div>
                <input type="submit" className="btn w-full btn-primary" value="Login" />

                <Social/>
                
                <p className='mt-3'>No account? <Link to={'/signup'} className='text-primary'>Register Here</Link></p>
            </form>
        </div>
    );
};

export default Login;